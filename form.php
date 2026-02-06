<?php
declare(strict_types=1);

session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  // 'domain' => $_SERVER['HTTP_HOST'] ?? '',
  'secure' => true,     // only over HTTPS
  'httponly' => true,   // JS cannot access the cookie
  'samesite' => 'Lax',  // or 'Strict' (Lax is usually more practical)
]);

session_start();

header('Content-Type: application/json; charset=UTF-8');

function fail(int $code, string $msg): void {
  http_response_code($code);
  echo json_encode(['ok' => false, 'message' => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  fail(405, 'Method not allowed');
}

// --- configuration ---
$TO = 'info@dejvcodes.com';
$FROM = 'noreply@dejvcodes.com'; // must be your domain

// --- simple anti-bot stuff ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host   = $_SERVER['HTTP_HOST'] ?? '';

if ($origin) {
  $originHost = parse_url($origin, PHP_URL_HOST);
  if (!$originHost || strcasecmp($originHost, $host) !== 0) {
    fail(403, 'Bad origin');
  }
}


// honeypot (field must remain empty)
$hp = (string)($_POST['website'] ?? '');
if (trim($hp) !== '') {
  fail(400, 'Spam detected');
}

// CSRF token (from form-token.php)
$csrf = (string)($_POST['csrf'] ?? '');
$sess = (string)($_SESSION['csrf'] ?? '');
if (!$sess || !hash_equals($sess, $csrf)) {
  fail(403, 'Invalid token');
}

// --- rate limit (IP) ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDir = __DIR__ . '/_form';
if (!is_dir($rateDir)) {
  mkdir($rateDir, 0700, true);
}

// občasný úklid starých rate-limit souborů (např. 1x z 50 requestů)
if (random_int(1, 50) === 1) {
  $ttl = 7 * 24 * 60 * 60; // 7 dní
  foreach (glob($rateDir . '/rl_*.json') as $file) {
    if (is_file($file) && filemtime($file) < time() - $ttl) {
      @unlink($file);
    }
  }
}

$rateFile = $rateDir . '/rl_' . preg_replace('~[^a-z0-9._-]~i', '_', $ip) . '.json';

$now = time();
$window = 60;     // 60s window
$maxReq = 5;      // max 5 requests / min / IP

$hits = [];
if (is_file($rateFile)) {
  $hits = json_decode((string)file_get_contents($rateFile), true);
  if (!is_array($hits)) $hits = [];
}
$hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > ($now - $window)));
if (count($hits) >= $maxReq) {
  fail(429, 'Please try again in a moment.');
}
$hits[] = $now;
file_put_contents($rateFile, json_encode($hits), LOCK_EX);

// --- input validation ---
$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$subject = trim((string)($_POST['subject'] ?? ''));
$privacy = (string)($_POST['privacy-policy'] ?? '');
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || mb_strlen($name) > 80) fail(400, 'Fill in your name.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 120) fail(400, 'Invalid email.');
if ($privacy !== 'on') fail(400, 'Please accept the privacy policy.');
if ($subject === '' || mb_strlen($subject) > 200) fail(400, 'Fill in the subject.');
if ($message === '' || mb_strlen($message) > 4000) fail(400, 'Message is empty / too long.');

// ochrana proti header injection
$emailSafe = str_replace(["\r", "\n"], '', $email);
$nameSafe  = str_replace(["\r", "\n"], '', $name);
$subjectSafe = str_replace(["\r", "\n"], '', $subject);

// --- composing the email ---
$emailSubject = $subjectSafe;

$body =
"Name: {$nameSafe}\n" .
"Email: {$emailSafe}\n" .
"Subject: {$subjectSafe}\n" .
"Privacy Accepted: {$privacy}\n" .
"---\n" .
$message . "\n";

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  "From: DejvCodes <{$FROM}>",
  "Reply-To: {$emailSafe}",
];

// UTF-8 subject
$subjectEnc = '=?UTF-8?B?' . base64_encode($emailSubject) . '?=';

// IMPORTANT for WEDOS: return-path via -f (their KB recommendation)
$ok = mail(
  $TO,
  $subjectEnc,
  $body,
  implode("\r\n", $headers),
  '-f ' . $FROM
);

if (!$ok) {
  fail(500, 'Sending failed. Please try again later.');
}

unset($_SESSION['csrf']);

echo json_encode(['ok' => true, 'message' => 'Thanks! Your message has been sent.'], JSON_UNESCAPED_UNICODE);
