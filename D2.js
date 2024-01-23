/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 5;
const num2 = 7;

const biggest = Math.max(num1, num2);
console.log("Es.1 " + "Il numero più grande è: " + biggest);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 9;

if (num3 !== 5) {
  console.log("Es.2 " + "not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num4 = 5;

if (num4 % 5 === 0) {
  console.log("Es.3 " + "divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num5 = 5;
const num6 = 3;

if (num5 === 8 || num6 === 8) {
} else {
  console.log("Es.4(1) " + "Nessuno dei due numeri è uguale a 8");
}

const numEight = num5 + num6;
if (numEight === 8) {
  console.log("Es.4(2) " + "La somma dei numeri corrisponde a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const product1 = 35;
const product2 = 25;

const totalShoppingCart = product1 + product2;

if (totalShoppingCart >= 50) {
  const result = totalShoppingCart + 10;
} else {
  const result = totalShoppingCart + 0;
}
console.log("Es.5 " + "Il saldo totale per l'acquisto della merce è di: " + totalShoppingCart + "€");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// {
//   const newProducts1 = product1 - product1 * 0.2;
//   const newProducts2 = product2 - product2 * 0.2;

//   totalShoppingCart = newProducts1 + newProducts2;

//   if (totalShoppingCart >= 50) {
//     const result = totalShoppingCart + 10;
//   } else {
//     const result = totalShoppingCart + 0;
//   }
//   console.log("Es.5 " + "Il saldo totale per l'acquisto della merce è di: " + totalShoppingCart + "€");
// }
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const val1 = 10;
const val2 = "10";

console.log("Es.8(1): " + "Il valore è: " + typeof val1);
console.log("Es.8(2): " + "Il valore è: " + typeof val2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num7 = 7;

if (num7 % 2 === 0) {
  console.log("Es.9: " + "Il valore è pari");
} else {
  console.log("Es.9: " + "Il valore è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const newArray = [];

newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push(8);
newArray.push(9);
newArray.push(10);

console.log(newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

newArray.splice(9, 1, 100);

console.log(newArray);
