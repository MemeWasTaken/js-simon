// 1) Creare 5 numeri casuali e visualizzarli in pagina;
// 2) Visualizzarli per 4 secondi;
// 3) Dopo che sono spariti aspettare 30 secondi;
// 4) Tramite 5 prompt() l'utente deve inserire i numeri visti;
// 5) Software visualizza quanti e quali numeri sono stati indovinati.

    // 1) //
const arrayNumber = [];
let listNumberDom = document.getElementById('list-number-dom');

for (let i = 0; i < 5; i++) {
    let number =  Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    arrayNumber.push(number);
    let li = document.createElement('li');
    li.append(number);
    listNumberDom.append(li);
}
console.log(arrayNumber);

    // 2) //
setTimeout(tooLate, 4000);
setTimeout(waitForIt, 34000);
function tooLate () {
    listNumberDom.innerHTML = "";
}
function waitForIt () {
    const arrayAttempts = [];
    const arrayGuessed = [];
    for (let i = 0; i < 5; i++) {
        listNumberDom.innerHTML = "";
        let attempt = parseInt(prompt('Inserisci un numero'));
        arrayAttempts.push(attempt);
        if (arrayNumber.includes(attempt)) {
            arrayGuessed.push(attempt);
        }
    }
    return alert('Il tuo punteggio è: ' + arrayGuessed.length + '\nI numeri indovinati sono: ' + arrayGuessed);
}