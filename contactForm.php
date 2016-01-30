<?php
 
    $email_to = "anthilton@gmail.com";
	
	$email_from = $_POST['email'];
 
    $email_subject = "Message from DACCS website";    
	
	$contact_number = $_POST['contactNumber'];

	$name = $_POST['name'];
	
	$email_message = $_POST['message'];   
 
	// create email headers
	 
	$headers = 'From: '.$email_from."\r\n".
	 
	'Reply-To: '.$email_from."\r\n" .
	 
	'X-Mailer: PHP/' . phpversion();

	if (mail($email_to, $email_subject, $email_message, $headers)) 
	{  
		echo("<p>Email successfully sent!</p>");  
	} 
	else 
	{   
		echo("<p>Email delivery failed…</p>");  
	} 
?> 