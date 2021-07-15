<?php
    // check for submission
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['msg'];

        $mailTo = "austin@austinmusiku.co.ke";
        $subject = "Mail from portfolio website";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an email from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header('Location:/');
    }
?>
