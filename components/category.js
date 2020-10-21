       //Get all DOM elements
       const btn = document.getElementById('btn');
       const wave = document.getElementById('wave-btn_waves');
       const textButton = document.getElementById('textB');
       const modal = document.getElementById('myModal')
       const span = document.getElementById('output');
       const commandAction = document.getElementById('command-left');
       const commandInfo = document.getElementById('command-rigth');
       const showCard = document.getElementById('show-card');
       const audio = document.getElementById('audioMusic');
      
 
       //DIZIONARIO 
       const _greetings = ["Buongiorno", "Buona sera", "Ciao" , "Salve"];
       const _specialCommand = ["volantino la tua idea","volantino perchè sei nato", "idea di volantino"];
       const _shareArea = [
           "condividi whatsapp", "condividi su instagram",
            "condividi su google", "condividi su twitter",
            "condividi whatsapp", "condividi twitter",
            "condividi google", "condividi instagram",
            "apri whatsapp", "apri instagram","apri google",
            "apri twitter" 
        ];
        
        const _jokeArea = [
            "ti amo", "ti voglio bene",
            "sei simpatica", "sei carina",
            "sei bella"
        ];

        const _menuArea = [
            "vai su menù principale", "vai al menù principale",
            "menù principale", "torna al menù",
            "ritrona al menù", "ritorna al menù principale",
            "torna indietro", "ritorna indietro",
            

        ];

        const _funArea = [
            "dimmi una barzelletta", "fammi ridere",
            "racconta uno scherzo", "sono triste",
            "barzelletta del giorno"
        ];

        const _selectProduct = [
            "seleziona prodotto numero uno", "seleziona prima prodotto",
            "seleziona prodotto numero due" , "seleziona secondo prodotto",
            "seleziona prodotto numero tre", "seleziona terzo prodotto",
            "seleziona prodotto numero quatro", "seleziona quarto prodotto",
            "seleziona prodotto numero chinque", "seleziona quinto prodotto"

        ];

        const _unSelect = [
            "cancella prodotto numero uno", "cancella il primo prodotto",
            "cancella prodotto numero due", "cancella il secondo prodotto",
            "cancella prodotto numero tre", "cancella il terzo prodotto",
            "cancella prodotto numero quatro", "cancella il quarto prodotto",
            "cancella prodotto numero chinque", "cancella quinto prodotto"

        ];

//Bind Audio button
 function bell() {
     audio.play();
 }

 //Call class item and bind name
const artyom = new Artyom();

