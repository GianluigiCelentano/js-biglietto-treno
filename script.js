// var dieds = prompt ("inserisci il tuo nome");
// var dier = prompt ("inserisci il tuo");
// var result = parseInt(dieds) * parseInt(dier) / 100;
// var totale = parseInt(dieds) - result;
// document.getElementById("dieresult").innerHTML = totale

// 1 unisco più variabili per creare una password
// var name = prompt("inserisci il tuo nome");
// var surname = prompt("inserisci il tuo cognome");
// var color = prompt("inserisci il tuo colore preferito");
// var password = name + surname + color;
// document.getElementById("password").innerHTML = password

// 2 creo una variabile dove dando una risposta invece di un'altra cambia il contenuto
// var prof = prompt ("inserisci il tuo nome");
// if (prof === "ottavio") {
//     document.getElementById("benvenuto").innerHTML += "benvenuto prof" }
// else { document.getElementById("benvenuto").innerHTML += "benvenuto collega"
// }

//  creo una variabile in base al numero inserito dall'utente o pari o dispari

// var number = prompt ("inserisci un numero")
// if (number % 2 === 0) {
//     document.getElementById("variabile").innerHTML += '<br/>PARI!';
// } else { 
//     document.getElementById("variabile").innerHTML += '<br/>DISPARI!';
// }

// qui ho messo una variabile di numero randomico della macchina tra 0 e 10
// dove è maggiore di 5 metto il numero, altrimenti non scrivo nulla

var km = prompt ("inserisci il numero di kilometri da percorrere")
var age = prompt ("inserisci la tua età")
var cost = parseInt(km) * 0.21;
if (age < 18) {
    var discount20 = parseInt(age) * 20 / 100;
} else (age > 65)
    var discount40 = parseInt(age) * 40 / 100;
    var total20 = cost - discount20;
    var total40 = cost - discount40;
if (age < 18) {
    document.getElementById("sconto20").innerHTML += total20;
} else (age > 65)
    document.getElementById("sconto20").innerHTML += total40;
    var total20 = cost - discount20;
    var total40 = cost - discount40;