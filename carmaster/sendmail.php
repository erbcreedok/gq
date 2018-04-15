<?php
require_once('PHPMailer/class.phpmailer.php');

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.carmaster.kz';                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@carmaster.kz';                 // SMTP username
$mail->Password = 'c@rm@sterkz';                           // SMTP password
$mail->SMTPSecure = 'no';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->From = 'info@carmaster.kz';
$mail->FromName = 'info@carmaster.kz';
$mail->addAddress('carmasterkz@gmail.com', 'a');     // Add a recipient
$mail->addAddress('carmasterkz@gmail.com');               // Name is optional
$mail->addReplyTo('carmasterkz@gmail.com', 'a');
$mail->CharSet = 'UTF-8';

$mail->isHTML(true);                                  // Set email format to HTML
$subject = $_GET['subject'];
$message = $_GET['message'];

$mail->Subject = $subject;
$mail->Body    = $message;
$mail->AltBody = $message;
if (!$mail->send()) {
    echo 'error';
} else {
    echo 'success';
};
?>