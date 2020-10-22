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
    <link rel="stylesheet" href="./category.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">    <title>Volantino Test</title> -->
    <title>Category</title>
    <script src="../../artyom.window.js"></script>
</head>
<body>

<div class="card-sections">
        <div>
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=4" />
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Novita</h2>
                  <h3>Prodotto numero 1</h2>
              </div>
             
              <div class="content">
                <p>Per scegliere prodotto dici: "Seleziona e numero del prodotto"</p>
              </div>
              <input id="first_item" class="check_item" type="checkbox">
                </div>
               
            </div>
            
          </div>
          
          <div class="card-two">    
          
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=5" />
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Novita</h2>
                  <h3>Prodotto numero 2</h2>
              </div>
              <div class="content">
                <p>Per scegliere prodotto dici: "Seleziona e numero del prodotto"</p>
              </div>
              <input id="second_item" class="check_item" type="checkbox">
                </div>
            </div>
        </div>
        <div class="card-tree">
            <div class="card">
                <div class="image">
                  <img src="http://loremflickr.com/320/150?random=6" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h2>Novita</h2>
                    <h3>Prodotto numero 3</h2>
                </div>
                <div class="content">
                    <p>Per scegliere prodotto dici: "Seleziona e numero del prodotto"</p>
                </div>
                <input id="third_item" class="check_item" type="checkbox">
                  </div>
            </div>

            </div>

            <div class="card-four">
                <div class="card">
                    <div class="image">
                      <img src="http://loremflickr.com/320/150?random=1" />
                    </div>
                    <div class="card-inner">
                      <div class="header">
                        <h2>Novita</h2>
                        <h3>Prodotto numero 4</h2>
                        </div>
                    <div class="content">
                        <p>Per scegliere prodotto dici: "Seleziona e numero del prodotto"</p>
                    </div>
                    <input id="four_item" class="check_item" type="checkbox">
                      </div>
                </div>
    
                </div>
                <div class="card-five">
                    <div class="card">
                        <div class="image">
                          <img src="http://loremflickr.com/320/150?random=2" />
                        </div>
                        <div class="card-inner">
                          <div class="header">
                            <h2>Novita</h2>
                            <h3>Prodotto numero 5</h2>
                        </div>
                        <div class="content">
                            <p>Per scegliere prodotto dici: "Seleziona e numero del prodotto"</p>
                        </div>
                        <input id="five_item" class="check_item" type="checkbox">
                          </div>
                    </div>
        
                    </div>
    </div>

    <div class="box-wrap">

     <div class="wrapper_cat">   
        <div class="box-btn">
        <audio id="audioMusic">
          <source src="../../Jump-SoundBible.com-1007297584.mp3">
        </audio>
        <div class="btn-item">
          <a href="#" class="wave-btn" id="btn" onclick="bell()">
            <span class="wave-btn_text" id="textB">Start</span>
            <span class="wave-btn_waves" id="wave-btn_waves"></span>
          </a>
        </div>
      
      <div class="share-box">
      <ul>
        <li class="facebook" id="facebook"><a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
        <li class="twitter" id="twitter"><a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
        <li class="instagram" id="instagram"><a href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
        <li class="google" id="gmail"><a href="#"><i class="fa fa-google fa-2x" aria-hidden="true"></i></a></li>
        <li class="whatsapp" id="whatsapp"><a href="#"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a></li>
      </ul>
    </div>
    </div>
      <div class="span-box">
        <span id="output"></span>  
      </div>
      
    </div> 
`    </div>

     
  <script src="./category.js"></script>
   
</body>
</html>