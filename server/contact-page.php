<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';
require __DIR__ . '/turnstile.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data) || !verify_turnstile(
    $data['cf-turnstile-response'] ?? '',
    $_SERVER['REMOTE_ADDR'] ?? ''
)) {
    http_response_code(403);
    echo json_encode([
        "status" => "error",
        "message" => "Bot verification failed. Please try again."
    ]);
    exit();
}

if (
    !is_array($data) ||
    empty($data['fullname']) ||
    empty($data['email']) ||
    empty($data['number']) ||
    !filter_var($data['email'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Please provide a name, valid email, and phone number."
    ]);
    exit();
}

$escape = static function ($value) {
    return htmlspecialchars(trim((string) $value), ENT_QUOTES, 'UTF-8');
};

$fullname = $escape($data['fullname']);
$email = $escape($data['email']);
$number = $escape($data['number']);
$city = $escape($data['city'] ?? '');
$interest = $escape($data['interest'] ?? '');
$message = nl2br($escape($data['message'] ?? ''));

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'wisewebtek.in';
    $mail->SMTPAuth = true;
    $mail->Username = 'test@wisewebtek.in';
    $mail->Password = 'Wisewebtek@123';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('test@wisewebtek.in', 'Heritage B&B');
    $mail->addAddress('info@heritagebnb.in', 'Heritage B&B');
    $mail->addReplyTo($email, $fullname);

    $mail->isHTML(true);
    $mail->Subject = 'New Website Enquiry';
    $mail->Body = "
        <html>
        <body style='font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;'>
            <div style='max-width:600px; margin:auto; background:#fff; padding:20px; border-radius:8px;'>
                <h2 style='color:#333;'>New Website Enquiry</h2>
                <p><strong>Name:</strong> {$fullname}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Phone:</strong> {$number}</p>
                <p><strong>Project location:</strong> {$city}</p>
                <p><strong>Interested in:</strong> {$interest}</p>
                <p><strong>Message:</strong><br>{$message}</p>
                <hr>
                <p style='font-size:12px;color:#777;'>This enquiry was sent from the Heritage B&B contact page.</p>
            </div>
        </body>
        </html>
    ";

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Enquiry sent successfully."
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Unable to send your enquiry right now. Please try again."
    ]);
}