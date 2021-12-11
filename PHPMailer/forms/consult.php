<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../src/Exception.php';
require '../src/PHPMailer.php';

$name = $_POST['name'];
$phone = $_POST['phone'];

$title = "Получить консультацию";
$body = "
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
";

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');

$mail->setFrom('ivoryplay01@gmail.com', 'Заявка с сайта');
$mail->AddAddress('ivoryplay01@gmail.com');

$mail->IsHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

if (!$mail->send()) {
  $message = false;
} else {
  $message = true;
}
$response = ['message' => $message, 'body' => $body];

header('Content-type: application/json');

echo json_encode($response);
