const selectTags = document.querySelectorAll('select');

selectTags.forEach((tag, id) =>{
    for(let country_code in countries){
        let selected = id === 0 ? (country_code === "en" ? "selected" : 
        "") : (country_code === "es" ? "selected" : "");

        let option = `<option ${selected} value="${country_code}"> ${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);


    }
});

document.getElementById('translateBtn').addEventListener('click', function (){
    const text = document.getElementById('inputText').value;
    const translateFrom = document.getElementById('translateFrom').value;
    const translateTo = document.getElementById('translateTo').value;
    translateText(text, translateFrom, translateTo);
});

function translateText(inputText, fromLang, toLang) {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`;

    fetch(apiUrl).then(response => response.json()).then(data => {
        if (data.responseData) {
            const translatedText = data.responseData.translatedText;
            document.getElementById('outputText').innerHTML = translatedText;
        }else{
            document.getElementById('outputText').innerHTML = "Error : Could Not Translate!";
        }
    }).catch(error =>{
        console.error('Error:', error);
        document.getElementById('outputText').innerHTML = "Error : An error occurred while translating!";
    });
}
