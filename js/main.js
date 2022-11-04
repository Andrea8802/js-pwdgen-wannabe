// Creare un generatore di password in base ai dati forniti dall'utente

// Variabili
let firstName, lastName, favColor, password;
const number = 21;

// Chiedere all'utente il proprio nome
firstName = prompt("Inserisci il tuo nome");

console.log(firstName);

// Chiedere all'utente il proprio cognome
lastName = prompt("Inserisci il tuo cognome");
console.log(lastName);


// Chiedere all'utente il proprio colore preferito
favColor = prompt("Inserisci il tuo colore preferito");
console.log(favColor);


// Mettere insieme tutti i dati
password = firstName + lastName + favColor + number

// Output
console.log(password);
