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

 //per la percentuale basta fare *0.20 o *0.40 :DD
    let spesa;
//dichiarata var spesa
if (age < 18) {
    spesa=prezzo*0.80; //sconto del 20%
    console.log("sotto i 18 paghi", spesa);
} else if (age > 65) {
    spesa=prezzo*0.60; //sconto del 40%
    console.log("oltre i 65:", spesa);
} else {
    spesa=prezzo;
}

console.log("La spesa è:", spesa);
// sarà da fixare sui decimali
let spesaNetta = spesa.toFixed(2);
console.log("Spesa Precisa è", spesaNetta);


// printare in html

//printa in html
document.getElementById("output").innerHTML = spesaNetta;




/* if (time < 10) {
   greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  */