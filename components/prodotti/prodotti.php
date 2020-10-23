<?php 
session_start();
if (!($_SESSION['user_name'])) {
  header('Location: ../../index.php');
}
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Prodotti</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="icon" href="../../src/favicon.ico"/>
    <link href="./prodotti.css" rel="stylesheet">

    <!-- import Artyom -->
    <script src="../../artyom.window.js"></script>

</head>

<body>

<div id="wrapper">

<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <img alt="image" class="rounded-circle" src="img/vpiu_logo_small.png"/>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="block m-t-xs font-bold"></span>
                        <!-- <span class="text-muted text-xs block"><b class="caret"></b></span> -->
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                        <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                        <li><a class="dropdown-item" href="mailbox.html">Mailbox</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="../../vendor/logout.php">Logout</a></li>
                    </ul>
                </div>
                <div class="logo-element">
                    
                </div>
            </li>
            <li >
                <a href="#" id="show_menu" aria-expanded="false" ><i class="fa fa-table"></i> <span class="nav-label">Menu</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level slide_menu">
                    <li class="active"><a href="./offerte.php">Prodotti</a></li>
                    <li><a href="../main/main.php">Menu</a></li>
                    <li><a href="../category/category.php">Categorie</a></li>
                
                </ul>
            </li>
        </ul>

    </div>
<!-- TODO: -->
    <ul class="command-menu">
        <li> Dici : volantino + </li>
        <li>{condividi} + [whats upp, instagram, google,twitter,facebook]}</li>
        <li>vai su categorie, apri categorie</li>
        <li class="check_barzz">dimmi una barzalletta, fammi ridire</li>
        <li>ti amo, ti voglio bene, sei carina</li>
        <li>esci dall'account</li>
        <li>apri, apri menù</li>
        <li>chiudi, chiudi menù</li>
        <li>la tua idea, perchè sei nato</li>
        <li>lo sai chi e {Andrew, Onofrio, Rossano} , Cosa pensi di {Andrew, Rossano, Onofrio}</li>

    </ul> 


</nav>

    <div id="page-wrapper" class="gray-bg">
    <div class="row border-bottom">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
        <form role="search" class="navbar-form-custom" action="search_results.html">
            <div class="form-group">
                <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
            </div>
        </form>
    </div>
        <ul class="nav navbar-top-links navbar-right">
            <li>
                <span class="m-r-sm text-muted welcome-message"></span>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-envelope"></i>  <span class="label label-warning">16</span>
                </a>
                <ul class="dropdown-menu dropdown-messages">
                    <li>
                        <div class="dropdown-messages-box">
                            <a class="dropdown-item float-left" href="profile.html">
                                <img alt="image" class="rounded-circle" src="img/a7.jpg">
                            </a>
                            <div class="media-body">
                                <small class="float-right">46h ago</small>
                                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>
                                <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <a class="dropdown-item float-left" href="profile.html">
                                <img alt="image" class="rounded-circle" src="img/a4.jpg">
                            </a>
                            <div class="media-body ">
                                <small class="float-right text-navy">5h ago</small>
                                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>
                                <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <div class="dropdown-messages-box">
                            <a class="dropdown-item float-left" href="profile.html">
                                <img alt="image" class="rounded-circle" src="img/profile.jpg">
                            </a>
                            <div class="media-body ">
                                <small class="float-right">23h ago</small>
                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>
                                <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <div class="text-center link-block">
                            <a href="mailbox.html" class="dropdown-item">
                                <i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
                </a>
                <ul class="dropdown-menu dropdown-alerts">
                    <li>
                        <a href="mailbox.html" class="dropdown-item">
                            <div>
                                <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                                <span class="float-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <a href="profile.html" class="dropdown-item">
                            <div>
                                <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                <span class="float-right text-muted small">12 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <a href="grid_options.html" class="dropdown-item">
                            <div>
                                <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                <span class="float-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                        <div class="text-center link-block">
                            <a href="notifications.html" class="dropdown-item">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>


            <li>
                <a href="../../vendor/login.php">
                    <i class="fa fa-sign-out"></i> Log out
                </a>
            </li>
        </ul>

    </nav>
    </div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Data Tables</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="../../index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a>Tables</a>
                    </li>
                    <li class="breadcrumb-item active">
                        <strong>Data Tables</strong>
                    </li>
                </ol>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Tabella dei prodotti</h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-wrench"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#" class="dropdown-item">Config option 1</a>
                            </li>
                            <li><a href="#" class="dropdown-item">Config option 2</a>
                            </li>
                        </ul>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <div class="ibox-content">
                <div style="margin-left: 15px;" class="conatiner">                
<!-- Start TODO: -->

                    <div class="search_container">
                        <form id="search_form"  name="q">
                            <input type='text' class="name_input" id='speechText'> &nbsp;
                            <input type='button' id='start' value='Start' onclick='startRecording();'>
                        </form>
                    </div>

                <!-- Search prodotti -->
                <div class="container"></div>

                </div>        
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- Area Artyom.js TODO:-->
    <div class="assi-box">
        <audio id="audioMusic">
            <source src="../../Jump-SoundBible.com-1007297584.mp3">
        </audio>
            <button id="assi-btn" class="btn-assi" onclick="bell()"><img src="./img/vpiu_logo_small.png" alt="Start"></button>
    </div>
    <span id="output_artyom"></span>
    

    <!-- Finish Area Artyom -->
    <div class="footer">
        <div class="float-right">
            10GB of <strong>250GB</strong> Free.
        </div>
        <div>
            <strong>Copyright</strong> Example Company &copy; 2014-2018
        </div>
    </div>

    </div>
    </div>

     <!-- Mainly scripts -->
     <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Peity -->
    <script src="js/plugins/peity/jquery.peity.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

    <!-- iCheck -->
    <script src="js/plugins/iCheck/icheck.min.js"></script>

    <!-- Peity -->
    <script src="js/demo/peity-demo.js"></script>

    <script>
        $(document).ready(function(){
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });

        /* Menu show command */
        $('#show_menu').click(function() {
            // console.log($(this)[0].ariaExpanded);
        });
    </script>

    <!-- Product here :FIXME:-->

   <!--  <script src="http://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> -->
    <script>
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            console.log("Your Browser support SpeechRecognition");

            var recognition = new webkitSpeechRecognition();
            recognition.lang = "it-IT";
            var btnAss = document.getElementById('assi-btn');
            recognition.onresult = function (event) {
                var saidText = "";
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        saidText = event.results[i][0].transcript;
                    } else {
                        saidText += event.results[i][0].transcript;
                    }
                }
                // Update Textbox value
                document.getElementById('speechText').value = saidText;

                // Search Posts
                searchPosts(saidText);
            }

            function startRecording() {
                recognition.start();
                console.log('Start Search listening');
            }
            
            /* Diable button if assistent is start FIXME: */
            btnAss.addEventListener('click', () => {
                console.log('Triggered from Search area:..');
                recognition.abort();
            });

            // Search Posts
            function searchPosts(saidText) {

                $.ajax({
                    url: './vendor/getData.php',
                    type: 'post',
                    data: {
                        speechText: saidText
                    },
                    success: function (response) {
                        // $('.container').empty();
                        $('.container').append(response);
                        /* setTimeout(() => {
                            window.location.reload();
                        }, 12000); */
                    }
                });
            }


        } else {
            alert("Your Browser not support SpeechReocognition");
        }
    </script>

    <script src="./prodotti.js"></script>
</body>

</html>
