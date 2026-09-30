<?php
// ========================================
// ✅ ENABLE CORS (for React Frontend)
// ========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ========================================
// ✅ INCLUDE PHPMailer
// ========================================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';
require __DIR__ . '/turnstile.php';

// ========================================
// ✅ READ JSON INPUT
// ========================================
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!is_array($data) || !verify_turnstile(
    $data['cf-turnstile-response'] ?? '',
    $_SERVER['REMOTE_ADDR'] ?? ''
)) {
    http_response_code(403);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode([
        "status" => "error",
        "message" => "Bot verification failed. Please try again."
    ]);
    exit();
}

// Validate input
if (
    !$data ||
    !isset($data['fullname']) ||
    !isset($data['email']) ||
    !isset($data['message'])
) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid form data."
    ]);
    exit();
}

// ========================================
// ✅ EXTRACT FORM FIELDS
// ========================================
$fullname = htmlspecialchars($data['fullname']);
$email    = htmlspecialchars($data['email']);
$number   = htmlspecialchars($data['number'] ?? '');
$message  = nl2br(htmlspecialchars($data['message']));

// ========================================
// ✅ INITIALIZE PHPMailer
// ========================================
$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'wisewebtek.in';         // your mail server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'test@wisewebtek.in';    // your SMTP email
    $mail->Password   = 'Wisewebtek@123';        // your SMTP password
    $mail->SMTPSecure = 'tls';                   // or 'ssl'
    $mail->Port       = 587;                     // use 465 if SSL

    // Sender & Recipient
    $mail->setFrom('test@wisewebtek.in', 'Heritage B&B');
    $mail->addAddress('info@heritagebnb.in', 'Heritage B&B');
    $mail->addReplyTo($email, $fullname);

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Message";
    $mail->Body = "
        <html>
        <body style='font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;'>
            <div style='max-width:600px; margin:auto; background:#fff; padding:20px; border-radius:8px;'>
                <h2 style='color:#333;'>New Contact Form Message</h2>
                <p><strong>Name:</strong> {$fullname}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Phone:</strong> {$number}</p>
                <p><strong>Message:</strong> {$message}</p>
                <hr>
                <p style='font-size:12px;color:#777;'>This email was sent from your website contact form.</p>
            </div>
        </body>
        </html>
    ";

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully."
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Mailer Error: " . $mail->ErrorInfo
    ]);
}
