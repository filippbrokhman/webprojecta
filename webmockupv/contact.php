<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "vitaly@avminstallation.ca";

    $email_subject = !empty($subject) ? $subject : "New Contact Form Message";

    $body = "You have received a new message from your website contact form from: \n\n" .
            "Name: $name\n" . 
            "Email: $email\n" . 
            "Phone: $phone\n" . 
            "Message: \m$message";
    
    $headers = "From: $name $email \r\n";
    $headers .= "Reply-To: $email \r\n";

    if (mail($to, $email_subject, $body, $headers)) {
        http_response_code(200);
        echo "Successful message has been sent"
    } else {
        http_response_code(500);
        echo "Message encountered an error";
    } else {
        http_response_code(403);
        echo "Invalid request.";
    }

}
?>