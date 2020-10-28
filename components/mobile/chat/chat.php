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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
    <link rel="stylesheet" href="./chat.css">
    <title>Chat</title>
</head>
<body>
    <section>
        <h1 id="up">Volantino<br>ChatBot</h1>
        <p>Available In Chrome😎 Only</p>
        <button class="exit_button"><a href="../mobile.php">Exit</a></button>
        <div class="container">
          <div id="down" class="texts">
          </div>
        </div>
      </section>

      <div id="footer"></div>
      <!-- <script src="./chat.js"></script> -->
<script>
const texts = document.querySelector(".texts");

  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'it-IT';

// const now = new Date();
// const realTime = now.getHours();


/* Fetch or Get Session_date */
var UserName = "<?php echo $_SESSION['name']?>";
    console.log(UserName);
var _time = new Date();
var realTime = _time.getHours();
var url = "http://api.weatherapi.com/v1/forecast.json?key=2d8cac140df5425ca4c152308202710&q=Naples&days=7&lang=it";
var API_KEY = "a45a00daef1570bfcc72d4fd86991465";
var API_ID = "550d9713";

/* Test TODO: */
 

/* Libreria per ChatBot */
/* Questions */
const _firsFrase = ["ciao" ,"buongiorno", "salve", "ciao come stai","buongiorno come stai", "salve come stai"];
const _nigthFrase = ["buonasera","buonasera come stai"];
const _secondStep = ["come stai", "come va" ,"come la situazione"];
const _youreName = ["come ti chiami", "come si chiama" ,"come il tuo nome", "come si chiami", "come ti chiamano"];
const _action = ["torna indietro", "fai vedere prodotti", "fammi vedere prodotti","torna al menù precedente", "torna al menù precedente", "esci di qua"];
const _whatTime = ["che ora sono", "dimmi che ora", "lo sai che ora sono", "che ora", "che ore sono"];
const _whatIsWeather = ["che tempo oggi", "come tempo oggi", "che tempo fa oggi", "previsioni per oggi"];
const _tommoroWeather = ["previsioni per domani", "che tempo fa domani"];
const _giveRecept = ["ricetta con pollo", "ricetta casuale", "ricette", "ricetta del giorno"];

/* Answers */
const _aswMorinig = [`Ciao ${UserName} come stai?`, `Buongiorno ${UserName} come va?`,`Salve ${UserName} come stai?`];
const _aswNigth = [`Ciao ${UserName} come stai?`,`Buonasera ${UserName} come stai?`];
const _aswStep = ["Tutto bene, grazie", "Va tutto bene grazie", "Buonasera tutto bene", "Salve sto bennissimo"];
const _aswName = ["Mi chiamo Volantino", "Volantino"];
const _timeIs = [`Ecco => ${_time.getHours()}:${_time.getMinutes()}`, `Certo sono le ${_time.getHours()}:${_time.getMinutes()}`];
const _sleepTime = [`E ancora presto sono le ${_time.getHours()} : ${_time.getMinutes()}`];



