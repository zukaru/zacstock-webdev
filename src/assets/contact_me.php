<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$firstName = $request->firstName;
$lastName = $request->lastName;
$message = $request->message;
$email = $request->email;
$phone = $request->phone;


if(empty($firstName)      ||
   empty($lastName)   ||
   empty($message)   ||
   empty($phone)     ||
   !filter_var($email,FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

// Strip HTML Characters
$firstName = strip_tags(htmlspecialchars($fistName));
$name = strip_tags(htmlspecialchars($lastName));
$email_address = strip_tags(htmlspecialchars($email));
$phone = strip_tags(htmlspecialchars($phone));
$message = strip_tags(htmlspecialchars($message));



// Create the email and send the message
$to = "zs@zacstock.com"; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $firstName $lastName";
$email_body = "
<html>
<head>
<title>Website Contact Form</title>
</head>
<body>
<h3>Details</h3>
<ul>
   <li><b>Name:</b> $firstName $lastName</li>
   <li><b>Phone:</b> $phone</li>
   <li><b>Email:</b> $email_address</li>
</ul>
<h3>Message</h3>
<p>$message</p>
</body>
</html>
";
$headers = "From: no-reply@zacstock.com" . "\r\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail($to,$email_subject,$email_body,$headers);



return true;
?>
