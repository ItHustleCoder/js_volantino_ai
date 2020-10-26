<?php
$inactive = 3000;
ini_set('session.gc_maxlifetime', $inactive);

 session_start();
if (!($_SESSION['user_name'])) {
  header('Location: ../../vendro/logout.php');
}
/* Set timer logout */
if (isset($_SESSION['testing']) && (time() - $_SESSION['testing'] > $inactive)) {
  session_destroy();
  session_unset();
  header('Location : ../../vendor/logout.php');
  
}

$_SESSION['testing'] = time();
  


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./mobile.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Mobile version</title>
</head>
<body>
    <div id="page_up" class="container py-5">
        <!-- For Demo Purpose-->
        <header class="text-center mb-5">
            <h1 class="display-4 font-weight-bold">Lista</h1>
            <p class="font-italic text-muted mb-0">Benvenuto <b style="color: red"><?php echo $_SESSION['name'] ?></b></p>
            <p class="font-italic text-muted">Lista dei comandi <a href="./command.html" class="text-muted">
                <u>click per scoprire</u></a>
            </p>
            <button class="btn btn-danger"><a style="text-decoration : none; color : white" href="../../index.php">Exit</a></button>
        </header>
    
        
        <!-- First Row [Prosucts]-->
        <h2 class="font-weight-bold mb-2">Prodotti</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        
        <div id="shop_cat" class="row pb-5 mb-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <ul class="list-inline small">
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485077/shoes-3_rk25rt.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <ul class="list-inline small">
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-2_g4qame.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <ul class="list-inline small">
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg" alt="" class="img-fluid d-block mx-auto mb-3">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <ul class="list-inline small">
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

            <button id="btn_assi" class="assi_btn"><img src="./img/vpiu_logo_small.png" alt="Start"></button>

        <!-- Second Row [Team]-->
        <h2 class="font-weight-bold mb-2">Nostra Squadra</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        
        <div id="team_cat" class="row pb-5 mb-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg" alt="" class="w-100 card-img-top">
                        <div class="p-4">
                            <h5 class="mb-0">Mark Rockwell</h5>
                            <p class="small text-muted">CEO - Consultant</p>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-3_ybnq8v.jpg" alt="" class="w-100 card-img-top">
                        <div class="p-4">
                            <h5 class="mb-0">Mark Rockwell</h5>
                            <p class="small text-muted">CEO - Consultant</p>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799924/profile-4_s3fort.jpg" alt="" class="w-100 card-img-top">
                        <div class="p-4">
                            <h5 class="mb-0">Mark Rockwell</h5>
                            <p class="small text-muted">CEO - Consultant</p>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg" alt="" class="w-100 card-img-top">
                        <div class="p-4">
                            <h5 class="mb-0">Mark Rockwell</h5>
                            <p class="small text-muted">CEO - Consultant</p>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item m-0"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Third Row [Profiles]-->
        <h2 class="font-weight-bold mb-2">Active Profiles</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        
        <div id="prof_cat" class="row pb-5 mb-4">
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-0">
                        <div class="bg-primary px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">
                            <h5 class="text-white mb-0">Emma Nevoresky</h5>
                            <p class="small text-white mb-0">Elite user</p>
                        </div>
                        <div class="p-4 d-flex justify-content-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"><i class="fa fa-picture-o mr-1 text-primary"></i>Photos</small>
                                </li>
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"><i class="fa fa-user-circle-o mr-1 text-primary"></i>Followers</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-0">
                        <div class="bg-success px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">
                            <h5 class="text-white mb-0">Samuel Hardy</h5>
                            <p class="small text-white mb-0">Elite user</p>
                        </div>
                        <div class="p-4 d-flex justify-content-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"><i class="fa fa-picture-o mr-1 text-success"></i>Photos</small>
                                </li>
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"><i class="fa fa-user-circle-o mr-1 text-success"></i>Followers</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-0">
                        <div class="bg-info px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">
                            <h5 class="text-white mb-0">Tom Sunderland</h5>
                            <p class="small text-white mb-0">Elite user</p>
                        </div>
                        <div class="p-4 d-flex justify-content-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"><i class="fa fa-picture-o mr-1 text-info"></i>Photos</small>
                                </li>
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"><i class="fa fa-user-circle-o mr-1 text-info"></i>Followers</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-0">
                        <div class="bg-warning px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto">
                            <h5 class="text-white mb-0">John Tarly</h5>
                            <p class="small text-white mb-0">Elite user</p>
                        </div>
                        <div class="p-4 d-flex justify-content-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"><i class="fa fa-picture-o mr-1 text-warning"></i>Photos</small>
                                </li>
                                <li class="list-inline-item">
                                    <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"><i class="fa fa-user-circle-o mr-1 text-warning"></i>Followers</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        <!-- First Row [Statistics]-->
        <h2 class="font-weight-bold mb-2">Latest Statistics</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        
        <div id="stat_cat" class="row pb-5">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card-->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-5"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h5>Products Sales</h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="progress rounded-pill">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar rounded-pill"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card -->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-5"><i class="fa fa-tasks fa-2x mb-3 text-success"></i>
                        <h5>Completed Tasks</h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="progress rounded-pill">
                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" class="progress-bar bg-success rounded-pill"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <!-- Card -->
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-5"><i class="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
                        <h5>New Users</h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="progress rounded-pill">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-info rounded-pill"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Card -->
            <div id="page_down" class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-5"><i class="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                        <h5>New Products</h5>
                        <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="progress rounded-pill">
                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-warning rounded-pill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>

    <script src="./mobile.js"></script>

</body>
</html>