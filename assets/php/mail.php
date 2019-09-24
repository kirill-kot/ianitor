<?php
//vars
$post = (!empty($_POST)) ? true : false;
if($post) {
$name = isset($_POST['name']) ? $_POST['name'] : false;
$email = isset($_POST['email']) ? $_POST['email'] : false;
$phone = isset($_POST['tel']) ? $_POST['tel'] : false;
$message = isset($_POST['message']) ? $_POST['message'] : false;
$error = '';
//$emailTo = 'kirill.kot.1989@gmail.com'; // адрес куда отправлять письмо, можно несколько через запятую
$emailTo = 'info@ianitor.ru'; // адрес куда отправлять письмо, можно несколько через запятую
$subject = 'Новое сообщение с сайта от '.$name; // тема письма

//собираем хтмл письмо
$body = '<!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML 4.0 Transitional//EN">
   <html>
   <head>
   </head>
   <body class="emailContent">
   <p>Имя: '.$name.'</p>
	<p>Адрес электронной почты: <a href="mailto:'.$email.'">'.$email.'</a>, телефон для связи: <a href="tel:'.$phone.'">'.$phone.'</a></p>
	<p>'.$message.'</p>
  </body>
  </html>';

$smtp = 1; // отправлять ли через личный почтовый ящик, 1 - отправлять, 0 - через хостинг
$__smtp = array(
	"host" => 's29.webhost1.ru', // сервер отправки писем (SMTP) СМТП адрес сервера
	"auth" => true, // нужна ли авторизация (как правило нужна)
	"secure" => 'ssl', // тип защиты
	"port" => 465, // порт сервера
	"charset" => 'utf-8', // кодировка
	"from" => 'ADW Ianitor mail service', // имя отправителя
	"addreply" => 'mailer@adw-ianitor.ru', // адрес куда отвечать
	"username" => 'mailer@adw-ianitor.ru', // логин почтового сервера
	"password" => 'ianitor2k18', // пароль к почте
);

$fields = "";

function smtpmail($emailTo, $subject, $body)
{
	global $success, $__smtp, $smtp;
	require_once("PHPMailerAutoload.php");
	$mail = new PHPMailer(true);
	if ($smtp) {
		$mail->IsSMTP();
	}
	try {
		$mail->Host = $__smtp['host'];
		$mail->SMTPDebug = 0;
		$mail->SMTPAuth = $__smtp['auth'];
		$mail->SMTPSecure = $__smtp['secure'];
		$mail->Port = $__smtp['port'];
		$mail->CharSet = 'utf-8';
		$mail->Username = $__smtp['username'];
		$mail->Password = $__smtp['password'];
		$mail->addReplyTo('mailer@adw-ianitor.ru');
		$mail->SetFrom('mailer@adw-ianitor.ru');
		$mail->MsgHTML($body);
		$mail->Subject = (trim($subject));
		$mail->isHTML(true);
//		$mail->addAttachment('../img/img4.jpg', 'img4.jpg');
		$to_array = explode(',', $emailTo);
		foreach ($to_array as $emailTo) {
			$mail->addAddress($emailTo);
		}
		$mail->Send();
	} catch (phpmailerException $e) {
		echo $e->errorMessage();
	} catch (Exception $e) {
		echo $e->getMessage();
	}
}

smtpmail($emailTo, $subject, $body);
$emailSent = true;
if ($emailSent = true) {
	echo 'success';
	} else {
		echo $error;
}
}
?>
