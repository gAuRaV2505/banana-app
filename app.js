var btnTranslate = document.querySelector('#translate-btn');
var txtInput = document.querySelector('#translate-ip');
var outputDiv = document.querySelector('.output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json"; 


btnTranslate.addEventListener('click', function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json =>  {
        var translatedText = json.contents.translated;
        console.log(json);
        outputDiv.innerText = translatedText;
    })
    .catch(err => console.log("Sorry || There is some Error" + err));    
     
});


function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}

