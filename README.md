Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato in un apposito elemento <p> del mio codice HTML.



-----------------PSEUDOCODE-------------------------

let km
let età

let prezzo = ( 0.21 * km)

sconto = if (età < 18) 20
         if (età > 65) 40

spesa = prezzo - ((prezzo/100)* sconto)