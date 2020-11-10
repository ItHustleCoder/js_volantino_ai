<?php
session_start();
include 'db_conn.php';
    

if(isset($_POST['fname']) && isset($_POST['fpass']) && isset($_POST['femail'])) {


    function validate($data) {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $usrName = validate($_POST['fname']);
    $userPass = validate($_POST['fpass']);
    $usrEmail = validate($_POST['femail']);

    if(empty($usrName) && empty($userPass) && empty($usrEmail)) {
        header("Location: ../form.php");
    }else {
        $createUser = mysqli_query($conn, "INSERT INTO `users`(`id`, `name`, `email`, `password`, `data_stamp`) VALUES (NULL,'$usrName','$usrEmail','$userPass', NULL)");
        echo 'Andato con sucesso';

    }

}

    // /* Get User in $_SESSION */
    // $sql = mysqli_query($conn,"SELECT * FROM `users` ORDER BY `id` DESC LIMIT 1") or die(mysql_error());
    // $row = mysqli_fetch_array($sql);
    // echo $row['name']."<br>".$row['email'];
    // $_SESSION['test'] = $row['name'];
    // $_SESSION['Newemail'] = $row['email'];
   


?>