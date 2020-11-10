window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded...");
    // console.log(`Ecco il nuovo : ${ newUser}`);
    window.onload = function() {
    const jarvice = new Artyom();
    
    
        /* Start get element from DOM */
        let textTranscript = document.getElementById('text');
        const keysList = jarvice.getAvailableCommands();
        let list = document.getElementById('list');
        let passw = document.getElementById("password");
        let nameW = document.getElementById("username");
        let emailW = document.getElementById("email");
    
    
        
        /* Counter/timer */
        let _counterClick = 0;
        let _nameCounter = 0;
    
            
    
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
                               },4000)
                            }
                           });       
                    }    
    
                    
                }
            }
        ];
     
        jarvice.on(['ciao', 'ripeti']).then((i) => {
            if(i === 0 ){
                if(nameUsr.includes('Onofrio') && _nameCounter < 1) {
                    jarvice.say(`Ciao ${nameUsr} come stai? ho visto che sei sempre triste, vuoi che ti racconto una barzelletta`, {
                        onStart: () => {
                            jarvice.dontObey();
                            _nameCounter ++;
                            textTranscript.innerHTML = `Ciao ${nameUsr} come stai? ho visto che sei sempre triste, vuoi che ti racconto una barzelletta`;
        
                        },
                        onEnd: () => {
                            textTranscript.innerHTML = '';
                            setTimeout(() => {
                                jarvice.obey();
                            },1000);
                        }
                    })
                }else {
                    jarvice.say(`Ciao ${nameUsr}`, {
                        onStart: () => {
                            jarvice.dontObey();
                            textTranscript.innerHTML = `Ciao ${nameUsr}`;
        
                        },
                        onEnd : () => {
                            jarvice.obey();
                            textTranscript.innerHTML = '';
                        }
                    });
                }
                    
            } else if( i === 1) {
                jarvice.repeatLastSay();
            }
            
        });


        jarvice.on(["scrivi il nome *", "sciriv nome *"], true).then((i, wildcard) => {
            let text = wildcard.charAt(0).toUpperCase() + wildcard.slice(1);
            if(i === 0 || i === 1 || i === 2) {
                jarvice.say(`Nome ${text} e stato inserito`, {
                    onStart: () => {
                        wirteName(text);
                        jarvice.dontObey();
                        textTranscript.innerHTML = `Nome: ${text} e stato inserito`;
                    },
                    onEnd: () => {
                        jarvice.obey();
                        jarvice.newPrompt({
                            question: "stato inserito giusto?",
                            smart: true,
                            options: ["sì *", "no *"],
                                beforePrompt:() => {
                                    jarvice.dontObey();                                   
                                },
                                onStartPrompt: () => {
                                    textTranscript.innerHTML = "Rispondi 'Sì giusto' o 'No '";
                                    setTimeout(() => {
                                        jarvice.obey();
                                        textTranscript.innerHTML = "Risposta..:"
                                    },3000);
                                },
                                onMatch: (i, wildcard) => {
                                    var action;
                                        let text = wildcard;

                                        if(i === 0) {
                                            jarvice.say("Ok andiamo avanti", {
                                                onStart: () => {
                                                    jarvice.dontObey();
                                                },
                                                onEnd: () => {
                                                    emailW.focus();
                                                    jarvice.obey();
                                                }
                                            });
                                        }
                                        if(i === 1) {
                                            jarvice.say("Va bene lo cancello e riproviamo", {
                                                onStart:() => {
                                                    jarvice.dontObey();
                                                    wirteName('');
                                                },
                                                onEnd: () => {
                                                    jarvice.obey();
                                                    textTranscript.innerHTML = "Per riprovare dici 'scrivi il nome {} o auito'";
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

        jarvice.on(["scrivi la mail *", "scrivi mail *", "scrivi una mail *"], true).then((i, wildcard) => {
            let text = wildcard;
            if(i === 0 || i === 1 || i === 2) {
                jarvice.say(`La mail e ${text}`, {
                    onStart: () => {
                        textTranscript.innerHTML = `La mail e ${text}`;
                        jarvice.dontObey();
                        writeEmail(text);
                     
                    },
                    onEnd: () => {
                        jarvice.obey();
                        jarvice.newPrompt({
                            question: "stato inserito giusto?",
                            smart: true,
                            options: ["sì *", "no *"],
                                beforePrompt:() => {
                                    jarvice.dontObey();
                                },
                                onStartPrompt: () => {
                                    textTranscript.innerHTML = "Rispondi 'Si giusto' o 'No '";
                                    setTimeout(() => {
                                        jarvice.obey();
                                        textTranscript.innerHTML = "Risposta..:"
                                    },3000);

                                },
                                onMatch: (i, wildcard) => {
                                    let control = wildcard;
                                    var action;
                                        if(i === 0) { 
                                            jarvice.say("Ok andiamo avanti", {
                                                onStart: () => {
                                                    jarvice.dontObey();
                                                },
                                                onEnd: () => {
                                                    jarvice.obey();
                                                    passw.focus();
                                                }
                                            });
                                        }
                                        if(i ===  1) {
                                            jarvice.say("Lo cancello e riproviamo", {
                                                onStart: () => {
                                                    jarvice.dontObey();
                                                    writeEmail('');
                                                    textTranscript.innerHTML = "Per riprovare dici scrivi la mail {esempio: antionio@gmail.com";
                                                },
                                                onEnd: () => {
                                                    jarvice.obey();
                                                }
                                            });
                                        }


                                    return action;
                                }
                        });
                    }
                });
            }
        });

        jarvice.on(["scrivi la password *", "scrivi password  *", "scrivi il password *"], true).then((i, wildcard) => {
            if(i === 0 || i === 1 || i === 2) {
                jarvice.say("Attenzione per prevenire perdita dei dati sconsigliato compilare il camo di password con commandi vocale", {
                    onStart: () => {
                        jarvice.dontObey();
                        textTranscript.innerHTML = "Attenzione per prevenire perdita dei dati sconsigliato compilare il campo di password con commandi vocale";
                    },
                    onEnd:() => {
                        jarvice.obey();
                        jarvice.newPrompt({
                            question: "Volete comunque proseguire con le commande vocale?",
                            smart: true,
                            options: ["sì *", "no *"],
                                beforePrompt: () => {
                                    jarvice.dontObey();
                                    textTranscript.innerHTML = "Volete comunque proseguire con le commande vocale";
                                },
                                onStartPrompt: () => {
                                    textTranscript.innerHTML = "Rispondi 'Si giusto' o 'No '";
                                    setTimeout(() => {
                                        jarvice.obey();
                                        textTranscript.innerHTML = "Risposta..:"
                                    },3000);

                                },

                                onMatch: (i) => {
                                    var action;
                                        if(i === 0) {
                                            jarvice.newPrompt({
                                                question: "Ok blocco disattivato",
                                                smart: true,
                                                options: ["scrivi *" , "torna *"],
                                                    beforePrompt: () => {
                                                        jarvice.dontObey();
                                                        textTranscript.innerHTML = "Ok blocco disattivato";
                                                        setTimeout(() => {
                                                            textTranscript.innerHTML = "aspetta..";
                                                        },400);
                                                    },
                                                    onStartPrompt: () => {
                                                        textTranscript.innerHTML = "vai";
                                                        jarvice.obey();

                                                    },
                                                    onMatch: (i, wildcard) => {
                                                        var action;
                                                        let text = wildcard.trim();
                                                            if(i === 0) {
                                                                let pwd = document.getElementById("password");
                                                                pwd.focus();
                                                                writePass(text);
                                                                pwd.type = "text";
                                                            }
                                                            if(i === 1) {
                                                                jarvice.say("Ok potete inserire il vostro password manualmente", {
                                                                    onStart: () => {
                                                                        jarvice.dontObey();
                    
                                                                    },
                                                                    onEnd: () => {
                                                                        textTranscript.innerHTML = "Inserite la password per attivare voice spegni/accendi button o pronucni la commando ok volantino";
                                                                        let pass = document.getElementById('password');
                                                                        pass.focus();
                                                                    }
                                                                });
                                                            }


                                                        return  action;
                                                    }
                                            });

                                        }
                                        if(i === 1) {
                                            jarvice.say("Ok potete inserire il vostro password manualmente", {
                                                onStart: () => {
                                                    jarvice.dontObey();

                                                },
                                                onEnd: () => {
                                                    textTranscript.innerHTML = "Inserite la password per attivare commandi vocale spegni/accendi button o pronucni 'volantino start'";
                                                    let pass = document.getElementById('password');
                                                    pass.focus();
                                                }
                                            });
                                        }


                                    return action;
                                }
                        });
                    }
                })
            }
        });

        jarvice.on(["invia", "invio"]).then(() => {
            jarvice.say("Se tutti campi inseriti la forma sàra inviata", {
                onStart:() => {
                    jarvice.dontObey();
                    textTranscript.innerHTML = "Se tutti campi inseriti la forma sàra inviata";
                },
                onEnd: () => {
                    textTranscript.innerHTML = "Attendi...";
                    jarvice.obey();
                    let inF = document.getElementById("btn-send");
                    inF.click();
                    setTimeout(() => {
                        passw.value = '';
                        nameW.value = '';
                        emailW.value = '';
                        textTranscript.innerHTML = "Uttente creato con successo";
                    },600);
                }

        });
    
    });

        jarvice.on(["cancella *"], true).then((i, wildcard) => {
            let text = wildcard;
            if(i === 0 && text.includes("nome") && text.includes("il nome")) {
                jarvice.say("Il campo nome e cancelato", {
                    onStart: () => {
                        wirteName('');
                        jarvice.dontObey();
                        textTranscript.innerHTML = "Nome: e cancelato";
                    },
                    onEnd:() => {
                        jarvice.obey();
                    }
                });
                
            }
            if(i === 0 && text.includes("mail") || text.includes("la mail") || text.includes("email")) {
                jarvice.say("la mail e cancellato", {
                    onStart:() => {
                        jarvice.dontObey();
                        textTranscript.innerHTML = "La mail e cancellato";
                        writeEmail('');
                    },
                    onEnd : () => {
                        jarvice.obey();
                    }
                })
            }
            if(i === 0 && text.includes("passwod") || text.includes("passw")) {
                jarvice.say("Password è cancellato", {
                    onStart:() => {
                        jarvice.dontObey();
                        textTranscript.innerHTML = 'Password è cancellato';
                        writePass('');
                    },
                    onEnd : () => {
                        jarvice.obey();
                        textTranscript.innerHTML = "Per riprovare dici 'scrivi la password ..'";
                    }
                })
            }
        });

        // jarvice.on(["test"]).then((i) => {
        //     if(i === 0) {
        //         jarvice.say(`Sì certo il nuovo uttente registrato sì chiama ${newUser}`);
        //     }
        // });

        jarvice.on(["volantino esci"]).then((i) => {
            if(i === 0) { 
            jarvice.say("Attenzione?", {
                onStart: () => {
                    jarvice.dontObey();
                    let btnTrig = document.querySelector(".trigger-btn");
                    btnTrig.click();
                },
                onEnd: () => {
                    jarvice.obey();
                    jarvice.newPrompt({
                        question: "Per abbandonare scegli opzione si per rimanere opzione no",
                        options: ["sì" ,"no"],
                            beforePrompt: () => {
                                jarvice.dontObey();
                            },
                            onStartPrompt: () => {
                                setTimeout(() => {
                                    jarvice.obey();
                                },300)
                            },
                            onMatch: (i) => {
                                var action;
                                    if(i === 0) { 
                                        location.href = "../menu/menu.php";
                                    }
                                    if(i === 1) {
                                       let close = document.querySelector('.close');
                                       close.click();
                                    }

                                return action;
                            }
                    });
                }
            
            });
        }
        });


        jarvice.addCommands(commands);
    
       
    
       
    
        function startRecord() {
            jarvice.initialize({
                lang: 'it-IT',
                continuous: true,
                debug: true,
                listen: true,
                obeyKeyword: "volantino start",
    
            }).then(() => {
                console.log("Recegnition start with success...");
               
            }).catch(err => {
                console.error("Something is wrong :", err);
            });
            _counterClick ++;
            console.log(_counterClick);
            if(_counterClick < 2) {
                jarvice.say(`Benvenuto ${nameUsr}`);
            }
    /* Sicmundus */
            // jarvice.simulateInstruction("scrivi la password 331231");
        }
        function stopRecord() {
            jarvice.shutUp();
            jarvice.fatality(); 
            li_tag.remove();
           
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
       
    
    
        let li_tag = document.createElement('li');
        function getCommandList() {
            for( let i = 0; i < keysList.length; i++) {
                joinArr = keysList[i];
                li_tag.innerHTML +=`<br> ${joinArr.indexes[0]}`;
                list.append(li_tag);
            }    
        }
    
    
       
    

        /* Function Area TODO: */
        function wirteName (name) {
            let uname = document.getElementById("username");
                uname.value=name;
                uname.focus();
          }

          function writeEmail(name) {
            let emailadd = document.getElementById("email");
                let var2 = name.replace('chiocciola', '@');                
                emailadd.value=var2.split(" ").join("");
                emailadd.focus();
          }

          function writePass(name) { 
              let pass = document.getElementById('password');
              pass.value = name;
              pass.focus();
          }


          

    
    
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