const up = document.getElementById('up');
const down = document.getElementById('footer');
let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  


  if (e.results[0].isFinal) {
    
    /* Saluto */
    for(let value of _firsFrase) {
        if (text.toLowerCase().trim().includes(value)) {
        p = document.createElement("p");
        p.classList.add("replay");
        scrollDown(down);
        if(realTime < 18) {
          const finalText = _aswMorinig[Math.floor(Math.random() * _aswMorinig.length)];
                p.innerText = finalText;
                texts.appendChild(p);
        } 
            
        }
    }

    /* Time Controll */
      for(let value of _nigthFrase){
      if(text.toLowerCase().trim().includes(value)) {
        if(realTime > 17) {
        p = document.createElement("p");
        p.classList.add("replay");
        scrollDown(down);
              for(let frase of _aswNigth) {
                p.innerText = frase;
                texts.appendChild(p);
              }
      } else {
    p = document.createElement("p");
        p.classList.add("replay");
        scrollDown(down);
                p.innerText =_sleepTime ;
                texts.appendChild(p);
  }
    }
  } 


for(let value of _youreName) { 
    if (text.toLowerCase().trim().includes(value)) {
      p = document.createElement("p");
      p.classList.add("replay");
      scrollDown(down);
        const finalText =  _aswName[Math.floor(Math.random() * _aswName.length)];
              p.innerText = finalText;
              texts.appendChild(p);    
            
    }
}

for(let value of _whatTime) {
  if(text.toLowerCase().trim().includes(value)) {
    p = document.createElement("p");
      p.classList.add("replay");
      scrollDown(down);
        const finalText =  _timeIs[Math.floor(Math.random() * _timeIs.length)];
              p.innerText = finalText;
              texts.appendChild(p);  
  }
}

for(let value of _whatIsWeather) {

if(text.toLowerCase().trim().includes(value)){

  let getDate =  async () => {
  let data = await fetch(url);
  let res = await data.json();
    console.log(res);

      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = `Al ${res.location.localtime} temeperatura e: ${res.current.temp_c} C° umidita ${res.current.humidity} % e condizioni : ${res.current.condition.text} `;
      texts.appendChild(p);
      p = document.createElement("p");
   return;
  
  }
    getDate();
  }
  scrollDown(down);
}

for(let value of _tommoroWeather) {

if(text.toLowerCase().trim().includes(value)){

  let getDate =  async () => {
  let data = await fetch(url);
  let res = await data.json();
    console.log(res);

      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = `Domani ${res.forecast.forecastday[1].date} la mattina temeperatura e : ${res.forecast.forecastday[1].day.mintemp_c} C° temperatura massima : ${res.forecast.forecastday[1].day.maxtemp_c} C° umidita : ${res.forecast.forecastday[1].day.avghumidity} % condizioni : ${res.forecast.forecastday[1].day.condition.text}`;
      texts.appendChild(p);
      p = document.createElement("p");
   return;
  
  }
  getDate();
  }
  scrollDown(down);
}   


  for(let value of  _giveRecept){
      if(text.toLowerCase().trim().includes(value)) {
        const foodFetch = async () => {
            const _foodRandom = ["chicken", "fish","banana","dessert","asparagus","broccoli","corn","pepper","rice","spaghetti"];
            const _mixFod = _foodRandom[Math.floor(Math.random() * _foodRandom.length)];
            const data = await fetch(`https://api.edamam.com/search?q=${_mixFod}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free&lang=it`);
            const resp = await data.json();
            console.log(resp);
          console.log("ricetta del giorno");
          p = document.createElement("p");
          p.classList.add("replay");
            p.innerText = `${resp.hits[0].recipe.label} ingredienti: ${resp.hits[0].recipe.ingredientLines[0]}, ${resp.hits[0].recipe.ingredientLines[1]},${resp.hits[0].recipe.ingredientLines[2]}, ${resp.hits[0].recipe.ingredientLines[3]}, ${resp.hits[0].recipe.ingredientLines[4]}, ${resp.hits[0].recipe.ingredientLines[5]}, ${resp.hits[0].recipe.ingredientLines[6]}`;
          
          texts.appendChild(p);
          p = document.createElement("p");

          return;
        }
        foodFetch();
      
        }
        scrollDown(down);
  }


    for( let value of _action) { 
    if (text.toLowerCase().trim().includes(value)) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Si, certo";
        texts.appendChild(p);
        console.log("Torno indietro");
      setTimeout(() => {
        location.href = "../mobile.php";
      },2000);
    }
}


function scrollDown() {
    // window.scrollTo(0, 5000);
    down.scrollIntoView({
      block: "end",
      inline: "end",
      behavior: "smooth"
    });
  }

  function scrollTop() {
    up.scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth"
    });
  }

    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

      </script>
</body>
</html>