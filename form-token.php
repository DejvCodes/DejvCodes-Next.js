<?php
declare(strict_types=1);

// Configure secure session cookie settings
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'secure' => true,     // send cookie only over HTTPS
  'httponly' => true,   // prevent JavaScript access to the session cookie
  'samesite' => 'Lax',  // helps reduce CSRF risk while keeping normal form usage practical
]);

// Prevent caching of the response
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Content-Type: application/json; charset=UTF-8');
header('Vary: Cookie'); // response depends on the current session cookie

function fail(int $code, string $msg): void {
  http_response_code($code);
  echo json_encode(['ok' => false, 'message' => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

// Only allow GET requests for CSRF token retrieval
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
  fail(405, 'Method not allowed');
}

// Start or resume the current session
session_start();

// Generate a CSRF token only if it does not exist yet
if (empty($_SESSION['csrf'])) {
  session_regenerate_id(true); // refresh session ID when initializing a new session
  $_SESSION['csrf'] = bin2hex(random_bytes(32)); // create a secure random token
}

// Return the token as JSON
echo json_encode([
  'ok' => true,
  'csrf' => $_SESSION['csrf'],
], JSON_UNESCAPED_UNICODE);
