console.log('ciao');

//fare array con lista mail di chi può accedere
//chiedere mail a utente
//controllare che mail sia nella lista
//stampare msg di output

//faccio con array la lista delle mail
const listaMail = ['mariorossi@gmail.com', 'giorgiorossi@gmail.com', 'luciarossi@gmail.com', 'marioverdi@gmail.com', 'giuseppeverdi@gmail.com','sofiarossi@gmail.com','sofiaverdi@gmail.com','giusepperossi@gmail.com','amilcarerossi@gmail.com', 'luciaverdi@gmail.com','giannaverdi@gmail.com','giannarossi@gmail.com','ettorerossi@gmail.com','ettoreverdi@gmail.com','annarossi@gmail.com' ]

//inizializzo un risultato di default per la mia ricerca della mail
let risultato = false;

const mailUser = 'annarossi@gmail.com'; //prompt('inserisci la tua email');
console.log(mailUser);

//faccio un ciclo di ricerca su tutta la lista mail
for (let i = 0; i < listaMail.length; i++) {
  //console.log(listaMail[i]);
  if(listaMail[i] === mailUser) {
    //console.log('trovata!');
    risultato = true;
  }
}

//inizializzo un messaggio di stampa e una variabile collegata a html
let msgMail ='';
let email = document.getElementById('mail');
console.log(email);

//controllo se ho trovato nella lista la mail che controllavo
if (risultato == true) {
  msgMail = 'email trovata!';
  console.log(msgMail);
  // email.innerHTML = msgMail;
} else {
  msgMail = 'email non trovata!';
  console.log(msgMail);
  // email.innerHTML = msgMail;
}
//stampo messagio di output
email.innerHTML = msgMail;


//far scegliere a utente un numero da 1 a 6 compresi
//generare numero random da 1 a 6 per pc
//confrontare due numeri
//vince chi fa numero più alto

//genero numero random per utente
let numUser = (Math.floor(Math.random() * 6) + 1);
console.log('user', numUser);

//genero numero random per pc
let numPc = (Math.floor(Math.random() * 6) + 1);
console.log('pc', numPc);

//confronto i 2 numeri e stabilisco chi vince, inizializzando un messaggio vuoto di default e collegando un elemento a html
let msg = '';
let dadi = document.getElementById('dadi');
console.log(dadi);

//imposto le condizioni di verifica per sapere chi ha vinto
if (numUser > numPc){
  msg = 'hai vinto';
  console.log(msg);
} else if (numUser < numPc){
  msg = 'hai perso';
  console.log(msg);
} else {
  msg = 'nessuno ha vinto';
  console.log(msg);
}
//stampo il messaggio di output
dadi.innerHTML = msg;