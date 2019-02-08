<?php
if(isset($_POST['email'])){
		$mailTo = "skratchupmusic@gmail.com";
		$subject = "mail from Nirvana Web";
		$body = "New message from Nirvana Web
<br><br>
FROM: ".$_POST['email']."<br>
NAME: ".$_POST['author']."<br>
COMMENTS: ".$_POST['message']."<br>";	
		$headers = "To: Solido <".$mailTo.">\r\n";
		$headers .= "From: ".$_POST['author']." <".$_POST['email'].">\r\n";
		$headers .= "Content-Type: text/html";
		//envio destinatario
		$mail_success =  mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers);		
}
?>  