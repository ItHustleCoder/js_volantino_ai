<?php 
    session_start();
    include 'db_conn.php';
        $sql = mysqli_query($conn,"SELECT * FROM `users` ORDER BY `id` DESC LIMIT 1") or die(mysql_error());
        $row = mysqli_fetch_array($sql);
        // echo $row['name']."<br>".$row['email'];
        $_SESSION['test'] = $row['name'];
        $_SESSION['Newemail'] = $row['email'];


        echo $_SESSION['test'];

?>