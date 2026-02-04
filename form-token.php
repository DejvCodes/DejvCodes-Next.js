<?php
declare(strict_types=1);

// preventing caching of the response
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

// setting secure session cookie parameters
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'domain' => $_SERVER['HTTP_HOST'] ?? '',
  'secure' => true,     // only over HTTPS
  'httponly' => true,   // JS cannot access the cookie
  'samesite' => 'Lax',  // or 'Strict' (Lax is usually more practical)
]);

session_start();

if (empty($_SESSION['csrf'])) {
  $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode(['csrf' => $_SESSION['csrf']], JSON_UNESCAPED_UNICODE);
