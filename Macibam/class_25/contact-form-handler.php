<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $pers = $_POST['pers'];
    $phone = $_POST['phone'];
;

    $email_form = 'bomissan@inbox.lv';

    $email_subject = "Online pieteikums";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message $message.\n".
                        "User Phone $phone.\n".
                          "User Pers: $pers.\n";
                   
                          


    $to = "bomissan@inbox.lv";
    $headers = "Form: $email_form \r\n";
    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location:class25.html");


?>