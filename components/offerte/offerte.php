<?php 
session_start();
if (!($_SESSION['user_name'])) {
  header('Location: ../../index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../../src/favicon.ico"/>
    <link rel="stylesheet" href="./offerte.css">
    <title>Offerte</title>
</head>
<body>
    <div class="container">
        <nav class="nav-bar">
            <div class="nav-item">
                <div class="title">Offerte</div>
            </div>
        </nav>
    </div>
</body>
</html>