
function toggle() {
    document.getElementById(`menubarLinks`).classList.toggle(`menubarLeft`);
    document.getElementById(`backResponsive`).classList.toggle(`appearX`);
}


function openCloseFormular(){
    document.getElementById(`contactContainer`).classList.toggle(`d-none`);
}


function submitFormular(){
let input = document.getElementsByClassName(`name`).value;
let userMessage = document.getElementById(`userMessage`).value;

if(input || userMessage == ``){
    alert(`Alle Felder ausfüllen!`);
}
else{
alert(`Nachricht wurde erfolgreich übermittelt! Vielen Dank für Ihr Interesse.`);
document.getElementById(`contactContainer`).classList.add(`d-none`);
}
}