let windowActive = false;

 window.onload = function(){
     if(artyom.Device.isChrome){
         
    //Local var controll execute command    
    let _counter = 0;
    let _errCounter = 0;
         
 // Display spoke transcriptions
 artyom.redirectRecognizedTextOutput(function(text, isFinal) {
     if(isFinal) {
       span.innerHTML = "";
     } else {
       span.innerHTML = text;
     }
 });
         
 //Get all command;
   const actionCommand = [
       
        //Share area
        {
           indexes: _shareArea,
           action: (i) => {
               if(i === 0 || i === 4 || i === 8) {
                    artyom.say("Certo attenzione sarà apro la pagina what\'s up", {
                        onEnd: () => {
                            window.open ("https://web.whatsapp.com/", "_blank");
                        }
                    });
                   
                } else if( i === 1 || i === 7 || i === 9) {
                    artyom.say("Certo attenzione sarà apro  la pagina instagram", {
                        onEnd: () => {
                            window.open ("https://www.instagram.com/", "_blank");
                        }
                    });
                    
                } else if(i === 2 || i === 6 || i === 10) {
                    artyom.say("Certo attenzione sarà apro  la pagina gmail", {
                        onEnd: () => {
                            window.open ("https://www.gmail.com/", "_blank");
                        }
                    });
                    
                } else if (i === 3 || i === 5 || i === 11){
                    artyom.say("Certo attenzione sarà apro  la pagina twitter", {
                        onEnd: () => {
                            window.open ("https://twitter.com/login/", "_blank");
                        }
                    });
                }
 
           }
       },

       //Area Search
       {
           indexes: ["trova promozioni dell messe", "trova ricetto del giorno", "trova telecomander"],
           action: (i) => {
                artyom.say("Mi dispiace per il momento questa categoria non abilitata, vi prego attendere :");
                   
           }
       },

       {
           indexes: ["chiudi tutto"],
           action: (e) => {
               artyom.say("Sarà immediatamente chiuso");
               showCard.style.display = "none";

           }
       },

       //Fun area
       {
           indexes: _funArea,
           action: (i) => {
           
               artyom.sayRandom([
                    "Dottore, dottore! Ho solo 59 secondi di vita, mi aiuti! Certo! Un minuto e sono da lei!",
                    "Mamma lumaca prepara sua figlia per andare a scuola e le dice: Mi raccomando, fai la brava!",
                    "Un turista si ferma in una fattoria per acquistare alcune uova, e chiede al fattore: Scusi, ma sono di giornata? E il fattore: Certo, di notte le mie galline dormono!",
                    "Lo sai in quale stanza ci si sente più ottimisti ?Il bagno...perché ogni cosa che farai sarà un ... Su-cesso ! ",
                    "Sai qual’è la differenza tra un ebreo e una palla. È che la palla può uscire dal campo, l’ebreo no.",
                    "Come si dice uno scontro tra due carrelli?..... scontrino!",
                    "Un carabiniere si arrampica su un albero, passa il suo maresciallo, che lo vede, si avvicina e gli chiede: e tu che ci fai sopra quell'albero? e quello risponde: ho chiesto al maresciallo forestale che tipo di alberi sono questi, e lui mi ha risposto: salici!",
                    "Una mucca dice ad un'altra mucca: hai sentito la malattia della così detta mucca pazza? e l'altra risponde: ma a me che me ne frega, sono un cavallo!" 
                    ]);
            }
        },

        {
            indexes: ["stop", "va bene va bene", "volanino stop"],
            action: (i) => {
                if(i === 0 || i === 1) {
                    artyom.shutUp();      
                } else if (i === 2) {
                    buttonOff();
                }
            }
        },

        //Ritornare al menu principale 
        {
            indexes: _menuArea,
            action: (i) => {
                
                artyom.say("Ok, ritorniamo al menù", {
                    onEnd: () => {
                        location.href = "../index.html";
                    }
                });
                
                }
            
        },

        //Select function 
        {
            indexes: _selectProduct, 
            action: (i) => {
                if(i === 0 || i === 1) {
                    artyom.say("Prodotto selezionato");
                    document.getElementById('first_item').checked = true;
                    
                } else if( i === 2 || i === 3) {
                    artyom.say("Prodotto selezionato");
                    document.getElementById('second_item').checked = true;
                } else if ( i === 4 || i === 5) {
                    artyom.say("Prodotto selezionato");
                    document.getElementById('third_item').checked = true;
                } else if ( i === 6 || i === 7) {
                    artyom.say("Prodotto selezionato");
                    document.getElementById('four_item').checked = true;
                } else if ( i === 8 || i === 9 ) {
                    artyom.say("Prodotto selezionato");
                    document.getElementById('five_item').checked = true;
                }
            }
        }, 
        
        {
            indexes: _unSelect,
            action: (i) => {
                if(i === 0 || i === 1) {
                    artyom.say("Prodotto cancellato");
                    document.getElementById('first_item').checked = false;                    
                } else if ( i === 2 || i === 3) {
                    artyom.say("Prodotto cancellato");
                    document.getElementById('second_item').checked = false;

                } else if (i === 4 || i === 5) {
                    artyom.say("Prodotto cancellato");
                    document.getElementById('third_item').checked = false;

                } else if (i === 6 || i === 7) {
                    artyom.say("Prodotto cancellato");
                    document.getElementById('four_item').checked = false;

                } else if (i === 8 || i === 9) {
                    artyom.say("Prodotto cancellato");
                    document.getElementById('five_item').checked = false;

                }
            }
        }
   
   
    
   ];

    //Here we put all comans
    artyom.addCommands(actionCommand);

     
    
    artyom.on(_jokeArea).then(function(i){
            switch(i) {
                case 0:
                    artyom.sayRandom([
                        "Sono impressionata, sei simpatico",
                        "Penso che non possiamo essere insieme",
                        "Sono una macchina non capisco sentimenti",
                        "Sono contenta che sei soddisfatto."
                    ]);
                    break;
                case 1:
                    artyom.sayRandom([
                        "Problema che non so che significa volere bene, ma apprezzo questo sentimento",
                        "Sento spesso questa cosa",
                        "Sono una macchina non capisco sentimenti",
                        "Certo perchè sono fantastica."
                    ]);
                    break;
                case 2: 
                    artyom.say("Grazie chi mi ha construito");
                    break;

            }
        });


    //Here start Recognition :        
    btn.addEventListener("click", (e) => {
        _counter++;
        console.log(_counter);     
        e.preventDefault();                   
        
        
        
        if(btn.classList.contains('wave-btn') && wave.classList.contains('wave-btn_waves')) {
            btn.classList.remove('wave-btn');
            btn.classList.add('wave-btn_reload');
            wave.classList.remove('wave-btn_waves');
            wave.classList.add('wave-btn_waves_reload');
            textButton.innerHTML = 'Stop';

            
// Start recgontiton        
        artyom.initialize({
            lang: "it-IT",
            continuos: true,
            debug: true,
            listen: true,
            
        }).then(() => {
            if(_counter <= 2) {
                // artyom.say("Benvenuto nella sezione categorie! qui puoi trovare i tutti prodotti! selezionare e anche comprare! resta con volantino per scoprire le novità");
            }

            //Error block 
              // Error recognition block
              artyom.when("NOT_COMMAND_MATCHED", function(){
                if(_errCounter % 2 == 0) {
                    artyom.say("Mi dispiace, non ho capito", {
                        onStart: () => {
                            buttonOff();
                            // artyom.fatality().then(() => {
                            //     console.log("Not recognized command");
                            // });
                        },
                        onEnd: () => {
                            // artyom.shutUp();
                        }
                    });
                    _errCounter ++;
                } else {
                    artyom.say("Non ho capito per favore ripeti", {
                        onStart: () => {
                            buttonOff();
                            artyom.fatality().then(() => {
                                console.log("Not recognized command");
                            });
                        },
                        onEnd: () => {
                            artyom.shutUp();
                        }
                    });
                    _errCounter++;
                }
            });

            
            
            
            
            
            //Sicmundus
            //  artyom.simulateInstruction("seleziona prodotto numero chinque");

            //  setTimeout(() => {
            //     artyom.simulateInstruction("cancella quinto prodotto");
            //  }, 4000);
            artyom.simulateInstruction("torna al menù");
        

            console.log(artyom.getAvailableCommands());

        }).catch((err) => {
            console.error("Something is wrong in startRecogntiton", err);
        })
                
        
        //Here Stop recgontiton
        }else {
            if(btn.classList.contains('wave-btn_reload') && wave.classList.contains('wave-btn_waves_reload')){
               buttonOff();
                artyom.fatality().then(() => {
                    artyom.shutUp();
                    if(_counter <= 3){
                        artyom.say("Ci vediamo");
                    }
                }).catch((err) => {
                    console.error("Something is wrong in Stop function", err);
                })

            }
        }
    });

        //Check if Artyom listen me 
        if(artyom.isRecognizing()) {
            console.log("Im actually listen to you..");
        }else {
            console.log("Im not listen to you");
        }       


         //DRY 
         function buttonOff() {
            btn.classList.remove('wave-btn_reload');
            btn.classList.add('wave-btn');
            wave.classList.remove('wave-btn_waves_reload');
            wave.classList.add('wave-btn_waves');
            textButton.innerHTML = 'Start';
           
    };


       //Test if work in Android/IOS device    
       if(!artyom.Device.isMobile){
               console.log("Artyom can talk and obey commands in this browser, however the voice will be the default voice of the device. Cannot force language here.");
           }else{
               
           }
       }else{
           alert("Artyom only works with The Google Chrome Browser !");
       }
   };