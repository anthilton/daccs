<?php
 
    $email_to = "anthilton@gmail.com";
	
	$email_from = $_POST['email'];
 
    $email_subject = "Brochure Request";    
 

	$name = $_POST['name'];
	
	$housenumber = $_POST['housenumber'];
	
	$postcode = $_POST['postcode'];
 
 
    $email_message = "Form details below.\n\n";
 
    $email_message .= "Name: ".$name."\n";
 
    $email_message .= "House Number: ".$housenumber."\n";
 
    $email_message .= "Postcode: ".$postcode."\n";
 
     
 
     
 
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