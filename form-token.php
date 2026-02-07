<?php
declare(strict_types=1);

// setting secure session cookie parameters
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'secure' => true,     // only over HTTPS
  'httponly' => true,   // JS cannot access the cookie
  'samesite' => 'Lax',  // or 'Strict' (Lax is usually more practical)
]);

// preventing caching of the response
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Content-Type: application/json; charset=UTF-8');

function fail(int $code, string $msg): void {
  http_response_code($code);
  echo json_encode(['ok' => false, 'message' => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
  fail(405, 'Method not allowed');
}

// simple origin check (match host)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host   = $_SERVER['HTTP_HOST'] ?? '';

if ($origin) {
  $originHost = parse_url($origin, PHP_URL_HOST);
  if (!$originHost || strcasecmp($originHost, $host) !== 0) {
    fail(403, 'Bad origin');
  }
}

session_start();

if (empty($_SESSION['csrf'])) {
  $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

echo json_encode(['csrf' => $_SESSION['csrf']], JSON_UNESCAPED_UNICODE);
