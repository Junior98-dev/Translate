const selectTags = document.querySelectorAll('select');

selectTags.forEach((tag, id) =>{
    for(let country_code in countries){
        let selected = id === 0 ? (country_code === "en" ? "selected" : 
        "") : (country_code === "es" ? "selected" : "");

        let option = `<option ${selected} value="${country_code}"> ${countries[country_code]}</option>`;
        
    }
})