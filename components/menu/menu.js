const jarvice = new Artyom();

    console.log('Speech supported: ',jarvice.speechSupported());
    console.log('Recognition supported:', jarvice.recognizingSupported());

function startRecord() {
    jarvice.initialize({
        lang: 'it-IT',
        continuous: true,
        debug: true,
        listen: true,

    }).then(() => {
        console.log("Recegnition start with success...");
    }).catch(err => {
        console.error("Something is wrong :", err);
    });

}

// startRecord();
SpeechKITT.setStartCommand(function() {startRecord()});
SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');
SpeechKITT.vroom();
