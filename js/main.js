// Creare un generatore di password in base ai dati forniti dall'utente

// Variabili
let firstName, lastName, favColor, password;
const number = 21;

// Chiedere all'utente il proprio nome
firstName = prompt("Inserisci il tuo nome");

// Chiedere all'utente il proprio cognome
lastName = prompt("Inserisci il tuo cognome");

// Chiedere all'utente il proprio colore preferito
favColor = prompt("Inserisci il tuo colore preferito");

// Mettere insieme tutti i dati
password = firstName + lastName + favColor + number

// Output
document.getElementById("password").innerHTML = password
