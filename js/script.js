// 1) Creare 5 numeri casuali e visualizzarli in pagina;
// 2) Visualizzarli per 30 secondi dopodiché spariscono;
// 3) Tramite 5 prompt() l'utente deve inserire i numeri visti;
// 4) Software visualizza quanti e quali numeri sono stati indovinati.

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
setTimeout(waitForIt, 3000);
function waitForIt () {
        
    const arrayGuessed = [];
    for (let i = 0; i < 5; i++) {
        let attempts = parseInt(prompt('Inserisci un numero'));
        arrayGuessed.push(attempts);
    }
}
