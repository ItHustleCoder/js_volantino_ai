<?php 
session_start();
if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Hello, <?php echo $_SESSION['name'];?></title>
	<link rel="stylesheet" type="text/css" href="./hello.css">
</head>
<body>
     <div class="container">
          <h1 class="title">Benvenuto, <?php echo $_SESSION['name']; ?></h1>
          <div class="logout-box">
               <a onclick="check()" class="logout" href="./logout.php">Logout</a>
          </div>
          <div>
               <p id="msg"></p>
          </div>
     </div>

     <script>
          document.addEventListener('DOMContentLoaded', () => {
               let time = 10;
               const msg = document.getElementById('msg');
               let index = time;

               let timerId = setInterval(function() {
                    msg.innerHTML = `Sarà redirezionato fra: ${(index --)} secondi`;
               },1000);

               setTimeout(() => {
                    clearInterval(timerId)
                    console.log('finito');
                    location.href = "../components/main/main.php";
               },time*1100);

          })
     </script>
</body>
</html>

<?php
}else{
     header("Location: ../index.php");
     exit();
}
 ?>