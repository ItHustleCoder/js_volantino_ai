<?php

$data = '';
echo "<pre>";
    print_r($_POST['fname']);
echo "</pre>";
$usrName = $_POST['fname'];
$usrPass = $_POST['fpass'];
$usrEmail = $_POST['femail'];
$usrPhone = $_POST['fphone'];



echo "Nome: $usrName, pass: $usrPass, email: $usrEmail, phone: $usrPhone ";





?>