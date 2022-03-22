let chilometri=prompt("Quanti chilometri deve percorrere?");
//voglio trasformarlo in numero da stinga generica
chilometri=parseInt(chilometri);
console.log("Ho salvato la variabile chilometri: è", chilometri);

let age=prompt("Quanti anni ha?");
//in integer anche questo
age=parseInt(age);
console.log("Ho salvato la variabile età: è", age);

//calcoli: let prezzo = ( 0.21 * km)
let prezzo=chilometri*0.21;
console.log("Il prezzo non scontato è", prezzo);
10
//per la percentuale basta fare *0.20 o *0.40 :DD
let spesa;
//dichiarata var spesa

if (age < 18) {
    let spesa=prezzo*0.80; //sconto del 20%
    console.log("sotto i 18 paghi", spesa);
} else if (age > 65) {
    let spesa=prezzo*0.60; //sconto del 40%
    console.log("oltre i 65:", spesa);
} else {
    spesa=prezzo;
}


console.log("La spesa è:", spesa);



//printa in html
document.getElementById("output").innerHTML= spesa;




// if (time < 10) {
//    greeting = "Good morning";
//  } else if (time < 20) {
//    greeting = "Good day";
//  } else {
//    greeting = "Good evening";
//  }
  