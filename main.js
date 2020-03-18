// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferitoInfine scrivi sulla pagina nomecognomecolorepreferito19


// creiamo  nome
var nomeUtente;
//salviamo nomeUtente

nomeUtente=prompt("inserire nome");


// chiedere cognome
var cognomeUtente;

//salviamo cognomeUtente
cognomeUtente=prompt("inserire cognome");



//chiedere colore preferito19
var colorePreferito;
//salviamo coloreUtente

coloreUtente=prompt("inserire colore preferito");


//diamo il risultato allo utente
document.getElementById("password").innerHTML="ciao" + nomeUtente + cognomeUtente + coloreUtente ;
