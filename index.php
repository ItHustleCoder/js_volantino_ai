
<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="login.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="apple-touch-icon" sizes="180x180" href="./src/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./src/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./src/favicon-16x16.png">
    <link rel="manifest" href="./img/site.webmanifest">
</head>
<div class="container">
	<div class="img-box">
		<div class="box-logo">
		<img class="App-logo" src="./src/logo.svg" alt="logo"/>
		</div>
	</div>
     <form class="box" id="form" action="./vendor/login.php" method="post" autocomplete="off" spellcheck="false">
     	<h1>LOGIN</h1>
		 <?php if (isset($_GET['error'])) { ?>
     		<p class="error" id="error"><?php echo $_GET['error']; ?></p>
		 <?php } ?>
		
     	<input type="text" id="name" name="uname" placeholder="Login"><br>
     	<input type="password" id="pass" name="password" placeholder="Password"><br>

     	<button class="thisBtn" id="btn_check"  type="submit">Login</button>
     </form>
</div>

</body>
</html>