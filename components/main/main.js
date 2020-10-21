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

        const _categoryArea = [
            "vai su categoria", "apri categoria",
            "vai su categorie", "apri categorie",
            "vai categoria", "apri categorie",
            "vai in categoria", "apri categoria",
            "vai per categorie", "apri le categorie"

        ];

        const _funArea = [
            "dimmi una barzelletta", "fammi ridere",
            "racconta uno scherzo", "sono triste",
            "barzelletta del giorno"
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
         
    //Local counter     
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
                    artyom.say("Certo attenzione sarà aperta la pagina what\'s up", {
                        onEnd: () => {
                            window.open ("https://web.whatsapp.com/", "_blank");
                            buttonOff();
                        }
                    });
                    
                } else if( i === 1 || i === 7 || i === 9) {
                    artyom.say("Certo attenzione sarà aperta la pagina instagram", {
                        onEnd: () => {
                            window.open ("https://www.instagram.com/", "_blank");
                            buttonOff();
                        }
                    });
                } else if(i === 2 || i === 6 || i === 10) {
                    artyom.say("Certo attenzione sarà aperta la pagina gmail", {
                        onEnd: () => {
                            window.open ("https://www.gmail.com/", "_blank");
                            buttonOff();
                        }
                    });
                   
                } else if (i === 3 || i === 5 || i === 11){
                    artyom.say("Certo attenzione sarà aperta la pagina twitter", {
                        onEnd: () => {
                            window.open ("https://twitter.com/login/", "_blank");
                            buttonOff();
                        }
                    });
            
                }
 
           }
       },

       //Area joke
       {
           indexes: _jokeArea,
           action: (i) => {
               if(i === 0 || i === 1 || i === 2) {
                artyom.sayRandom([
                    "Sono impressionata, sei simpatico",
                    "Penso che non possiamo essere insieme",
                    "Sono una macchina non capisco sentimenti",
                    "Sono contenta che sei soddisfatto."
                ]);
                buttonOff();
                   
                //    artyom.obey();
               } else if(i === 3 || i === 4) {
                   artyom.say("Bello saperlo ma meglio se rimaniamo amici", {
                       onEnd: () => {
                            buttonOff();
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

       //Area categorie

       {
           indexes: _categoryArea,
           action: (i) => {
                   artyom.say("Certo! Andiamo", {
                    onStart: () => {
                        console.log('The text has been started');
                    },
                    onEnd : () => {
                        console.log('Text has been finished');
                        location.href = "../category/category.html";
                    }
                   });
               
               }
           
       },

       //Area offerte 

       {
            indexes: ["vai alla sezione di offerte"],
            action: () => {
                artyom.say("Ok. Ecco le offerte", {
                    onStart : () => {
                        console.log('Start command Offerte');
                    },
                    onEnd: () => {
                        location.href = "./components/offerte/offerte.html";
                        console.log('ridirection offerte')
                    }
                });
            }     
       },

       {
           indexes: ["chiudi *"],
           action: (e) => {
               artyom.say("Sarà immediatamente chiuso");
               showCard.style.display = "none";

           }
       },

       //Fun area
       {
           indexes: _funArea,
           action: (i) => {
            if(i === 0 || i === 1 || i === 2 ) { 
               artyom.sayRandom([
                    "Dottore, dottore! Ho solo 59 secondi di vita, mi aiuti! Certo! Un minuto e sono da lei!",
                    "Mamma lumaca prepara sua figlia per andare a scuola e le dice: Mi raccomando, fai la brava!",
                    "Un turista si ferma in una fattoria per acquistare alcune uova, e chiede al fattore: Scusi, ma sono di giornata? E il fattore: Certo, di notte le mie galline dormono!",
                    "Lo sai in quale stanza ci si sente più ottimisti ?Il bagno...perché ogni cosa che farai sarà un ... Su-cesso ! "
                    ]);
                } else if ( i === 3 || i === 4 ) {
                    artyom.sayRandom([
                        "Sai qual’è la differenza tra un ebreo e una palla. È che la palla può uscire dal campo, l’ebreo no.",
                        "Come si dice uno scontro tra due carrelli?..... scontrino!",
                        "Un carabiniere si arrampica su un albero, passa il suo maresciallo, che lo vede, si avvicina e gli chiede: e tu che ci fai sopra quell'albero? e quello risponde: ho chiesto al maresciallo forestale che tipo di alberi sono questi, e lui mi ha risposto: salici!",
                        "Una mucca dice ad un'altra mucca: hai sentito la malattia della così detta mucca pazza? e l'altra risponde: ma a me che me ne frega, sono un cavallo!" 
                    ]);
                }  
            }
        },

        {
            indexes: ["stop", "va bene va bene", "volantino stop"],
            action: (i) => {
                if(i === 0 || i === 1) {
                    artyom.dontObey();      
                } else if (i === 2) {
                    buttonOff();
                }
            }
        },
        //Speacial Command 
        {
            indexes: _specialCommand,
            action: (i) => {
                if( i === 0) {
                    artyom.say("Secondo Börje Ekholm! Ceo di Ericsson! la tecnologia digitale è con ogni probabilità il più potente elemento per intraprendere azioni che ci aiutano a frenare l’aumento delle temperature globali")
                } else if( i === 1 || i === 2) {
                    artyom.say("Il programmatore che mi ha create credevo che riesce creare qualcosa che stupisce il mondo !Il mio compito dimonstrarlo", {
                        onStart: () => {
                            console.log('The text has been started');
                        },
                        onEnd : () => {
                            console.log('Text has been finished');
                            buttonOff();
                        }
                    });
                    
                }
            }
        }
   
   
    
   ];

    //Here we put all comans
    artyom.addCommands(actionCommand);

   

    //Greetings area 
    artyom.on(_greetings).then(function(i) {
        switch(i) {
            case 0: 
                artyom.say("Buongiorno come stai?");
                break;
            case 1: 
                artyom.say("Buona sera come stai?");
                break;
            case 2: 
                artyom.say("Ciao come stai?");
                break;
            case 3: 
                artyom.say("Salve come stai?");
                break;
        }
    });


    //Repeat after me 
    artyom.on(['Ripeti dopo di me *'] , true).then(function(i, wildcard) {
        artyom.say("Ha detto che: " + wildcard);
    });

    //Lo sai chi e 
    artyom.on(['Lo sai chi e *', 'Cosa pensi di *'], true).then(function(i,wildcard) {
    if( i === 0) {
        if(wildcard === 'andrew' || wildcard === 'onofrio' || wildcard === 'rossano'){
            artyom.say('Certo che conosco chi e: ' + wildcard, {
                onEnd: () => {
                    buttonOff();
                }
            });            
        } else {
            artyom.say('Non lo so chi e :' + wildcard, {
                onEnd: () => {
                    buttonOff();
                }
            });
        }
    } else if( i === 1) {
        if(wildcard === 'andrew'){
            artyom.say('Non possono essere assunte come testimoni le persone aventi nella causa un interesse che potrebbe legittimare la loro partecipazione', {
                onEnd: () => {
                    buttonOff();
                }
            });
        } else if ( wildcard === 'rossano') {
            artyom.say( wildcard + ': Il nostro capo che inspirato Andrew e Onofrio', {
                onEnd: () => {
                    buttonOff();
                }
            });
        } else if (wildcard === 'onofrio') {
            artyom.say( wildcard + ': e un grande programmatore con esperienza, con lui ci riusciamo migliorare le mie abbilità', {
                onEnd: () => {
                    buttonOff();
                }
            });
        }
    }

    
    });



    //Promp test {NB this method disable all comadns befoure this will be executed }

    // artyom.newPrompt({
    //     question:"No ho prodotti selezionato voui guardare altri?",
    //     //We set the smart property to true to accept wildcards
    //     smart:true,
    //     options:["Si","trova * "],
    //     beforePrompt: () => {
    //         console.log("Before ask");
    //     },
    //     onStartPrompt:  () => {
    //         console.log("The prompt is being executed");
    //     },
    //     onEndPrompt: () => {
    //         console.log("The prompt has been executed succesfully");
    //     },
    //     onMatch: (i,wildcard) => {// i returns the index of the given options
    //         let action;
    
    //         let totalCentimeters = parseInt(wildcard);
    //         if(i === 1){
    //         action = () => {
    //             alert(wildcard + " ecco");
    //         }
    //     };
    
    //         // A function needs to be returned in onMatch event
    //         // in order to accomplish what you want to execute
    //         return action;                       
    //     }
    // });
           

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
            listen: true
            
        }).then(() => {
            if(_counter <= 2) {
                artyom.say("Benvenuto");
            }
           
         


            // Error recognition block
            if(artyom.when("TEXT_RECOGNIZED", function(){
                console.log('Text is recognized');
            })){

            
            }else ( artyom.when("NOT_COMMAND_MATCHED", function(){
                if(_errCounter % 2 == 0) {
                    console.log('Not recognize command');
                    artyom.say("Mi dispiace, non ho capito", {
                        onStart: () => {
                           console.log('No command matched');
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
            }));

            
            //Sicmundus
            artyom.simulateInstruction("apri categorie");
                       
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
                    }).catch((err) => {
                        console.error("Something is wrong in Stop function", err);
                    })
                    if(_counter <= 3){
                        // artyom.say("");
                    }
              
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
               
        }



       //Test if work in Android/IOS device    
       if(!artyom.Device.isMobile){
               console.log("Artyom can talk and obey commands in this browser, however the voice will be the default voice of the device. Cannot force language here.");
           }else{
               
           }
       }else{
           alert("Artyom only works with The Google Chrome Browser !");
       }
   };