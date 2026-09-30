<?php
function verify_turnstile($token, $remoteIp)
{
    $secret = getenv('TURNSTILE_SECRET_KEY');
    if ($secret === false || $secret === '') {
        $localConfig = __DIR__ . '/.env';
        if (is_file($localConfig)) {
            $config = parse_ini_file($localConfig, false, INI_SCANNER_RAW);
            $secret = $config['TURNSTILE_SECRET_KEY'] ?? '';
        }
    }

    $token = trim((string) $token);

    if (!$secret || $token === '' || strlen($token) > 2048) {
        return false;
    }

    $payload = [
        'secret' => $secret,
        'response' => $token,
    ];

    if ($remoteIp !== '') {
        $payload['remoteip'] = $remoteIp;
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => http_build_query($payload),
            'timeout' => 8,
            'ignore_errors' => true,
        ],
    ]);

    $response = @file_get_contents(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        false,
        $context
    );

    if ($response === false) {
        return false;
    }

    $result = json_decode($response, true);
    return is_array($result) && ($result['success'] ?? false) === true;
}
