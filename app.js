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

const artyom = new Artyom();

let windowActive = false;

 window.onload = function(){
     if(artyom.Device.isChrome){
         let counter = 0;
         
 // Stampa le frase in video 
 artyom.redirectRecognizedTextOutput(function(text, isFinal) {
     if(isFinal) {
       span.innerHTML = "";
     } else {
       span.innerHTML = text;
     }
 });
         
 //Get all command;
   const actionCommand = [
       {
           indexes: ["condividi whatsapp", "condividi instagram", "condividi google", "condividi twitter"],
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

       {
           indexes: ["ti voglio bene", "ti amo", ],
           action: (i) => {
               if(i === 0) {
                   artyom.say("Sono impressionata, sei simpatico");
               } else if(i === 1) {
                   artyom.say("Bello saperlo ma meglio se rimaniamo amici");
               }
              
               
           }

       },

       {
           indexes: ["trova promozioni dell messe", "trova ricetto del giorno", "trova telecomander"],
           action: (i) => {
               if(i === 0){
                   artyom.say("Prego le promozioni del messe sono :");
                   setTimeout(() => {
                       showCard.style.display = "block";
                   },2500)
               } 
           }
       },

       {
           indexes: ["chiudi tutto"],
           action: (e) => {
               artyom.say("Sarà immediatamente chiuso");
               showCard.style.display = "none";

           }
       }
   
   
   
   ]
           artyom.addCommands(actionCommand);

           

               //Here start Recognition :        
               btn.addEventListener("click", (e) => {
                   counter++;
                   console.log(counter);     
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
                               if(counter <= 6) {
                                   // artyom.say("Buongiorno a tutti");
                                   artyom.sayRandom([
                                    "Ciao come sta?",
                                    "Benvenuto",
                                    "Salve, mi chiamo Volantino"
                                   ]);
                               }
                            //    artyom.simulateInstruction("ti voglio bene");
                              

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
                               if(counter < 3){
                                   artyom.say("Arrividerci");
                               }
                           }).catch((err) => {
                               console.error("Something is wrong in Stop function", err);
                           })

                       }
                   }
               });
           
           
       //Test if work in Android/IOS device    
       if(!artyom.Device.isMobile){
               console.log("Artyom can talk and obey commands in this browser, however the voice will be the default voice of the device. Cannot force language here.");
           }else{
               
           }
       }else{
           alert("Artyom only works with The Google Chrome Browser !");
       }
   };