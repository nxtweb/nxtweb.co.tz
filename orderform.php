<?php

$name = $_POST['name'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$order = $_POST['order'];
if(isset($_POST['order_description']))
{
	$description = $_POST['order_description'];
}
else
{
	$description = 'none';
}

if($_POST['subscribe'] === 'subscribe')
{
	$subscribe = 'Yes';
}
else
{
	$subscribe = 'No';
}


$to = 'simon@purplemesh.net';
$subject = 'Order request from website';
$headers = 'From: youremail@domain.com';

if($description == 'none')
{
$message = 'FROM: '.$name.'<br> Company: '.$company.'<br>Email: '.$email.'<br>Phone: '.$phone.'<br>Order: '.$order.'<br>Subscribe: '.$subscribe;
}
else
{
$message = 'FROM: '.$name.'<br> Company: '.$company.'<br>Email: '.$email.'<br>Phone: '.$phone.'<br>Order: '.$order.'<br>Subscribe: '.$subscribe.'<br>Description: '.$description;
}
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message) or die('Error sending Mail'); //This method sends the mail.
echo "Your email was sent!"; // success message
}

?>