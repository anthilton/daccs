<?php
 
    $email_to = "anthilton@gmail.com";
	
	$email_from = $_POST['emailAddress'];
 
    $email_subject = "Email From DACCS Website";    
 

	$name = $_POST['name'];
	
	$message = $_POST['message'];
 
 
    $email_message = "Form details below.\n\n";
 
    $email_message .= "Name: ".$name."\n";
 
    $email_message .= "Message: ".$message."\n"; 
     
 
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