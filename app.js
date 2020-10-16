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
           indexes: ["condividi su whatsapp", "condividi su instagram", "condividi su google", "condividi su twitter"],
           action: (i) => {
               if(i === 0) {
                    artyom.say("Certo attenzione sarà reindirezionato su la pagina what\'s up");
                    setTimeout(() => {
                        window.open ("https://web.whatsapp.com/", "_blank");
                    }, 5000);
                } else if( i === 1) {
                    artyom.say("Certo attenzione sarà reindirezionato su la pagina instagram");
                    setTimeout(() => {
                        window.open ("https://www.instagram.com/", "_blank");
                    }, 5000);
                } else if(i === 2) {
                    artyom.say("Certo attenzione sarà reindirezionato su la pagina gmail");
                    setTimeout(() => {
                        window.open ("https://www.gmail.com/", "_blank");
                    }, 5000);
                } else if (i === 3){
                    artyom.say("Certo attenzione sarà reindirezionato su la pagina twitter");
                    setTimeout(() => {
                        window.open ("https://twitter.com/login/", "_blank");
                    }, 5000);
                }else {
                    artyom.say("No ho capito la domanda per favore puoi ripetere");
                } 
 
           }
       },

       //Area social
       {
           indexes: ["ti voglio bene", "ti amo",],
           action: (i) => {
               if(i === 0) {
                artyom.sayRandom([
                    "Sono impressionata, sei simpatico",
                    "Penso che non possiamo essere insieme",
                    "Sono una macchina non capisco sentimenti",
                    "Sono contenta che sei soddisfatto."
                ]);
                   
                   artyom.obey();
               } else if(i === 1) {
                   artyom.say("Bello saperlo ma meglio se rimaniamo amici");
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
           indexes:["apri categorie", "vai su categorie"],
           action: (i) => {
               if(i === 0 || i === 1) {
                   artyom.say("Certo! Andiamo");
                   setTimeout(() => {
                        location.href = "./components/category.html";
                   },4000);
               }
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
           indexes: ["dimmi una barzeletta", "fammi ridere"],
           action: (i) => {
            if(i === 0 ) { 
               artyom.sayRandom([
                    "Dottore, dottore! Ho solo 59 secondi di vita, mi aiuti! Certo! Un minuto e sono da lei!",
                    "Mamma lumaca prepara sua figlia per andare a scuola e le dice: Mi raccomando, fai la brava!",
                    "Un turista si ferma in una fattoria per acquistare alcune uova, e chiede al fattore: Scusi, ma sono di giornata? E il fattore: Certo, di notte le mie galline dormono!",
                    "Lo sai in quale stanza ci si sente più ottimisti ?Il bagno...perché ogni cosa che farai sarà un ... Su-cesso ! "
                    ]);
                } else if ( i === 1) {
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
            indexes: ["Lo sai chi e*", "come la vedi *" , "* e bravo"],
            smart: true,
            action: function(i, wildcard) {
                var database = ["Andrew"];
                if(i === 1) {
                    if(database.indexOf(wildcard.trim().toLowerCase())) {
                        artyom.say("Chi è?");
                    }else {
                        artyom.say("Non lo so chi e " + wildcard + "e non so dire se bravo o no");
                    }
                }else {
                    if(database.indexOf(wildcard.toLowerCase.trim())){
                        artyom.say("Certo che conosco chi è " + wildcard + "veramente bravo");
                    }else {
                        artyom.say("La mia memoria non e infinita quindi no lo so chi è " + wildcard);
                    }
                }
            }
        },

        {
            indexes: ["stop", "va bene va bene", "volantino stop"],
            action: (i) => {
                if(i === 0 || i === 1) {
                    artyom.shutUp();      
                } else if (i === 2) {
                    artyom.shutUp();
                    artyom.fatality();
                    btn.classList.contains('wave-btn_reload') && wave.classList.contains('wave-btn_waves_reload');
                        btn.classList.remove('wave-btn_reload');
                        btn.classList.add('wave-btn');
                        wave.classList.remove('wave-btn_waves_reload');
                        wave.classList.add('wave-btn_waves');
                        textButton.innerHTML = 'Start';
                }
            }
        },
        //Speacial Command 
        {
            indexes:["volantino la tua idea","volantino perchè sei nato"],
            action: (i) => {
                if( i === 0) {
                    artyom.say("Secondo Börje Ekholm! Ceo di Ericsson! la tecnologia digitale è con ogni probabilità il più potente elemento per intraprendere azioni che ci aiutano a frenare l’aumento delle temperature globali")
                } else if( i === 1) {
                    artyom.say("Il programmatore che mi ha create credevo che riesce creare qualcosa che stupisce il mondo !Il mio compito dimonstrarlo");
                }
            }
        }
   
   
    
   ];

    //Here we put all comans
    artyom.addCommands(actionCommand);

           

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
                artyom.say("Benvenuto");
            }
            // artyom.when("SPEECH_SYNTHESIS_END", function(){
            //     artyom.simulateInstruction("dimmi una barzeletta");

            // })
            artyom.simulateInstruction("volantino perchè sei nato");
            // setTimeout(() => {
                
            //     artyom.simulateInstruction("volantino stop");
            // },4000);
            
            

            console.log(artyom.getAvailableCommands());

        }).catch((err) => {
            console.error("Something is wrong in startRecogntiton", err);
        })
                
        
        //Here Stop recgontiton
        }else {
            if(btn.classList.contains('wave-btn_reload') && wave.classList.contains('wave-btn_waves_reload')){
                btn.classList.remove('wave-btn_reload');
                btn.classList.add('wave-btn');
                wave.classList.remove('wave-btn_waves_reload');
                wave.classList.add('wave-btn_waves');
                textButton.innerHTML = 'Start';

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


       //Test if work in Android/IOS device    
       if(!artyom.Device.isMobile){
               console.log("Artyom can talk and obey commands in this browser, however the voice will be the default voice of the device. Cannot force language here.");
           }else{
               
           }
       }else{
           alert("Artyom only works with The Google Chrome Browser !");
       }
   };