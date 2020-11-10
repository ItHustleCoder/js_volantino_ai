<?php
$inactive = 3000;
ini_set('session.gc_maxlifetime', $inactive);

 session_start();
if (!($_SESSION['user_name'])) {
  header('Location: ../../index.php');
}
/* Set timer logout */
if (isset($_SESSION['testing']) && (time() - $_SESSION['testing'] > $inactive)) {
  session_destroy();
  session_unset();
  header('Location : ../../index.php');
  
}

$_SESSION['testing'] = time();
  


?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Crea account</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet">
   
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel= "stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="../../includes/artyom.window.js"></script>
    <script src="../../includes/annyang.js"></script>
</head>
<body>
    <div class="registration-form">
        <span id="hello_user">Hello <?php echo $_SESSION['name'] ?></span>
        <form id="form-in" >
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" name="username" class="form-control item" id="username" placeholder="Nome">
            </div>
            <div class="form-group">
                <input type="text" name="email"  class="form-control item" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" name="pass" class="form-control item" id="password" placeholder="Password">
            </div>
           
           <!--  <div class="form-group">
                <input type="text" name="telefono" class="form-control item" id="phone-number" placeholder="Telefono">
            </div> -->
            <!-- <div class="form-group">
                <input type="text" class="form-control item" id="birth-date" placeholder="Birth Date">
            </div> -->
            <div class="form-group">
                <button type="submit" name="btn" class="btn btn-block create-account" id="btn-send">Create User</button>
            </div>
        </form>
        <div class="social-media">
            <!-- <h5>Sign up with social media</h5> -->
            <div id="span-box" class="span-box">
                <h5 id="text"></h5>
                    <ul id="list">

                    </ul>
            <div class="social-icons"></div>
            </div>
        </div>
    </div>

    <div class="text-center">
	<!-- Button HTML (to Trigger Modal) -->
	<a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Open Confirm Modal</a>
</div>

<!-- Modal HTML -->
<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header flex-column">
				<div class="icon-box">
					<i class="material-icons">&#xE5CD;</i>
				</div>						
				<h4 class="modal-title w-100 title-ct">Seiete sicuro?</h4>	
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
				<p>Che vuolete uscire dall'account. Data compilati in questa sessione saranno persi</p>
			</div>
			<div class="modal-footer justify-content-center">
                <button type="button" class="btn "><a href="../menu/menu.php">Si</a></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
			</div>
		</div>
	</div>
</div>     

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script>
        $(document).ready(function(){
            // $('#birth-date').mask('00/00/0000');
            $('#phone-number').mask('000-00-00-000');

            /* Get value form input */
            $("#form-in").submit(function(e) {
                var fname = $("#username").val();
                var fpass = $("#password").val();
                var femail = $("#email").val();
                /* var fphone = $("#phone-number").val(); */

                e.preventDefault();
                    $.ajax({
                        type:"POST",
                        url: "vendor/getData.php",
                        dataType: "json",
                        data: {
                            fname: fname,
                            fpass: fpass,
                            femail: femail,
                            

                        },
                        success: function(data) {
                            console.log(`Success ${data}`);
                        }
                      
                    });
            })


        })

        var newUsr;

       $.ajax({
                        type:"POST",
                        url: "vendor/session_data.php",
                       
                        complete: function(data) {
                            console.log(`Success ${data}`);
                            
                                // newUsr = data.responseText;
                                // console.log(newUsr);
                                
                        }
                      
        });
         
        var nameUsr;
        nameUsr = "<?php echo $_SESSION['name'] ?>"

       
        newUser = "<?php echo $_SESSION['test'] ?>";
        console.log(`Ecco nuovo uttente e : ${newUser}`);
       
    </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js"></script>
    <script src="./form.js"></script>

</body>
</html>
