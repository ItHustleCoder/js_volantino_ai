window.addEventListener("DOMContentLoaded", () => {

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition) {
console.log("Your browser or mobile device supported");
//Get all elements
var btn = document.getElementById('btn_assi');
var up = document.getElementById('page_up');
var down = document.getElementById('page_down');
var shop = document.getElementById('shop_cat');
var team = document.getElementById('team_cat');
var profile = document.getElementById('prof_cat');
var stat = document.getElementById('stat_cat');
var prod1 = document.getElementById('prod1');
    prod2 = document.getElementById('prod2');
    prod3 = document.getElementById('prod3');
    prod4 = document.getElementById('prod4');
/* TODO: */
var showTranscript = document.getElementById('transcript');

/* Start Recognition */
var recognition = new SpeechRecognition();

recognition.lang = "it-IT";
recognition.interimResults = true;

var Content = '';
/* Dictionary commands */
var _scrollTop = ["vai su" ,"vai all'inizio", "sali sopra","su","volantino su"];
var _scrollDown = ["vai giù", "va giù", "volantino giù", "volantino vai giù", "giù", "scendi", "scendi giù"];
var _shopCat = ["prodotti","vai su prodotti", "vai nella sezione prodotti", "volantino prodotti","vai prodotto","trova prodotto", "trova prodotti","volantino prodotto"];
var _teamCat = ["squadra", "vai squadra", "vai sulla sezione squadar", "squadra", "la nostra squarda","squadra volantino", "volantino team"];
var _profCat = ["profilo", "vai su profillo", "vai su profilo","profillo"];
var _statCat = ["statistica", "volantino statistica", "la statistica", "statistica volantino","statistica di volantino"];
var _selectFirsItems = ["seleziona prodotto numero uno", "seleziona il prodotto numero 1","seleziona prodotto uno", "seleziona primo prodotto", "seleziona il primo prodotto", "seleziona nike air zero", "seleziona prodotto due"];
var _selectSecondItems = ["seleziona il prodotto numero due", "seleziona il prodotto numero 2","seleziona prodotto due", "seleziona il secondo prodotto", "seleziona seconda prodotto", "seleziona nike xan", "seleziona prodotto due"];
var _selectThirdItems = ["seleziona il prodotto numero tre", "seleziona il prodotto numero 3","seleziona prodotto tre", "seleziona il terzo prodotto", "seleziona terza prodotto", "seleziona nike green fast"];
var _selectFourItems = ["seleziona il prodotto numero quatro", "seleziona il prodotto numero 4","seleziona il prodotto quatro", "seleziona il quarto prodotto", "seleziona quarto prodotto", "seleziona nike yellow by", "seleziona prodotto quatro", "seleziona prodotto 4", "selezione prodotto 4"];
var _unselectFirstItems = ["cancella il primo prodotto", "cancella il prodotto numero uno", "cancella prima podotto", "cancella il primo podotto", "cancella nike air zero", "cancella il prodotto numero 1","cancella primo prodotto"];
var _unselectSecondItems = ["cancella il secondo prodotto", "cancella il prodotto numero due", "cancella secondo podotto", "cancella il secondo podotto", "cancella nike xan",
"cancella il prodotto numero 2" ];
var _unselectThirdItems = ["cancella il terzo prodotto", "cancella il prodotto numero tre", "cancella terzo podotto", "cancella il terzo podotto","cancella nike green fast", "cancella il prodotto numero 3" ];
var _unselectFourItems = ["cancella il qarto prodotto", "cancella il prodotto numero quatro", "cancella quarto podotto", "cancella il quarto podotto", "cancella il prodotto numero 4","cancella nike yellow by"];

var _chatBot = ["apri chat", "vai alla sezione chat", "apri chat", "apri bot"];

var _listaCommande = ["apri lista dei commandi", "volantino fammi vedere le comande", "volantino info"];

let p = document.createElement('p');


recognition.onresult = function (event) {
    console.log(event.result);
    // TODO: Previos version

    // var transcript = "";
    // for (var i = event.resultIndex; i < event.results.length; i++) {
    //   if (event.results[i].isFinal) {
    //     transcript = event.results[i][0].transcript;
    //   } else {
    //     transcript += event.results[i][0].transcript;
    //   }
    //   redOutLoad(transcript);
    //   console.log(transcript);
       
    // }

    const transcript = Array.from(event.results)
    .map(result =>  result[0])
    .map(result => result.transcript)
    .join('');
    
    p.innerHTML = transcript;
    showTranscript.appendChild(p);


    console.log(transcript);
    redOutLoad(transcript);

    function redOutLoad(message) {
      var speech = new SpeechSynthesisUtterance();
      var greetings = [
        "Sono una macchina quindi sto bene",
        "Sto bene",
        "ok bene",
        "cosi cosi",
      ];
      var activWords = ['Benvenuto Rossano'];
      var comandList = ['Al momento so fare : scendere giu. salire su. chiudere poppup. trovare le ricette. aprire le finestre con nome volantino. conquistare il mondo. e un scherzo. per il momento non so fare.'];




      speech.lang = "it";
      speech.volume = 0.8;
      speech.pitch = 0.9;
      speech.rate = 0.9;
      if (message.includes("volantino Come stai")) {
        var count = Math.floor(Math.random() * greetings.length);
        console.log(count);
        var finalText = greetings[count];
        speech.text = finalText;
        console.log(finalText);
      } else if (message.includes("volantino start")) {
        speech.text = activWords;
      }

      window.speechSynthesis.speak(speech);

      if (transcript.toLowerCase().trim().includes("volantino cosa sai fare")) {
        speech.text = comandList;
        window.speechSynthesis.speak(speech);

      }
      

    for(let value of _shopCat) {
      if (transcript.toLowerCase().trim().includes(value)) {
        scrollContent(shop);
        console.log('Scroll into shop');
      }
    }

      for (let value of _teamCat) {
        if (transcript.toLowerCase().trim().includes(value)) {
            scrollContent(team);
            console.log('Scroll into team');
        }
      }

    for(let value of _statCat) {
      if (transcript.toLowerCase().trim().includes(value)) {
            scrollContent(stat);
        }
    }

    for(let value of _profCat) {
      if (transcript.toLowerCase().trim().includes(value)) {
            scrollContent(profile);
            console.log('Scroll profillo');
        }
    }


      for(let value of _scrollTop) {
      if (transcript.toLowerCase().trim().includes(value)) {
        scrollTop();
        console.log("Page Up");
      }

    }

    for(let value of _scrollDown) {
      if (transcript.toLowerCase().trim().includes(value)) {
        scrollDown();
        console.log("Page Down");
      }

    }

    for(let value of _listaCommande) {
      if (transcript.toLowerCase().trim().includes(value)) {
        scrollTop();
        console.log('apro info');
        audioEnd("./command.html");
      }
    }

    /* Checkbox */
    for(let value of _selectFirsItems) { 
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod1').checked = true;
           scrollContent(prod1);
            recognition.addEventListener('end', () => {
                
                prod1.checked = true;
            },1000);
        }
    }

    for(let value of _selectSecondItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
            document.querySelector('#prod2');
            scrollContent(prod2);
            recognition.addEventListener('end', () => {
                prod2.checked = true;
            },1000);
        }
    }


    for(let value of _selectThirdItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
            document.querySelector('#prod3');
              scrollContent(prod3);
              recognition.addEventListener('end', () => {
                  prod3.checked = true;
              },1000);
        }
    }

    for(let value of _selectFourItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod4');
            scrollContent(prod4);
            recognition.addEventListener('end', () => {
                prod4.checked = true;
            },1000);
        }
    }

    for(let value of _unselectFirstItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod1');
            scrollContent(prod1);
            recognition.addEventListener('end', () => {
                prod1.checked = false;
            },1000);
        }
    }

    
    for(let value of _unselectSecondItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod2');  
            scrollContent(prod2);
            recognition.addEventListener('end', () => {
                prod2.checked = false;
            },1000);
        }
    }

    
    for(let value of _unselectThirdItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod3');
            scrollContent(prod3);
            recognition.addEventListener('end', () => {
                prod3.checked = false;
            },1000);
        }
    }

    
    for(let value of _unselectFourItems) {
        if(transcript.toLowerCase().trim().includes(value)) {
          document.querySelector('#prod4');  
            scrollContent(prod4);
            recognition.addEventListener('end', () => {
                prod4.checked = false;
            },1000);
        }
    }

    for(let value of _chatBot) {
      if(transcript.toLowerCase().trim().includes(value)) {
        scrollTop();
        setTimeout(() => {
          console.log("Apro chat");
          location.href ="./chat/chat.php";
        },2000);
      }
    }



  



      function hideModalWindow(e, b) {
        for (let value of modalHide) {
          if (transcript.toLowerCase().trim().includes(value)) {
            e.style.display = "none";
            b.blur();
            console.log("return");
          }
        }
      }
    }

  };

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

  function scrollContent(name) {
    name.scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }

  //Function Manualy Click button



/* Cath error */
  recognition.addEventListener('nomatch', () => {
    console.log('No ho capito');
  });

  /* Diable Button after end recognition */
  recognition.addEventListener('end', () => {
        buttonOff();
        setTimeout(() => {
          showTranscript.innerHTML = '';
        },2000)
  });

  btn.addEventListener("click", () => {
      console.log('click');
    if (btn.classList.contains("assi_btn")) {
      btn.classList.remove("assi_btn");
      btn.classList.add("btn-reload");
    //   recognition.addEventListener("end", recognition.start);
      recognition.start();
      


    } else {
      if (btn.classList.contains("btn-reload")) {
        buttonOff();
        recognition.addEventListener("end", recognition.stop);
        recognition.abort();
        recognition.stop();
        // location.reload();
      }
    }
  });

  function buttonOff() {
    btn.classList.remove("btn-reload");
    btn.classList.add("assi_btn");
  }


  function audioEnd(link) {
    recognition.addEventListener('end', () => {
      console.log('Finito questo');
      setTimeout(() => {
        location.href = link;
      },2000);
    });
  }

} else {
    alert("Something is wrong Speech not supported, pls try change browser");
}


});