const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'it-IT';

/* Libreria per ChatBot */
/* Questions */
const _firsFrase = ["ciao" ,"buongiorno", "salve", "buonasera", "ciao come stai","buongiorno come stai", "buonasera come stai", "salve come stai"];
const _secondStep = ["come stai", "come va" ,"come la situazione"];
const _youreName = ["come ti chiami", "come si chiama" ,"come ti chiami", "come il tuo nome", "come si chiami", "come ti chiamano", "come ti chiami"];
const _action = ["torna indietro", "fai vedere prodotti", "fammi vedere prodotti","torna al menù precedente", "torna al menù precedente", "esci di qua"];

/* Answers */
const _aswFrase = ["ciao come sta?", "buongiorno come va?", "buonasera come sta?", "salve come stai?"];
const _aswStep = ["tutto bene, grazie", "va tutto bene grazie", "Buonasera tutto bene", "salve sto bennissimo"];
const _aswName = ["Mi chiamo Volantino", "Volantino", "Volantino"];

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
            for(let value of _aswFrase) { 
                p.innerText = value;
                texts.appendChild(p);
            }
        }
    }
for(let value of _youreName) { 
    if (text.toLowerCase().trim().includes(value)) {
      p = document.createElement("p");
      p.classList.add("replay");
        for(let value of _aswName) {         
            p.innerText = value;
            texts.appendChild(p);
        }    
    }
}

    for( let value of _action) { 
    if (text.includes(value)) {
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
