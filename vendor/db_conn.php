<?php

$sname= "localhost";
/* $unmae= "testing3";
$password = "AoZm0FkLMQz5QTG";

$db_name = "testing3"; */


/* Locale */

 $unmae= "root";
$password = "";

$db_name = "test_db"; 

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}