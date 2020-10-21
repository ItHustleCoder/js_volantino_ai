<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="login.css">
</head>
<div class="container">
	<div class="img-box">
		<img class="App-logo" src="./src/logo.svg" alt="logo"/>
	</div>
     <form class="box" action="./vendor/login.php" method="post" autocomplete="off" spellcheck="false">
     	<h1>LOGIN</h1>
		 <?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
		 <?php } ?>
		
     	<input type="text" name="uname" placeholder="Login"><br>
     	<input type="password" name="password" placeholder="Password"><br>

     	<button class="thisBtn" type="submit">Login</button>
     </form>
</div>

</body>
</html>