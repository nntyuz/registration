<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../src/Exception.php';
require '../src/PHPMailer.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$lastname = $_POST['lastname'];
$middlename = $_POST['middlename'];
$birthdate = $_POST['birthdate'];
$place = $_POST['place'];
$document = $_POST['document'];
$expiredate = $_POST['expiredate'];
$authority = $_POST['authority'];
$issuedate = $_POST['issuedate'];
$citizenship = $_POST['citizenship'];
$documenttype = $_POST['documenttype'];
$registration = $_POST['registration'];
$comment = $_POST['comment'];

$title = "Получить консультацию";
$body = "
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Фамилия:</b> $lastname<br>
<b>Отчество:</b> $middlename<br>
<b>Дата рождения:</b> $birthdate<br>
<b>Место рождения:</b> $place<br>
<b>Гражданство:</b> $citizenship<br>
<b>Тип документа:</b> $documenttype<br>
<b>Серия и номер документа:</b> $document<br>
<b>Срок действия паспорта:</b> $expiredate<br>
<b>Кем выдан документ:</b> $authority<br>
<b>Дата выдачи документа:</b> $issuedate<br>
<b>Срок регистрации:</b> $registration<br>
<b>Комментарий:</b> $issuedate<br><br>
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
