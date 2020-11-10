window.addEventListener("DOMContentLoaded", () => {
console.log("DOM loaded...");
// console.log(nameUsr)
window.onload = function() {
const jarvice = new Artyom();


    /* Start get element from DOM */
    let msg_supp = document.getElementById('msg_supp');
    let textTranscript = document.getElementById('text');
    const keysList = jarvice.getAvailableCommands();
    let list = document.getElementById('list');


    /* Grammar */
    const weekdays = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
    const months = ['Gennaio', 'Febraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Augusto', 'Settembre', 'Ottobre', 'Novembre', 'Decembre'];

    /* Counter/timer */
    let _counterClick = 0;
    let _caioPlay = 0;

    
    

    if(jarvice.speechSupported() == true) {
        Recmsg_on();      
    } else {
        msg_supp.innerHTML = "Speech not supported..";
    }


    console.log('Speech supported: ',jarvice.speechSupported());
    console.log('Recognition supported:', jarvice.recognizingSupported());
    
    const commands = [ 

        {
            indexes:["aiuto", "le commande","volantino aiuta"],
            action: (i) => {
                if(i == 0 || i == 1 || i == 2){ 
                    jarvice.say("Ecco la lista che mi hai chiesto", {
                        onStart: () => {
                            jarvice.dontObey();
                        },
                        onEnd: () => {
                           getCommandList();
                           jarvice.obey();
                           setTimeout(() => {
                                list.style.display = 'none';
                           },3000);
                        }
                       });       
                }    

                
            }
        },

        {
            indexes: ["che giorno è oggi", "info", "che ora sono", "che ore sono"],
            action : (i) => {
                if( i === 0 || i == 1 || i === 2 || i === 3 ) {
                    calculateNow();
                }
            }
        },
        
        {
            indexes: ["fai pannino","panino", "pannino"],
            action: (i) => {
                jarvice.say("Ok boss", {
                    onStart : () => {
                        jarvice.dontObey();
                    },
                    onEnd: () => {
                        jarvice.obey();
                        console.log("Sto in onEND");
                        jarvice.newPrompt({
                            question:"Come vuoi il panino?",
                            //We set the smart property to true to accept wildcards
                            smart:true,
                            options:["metti *","senza *", "fai con *", "solito"],
                            beforePrompt: () => {
                                jarvice.dontObey();
                                textTranscript.innerHTML = "Opzioni: metti {..cibo}/ senza {..}, ";
                                
                            },
                            onStartPrompt:  () => {
                                textTranscript.innerHTML = "Attendi...";
                                setTimeout(() => {
                                    jarvice.obey();
                                    textTranscript.innerHTML = "Risposta...";    
                                },1000)
                            },
                            onEndPrompt: () => {
                                console.log("The prompt has been executed succesfully");
                            },
                            onMatch: (i,wildcard) => {// i returns the index of the given options
                                var action;
                        
                                // var totalCentimeters = parseInt(wildcard);
                        
                                if( i == 0 || i == 2) {
                                    action = () => {
                                        jarvice.say(`Il panino con  ${wildcard} e pronto, buon apettito ${nameUsr}`, {
                                            onStart: () => {
                                                jarvice.dontObey();
                                                textTranscript.innerHTML = `Il panino con  ${wildcard} e pronto`;
                                            },
                                            onEnd: () => {
                                                jarvice.obey();
                                                textTranscript.innerHTML = `Il panino pronto buon apetito ${nameUsr}`;
                                            }
                                        });
                                        
                                    }
                                }
                                if(i == 1) {
                                    action = () => {
                                        jarvice.say(`Senza ${wildcard} e pronto`, {
                                            onStart: () => {
                                                jarvice.dontObey();
                                            },
                                            onEnd: () => {
                                                jarvice.obey();
                                            }
                                        })
                                    }
                                }
                               
                                // A function needs to be returned in onMatch event
                                // in order to accomplish what you want to execute
                                return action;                       
                            }
                        });

                    }
                })
            }
        },
        

        
    
    ];

    

 
    jarvice.on(['ciao', 'Ciao']).then(() => {
        if(nameUsr.includes('Onofrio')) {
            jarvice.say(`Ciao ${nameUsr} come stai? ho visto che sei sempre triste, vuoi che ti racconto una barzelletta`, {
                onStart: () => {
                    jarvice.dontObey();
                    textTranscript.innerHTML = `Ciao ${nameUsr} come stai? ho visto che sei sempre triste, vuoi che ti racconto una barzelletta`;

                },
                onEnd: () => {
                    textTranscript.innerHTML = 'Attendi....';
                    setTimeout(() => {
                        jarvice.obey();
                        textTranscript.innerHTML = "voice attivo";
                    },2000);
                }
            })
        }
      
    });

    jarvice.on(["fai presentazione", "volantino start"]).then((i) => {
        if(i === 0 || i === 1){ 
        jarvice.say("Ecco mi", {
            onStart:() => {
                jarvice.dontObey();

            },
            onEnd: () => {
                jarvice.obey();
                jarvice.newPrompt({
                    question: "Vuoi che ti faccio introduzione delle funzioni volantino?",
                    options: ["sì", "no"],
                        beforePrompt: () => {
                            jarvice.dontObey();
                            textTranscript.innerHTML = "Vuoi che ti faccio introduzione delle funzioni volantino?";
                        },
                        onStartPrompt: () => {
                            jarvice.obey();
                            textTranscript.innerHTML = "Rispondi sì{text}.. no{text} esempio{no, grazie}";
                            
                        },
                        onMatch: (i) => {
                            var action;
                            if(i === 0) {
                                jarvice.say("Ok ci sono cinque sezione in totale con diversi possibilità", {
                                    onStart: () => {
                                        textTranscript.innerHTML = "Ok ci sono chinque sezione in totale con diversi possibilite";
                                        jarvice.dontObey();
                                    },
                                    onEnd:() => {
                                        setTimeout(() => {
                                            jarvice.say("Prima sezione si chiama Main ma alla fine dobbiamo rinominarla in area divertimento può raccontare le barzellette è abbastanza interattivo", {
                                                onStart:() => {
                                                    jarvice.dontObey();
                                                    textTranscript.innerHTML = "Prima sezione si chiama Main ma alla fine dobbiamo rinominarla in area divertimento può raccontare le barzellette è abbastanza interattivo";
                                                },
                                                onEnd: () => {
                                                    jarvice.obey();
                                                    jarvice.newPrompt({
                                                        question: "Vuoi continuare o ti sei scocciato?",
                                                        options: ["sì", "no"],
                                                            beforePrompt:() => {
                                                                jarvice.dontObey();
                                                            },
                                                            onStartPrompt: () => {
                                                                jarvice.obey();
                                                                textTranscript.innerHTML = "Rispondi sì o no";
                                                            },
                                                            onMatch: (i) => {
                                                                var action;
                                                                if(i === 0 || i === 1) {
                                                                    jarvice.say("Ok cominciamo divertimento", {
                                                                        onStart: () => {
                                                                            jarvice.dontObey();
                                                                        },
                                                                        onEnd:() => {
                                                                            jarvice.obey();
                                                                        }
                                                                    })
                                                                }

                                                                return action;
                                                            }
                                                    })
                                                }
                                            });

                                        },700);
                                    }
                                });
                            }
                            if(i === 0) {
                                jarvice.say("Ok, meglio cosi", {
                                    onStart: () => {
                                        jarvice.dontObey();
                                        textTranscript.innerHTML = 'OK, meglio cosi';
                                    },
                                    onEnd: () => {
                                        jarvice.obey()
                                    }
                                })
                            }

                            return action;
                        }                 
                });
            }
        });
    }
    });


    jarvice.addCommands(commands);


    console.log(nameUsr);

    function startRecord() {
        jarvice.initialize({
            lang: 'it-IT',
            continuous: true,
            debug: true,
            listen: true,

        }).then(() => {
            console.log("Recegnition start with success...");
            Recmsg_off();
           
        }).catch(err => {
            console.error("Something is wrong :", err);
        });
        _counterClick ++;
        console.log(_counterClick);
        if(_counterClick < 2) {
            jarvice.say(`Benvenuto ${nameUsr}`);
        }
/* Sicmundus */
        jarvice.simulateInstruction("fai presentazione");
    }
    function stopRecord() {
        jarvice.shutUp();
        jarvice.fatality(); 
        li_tag.remove();
        Recmsg_on();
}




jarvice.redirectRecognizedTextOutput(function(text, isFinal) {
    if(isFinal) {
      textTranscript.innerHTML = "";
    } else {
      textTranscript.innerHTML =`Hai detto: ${text}`;

    }
});

    // console.log('Recognized text :', jarvice.redirectRecognizedTextOutput());
    /* Local function area: */
    function Recmsg_off() {
        msg_supp.classList.remove("container-box");
        msg_supp.classList.add("container-box-none");  
    }

    function Recmsg_on() {
        msg_supp.classList.remove("container-box-none");
        msg_supp.classList.add("container-box");  
    }


    let li_tag = document.createElement('li');
    function getCommandList() {
        for( let i = 0; i < keysList.length; i++) {
            joinArr = keysList[i];
            li_tag.innerHTML +=`<br> ${joinArr.indexes[0]}`;
            list.append(li_tag);
        }    
    }

    /* calcualte time */
    const calculateNow = function() {
        let today = new Date();
        console.log(today);
        let hours = today.getHours();
        let twelvehours = " AM";
        if (hours > 12) {
          hours -= 12;
          twelvehours = " PM";
        }
        
        // console.log(weekdays[today.getDay() - 1]);
        let now = weekdays[today.getDay() - 1] + ", " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + ". E ore: " + hours + ":" + today.getMinutes() + twelvehours + ".";
        jarvice.say("Oggi e : " + now, {
            onStart: () => {
                textTranscript.innerHTML = now;
                jarvice.dontObey();
            },
            onEnd: () => {
                setTimeout(() => {
                    jarvice.obey();
                    textTranscript.innerHTML = "";
                },1000);
            }
        }); 
      }
    

    

    

    // jarvice.simulateInstruction("aiuto");


    /* Bind KITT method with button */
    SpeechKITT.setStartCommand(function() {startRecord()});
    SpeechKITT.setAbortCommand(function() {stopRecord()}, );
    SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css', "color: red");
    SpeechKITT.vroom();


    if(!jarvice.Device.isMobile) {
        console.log("Artyom can talk and obey commands in this browser, however the voice will be the default voice of the device. Cannot force language here.");

    } else {
        setTimeout(() => {
            // location.href = "../redirect/redirec.html";
        },1000);
    }

}

    
   

});