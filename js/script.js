console.log('ciao');

//fare array con lista mail di chi può accedere
//chiedere mail a utente
//controllare che mail sia nella lista
//stampare msg di output

const listaMail = ['mariorossi@gmail.com', 'giorgiorossi@gmail.com', 'luciarossi@gmail.com', 'marioverdi@gmail.com', 'giuseppeverdi@gmail.com','sofiarossi@gmail.com','sofiaverdi@gmail.com','giusepperossi@gmail.com','amilcarerossi@gmail.com', 'luciaverdi@gmail.com','giannaverdi@gmail.com','giannarossi@gmail.com','ettorerossi@gmail.com','ettoreverdi@gmail.com','annarossi@gmail.com' ]

let risultato = 'false';
const mailUser = 'annarossi@gmail.com'; //prompt('inserisci la tua email');
console.log(mailUser);

for (let i = 0; i<listaMail.length; i++){ //console.log(listaMail[i]);
  if(listaMail[i] === mailUser){
    //console.log('trovata!');
    risultato = true;
  }
}

let msgMail ='';
let email = document.getElementById('mail');
console.log(email)

if (risultato == true){
  msgMail = 'email trovata!';
  console.log(msgMail);
  email.innerHTML = msgMail;
}else {
  msgMail = 'email non trovata!';
  console.log(msgMail);
  email.innerHTML = msgMail;
}



//generare numero random da 1 a 6 per utente
//generare numero random da 1 a 6 per pc
//confrontare due numeri
//vince chi fa numero più alto

//genero num random per utente
let numUser = (Math.floor(Math.random()*6)+1);
console.log('user', numUser);

//genero num random per pc
let numPc = (Math.floor(Math.random()*6)+1);
console.log('pc', numPc);

//confronto i 2 numeri e stabilisco chi vince
let msg ='';
if (numUser > numPc){
  msg= 'hai vinto';
  console.log(msg);
}
if (numUser < numPc){
  msg= 'hai perso';
  console.log(msg);
}
if (numUser === numPc){
  msg= 'nessuno ha vinto';
  console.log(msg);
}