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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
    <link rel="stylesheet" href="./chat.css">
    <title>Chat</title>
</head>
<body>
    <section>
        <h1>Volantino<br>ChatBot</h1>
        <p>Available In Chrome😎 Only</p>
        <button class="exit_button"><a href="../mobile.php">Exit</a></button>
        <div class="container">
          <div class="texts">
          </div>
        </div>
      </section>
      <!-- <script src="./chat.js"></script> -->
<script>
const texts = document.querySelector(".texts");

  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'it-IT';

var UserName = "<?php echo $_SESSION['name']?>";
    console.log(UserName);
var _time = new Date(); 

/* Libreria per ChatBot */
/* Questions */
const _firsFrase = ["ciao" ,"buongiorno", "salve", "buonasera", "ciao come stai","buongiorno come stai", "buonasera come stai", "salve come stai"];
const _secondStep = ["come stai", "come va" ,"come la situazione"];
const _youreName = ["come ti chiami", "come si chiama" ,"come ti chiami", "come il tuo nome", "come si chiami", "come ti chiamano", "come ti chiami"];
const _action = ["torna indietro", "fai vedere prodotti", "fammi vedere prodotti","torna al menù precedente", "torna al menù precedente", "esci di qua"];
const _whatTime = ["che ora sono", "dimmi che ora", "lo sai che ora sono", "che ora"];

/* Answers */
const _aswFrase = [`Ciao ${UserName} come sta?`, `Buongiorno ${UserName} come va?`, `Buonasera ${UserName} come sta?`, `Salve ${UserName} come stai?`];
const _aswStep = ["Tutto bene, grazie", "Va tutto bene grazie", "Buonasera tutto bene", "Salve sto bennissimo"];
const _aswName = ["Mi chiamo Volantino", "Volantino"];
const _timeIs = [`Ecco : ${_time}`, `Certo sono : ${_time}`];

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  
  if (e.results[0].isFinal) {
    for(let value of _firsFrase) {
        if (text.toLowerCase().trim().includes(value)) {
        p = document.createElement("p");
        p.classList.add("replay");
            const finalText = _aswFrase[Math.floor(Math.random() * _aswFrase.length)];
                p.innerText = finalText;
                texts.appendChild(p);
            
        }
    }
for(let value of _youreName) { 
    if (text.toLowerCase().trim().includes(value)) {
      p = document.createElement("p");
      p.classList.add("replay");
        const finalText =  _aswName[Math.floor(Math.random() * _aswName.length)];
              p.innerText = finalText;
              texts.appendChild(p);    
            
    }
}

for(let value of _whatTime) {
  if(text.toLowerCase().trim().includes(value)) {
    p = document.createElement("p");
      p.classList.add("replay");
        const finalText =  _timeIs[Math.floor(Math.random() * _timeIs.length)];
              p.innerText = finalText;
              texts.appendChild(p);  
  }
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