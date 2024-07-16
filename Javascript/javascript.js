// const prompt =  require('prompt-sync')();
// const str = prompt('Enter a string: ');
// console.log("Hai Inserito " + str);

// var sPrimoNum = prompt("Inserisci il primo numero ");
// var iPrimoNum = parseInt(sPrimoNum)

// var sSecondoNum = prompt("Inserisci secondo numero ");
// var iSecondoNum = parseInt(sSecondoNum)

// var sSomma = iPrimoNum + iSecondoNum

// console.log("La somma vale " + sSomma );


// var sStringa = prompt("Inserisci la tua stringa: ")
// var iNum = prompt("Inserisci il numero da cercare: ")

/* return none or number in the string */

var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A è " + typeof(A) + "\n");
console.log("Il tipo della var B è " + typeof(B) + "\n");


var A;
A = 0;
console.log('Il tipo della var A è ' + typeof(A) + '\n');
A = 'ciao'
console.log('Il tipo della var A è ' + typeof(A) + '\n');


var iPosizione;
var sMiaStringa;
sMiaStringa = "paperino"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
						console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");



var iPosizione;
var sMiaStringa;
sMiaStringa = "ciao"
iPosizione = sMiaStringa.indexOf("c");
if(iPosizione == -1)
    console.log("La c non c'e' nella parola");
else
    console.log("La 'c' è nella parola");


function isLastLetter(stringa, lettera) {
    var l;
    l = stringa.length
    if (stringa.indexOf(lettera) == l - 1)
        return 1;
    
    else
        return 0;
    
}

var stringa 
stringa ='ciao'
var lettera
lettera = 'o'

console.log(isLastLetter(stringa, lettera))