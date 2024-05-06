<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email address where you want to receive the messages
    $to = "your_email@example.com";

    // Subject of the email
    $subject = "New message from $name";

    // Email body
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Your message has been sent successfully!</p>";
    } else {
        echo "<p>Oops! Something went wrong and we couldn't send your message.</p>";
    }
}
?>
