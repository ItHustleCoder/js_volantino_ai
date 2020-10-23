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
  // header('Location : ../../index.php');
  
}

$_SESSION['testing'] = time();
  


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <link rel="icon" href="../../src/favicon.ico"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Volantino più</title>
    <script src="../../artyom.window.js"></script>
</head>
<body>

    <div class="wrapper">
      <div class="boxBtnLogOut">
      <a href="../../vendor/logout.php">
      <button class="btnLogOut">LogOut</button>
      </a>
      <div class="blink-box">
        <p class="blink-none" id="blink-box">Listening</p>
        <span class="record-none" id="record"><span>
      </div>
      </div>
      <div class="breaking-news">
        <div class="bn-title"><span></span></div>
        <div class="news-ticker">
            <div class="tickercontainer">
                 <div class="mask">
                      <div class="newsticker">
                          <span> 
                              <i class="fas">&raquo;</i><a href="#">Dici: "Ti voglio bene, Ti amo"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici: "Apri + {categorie}, vai su categorie"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici:"Chiudi + {nome}"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici:"Volantino stop" per disattivare completamente </a> 
                              <i class="fas">&raquo;</i><a href="#">Dici: "Dimmi una barzaletta, fammi ridere"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici:"Lo sai chi e {Andrew , Rossano ect..}, Cosa pensi di {Andrwe, Rossano, Onofrio}"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici: "Stop, va bene va bene - per interrumpere"</a> 
                              <i class="fas">&raquo;</i><a href="#">Dici: "Condividi + {whatsapp, instagram, facebook, google, twitter}</a>
                              <i class="fas">&raquo;</i><a href="#">Dici: "volantino la tua idea","volantino perchè sei nato"</a>
                              <i class="fas">&raquo;</i><a href="#">Dici: "Ripeti dopo di me..."</a>
                          </span>
                      </div>
                  </div>
             </div>
         </div>
    </div>
      <audio id="audioMusic">
        <source src="../../Jump-SoundBible.com-1007297584.mp3">
      </audio>
      <a href="#" class="wave-btn" id="btn" onclick="bell()">
        <span class="wave-btn_text" id="textB">Start</span>
        <span class="wave-btn_waves" id="wave-btn_waves"></span>
    </a>
    <div class="share-box">
    <ul>
      <li class="facebook" id="facebook"><a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
      <li class="twitter" id="twitter"><a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
      <li class="instagram" id="instagram"><a href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
      <li class="google" id="gmail"><a href="#"><i class="fa fa-google fa-2x" aria-hidden="true"></i></a></li>
      <li class="whatsapp" id="whatsapp"><a href="#"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a></li>
    </ul>
  </div>

    <div class="span-box">
      <span id="output"></span>  
    </div>
    
  </div> 
        
  <script src="./main.js"></script>
   
</body>
</html>


