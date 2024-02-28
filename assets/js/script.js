///////////////// PALINDROMA /////////////////

const userWord = 'giovanni'; //prompt('Inserisci una parola palindroma')
const reverseOutput = document.getElementById('reverse');
reverseOutput.innerHTML = palindromaCheck();

///////////////// PARI E DISPARI /////////////////

const btnGo = document.getElementById('go');
const numberPlayer = document.getElementById('num-player');
const choose = document.getElementById('choose');
let playerChoose;

btnGo.addEventListener('click', function(){
  
  if ((choose.value === 'pari') && (numberPlayer.value > 0) && (numberPlayer.value <= 5)){
    console.log('Scegli pari');
    
  } else if ((choose.value === 'dispari') && (numberPlayer.value > 0) && (numberPlayer.value <= 5)){
    console.log('Scegli dispari');
  
  } else {
    console.log('Scegli tra pari e dispari e inserisci un numero da 1 a 5');
  }

})

///////////////// FUNCTIONS /////////////////

function palindromaCheck () {

  // controllo se la parola non esiste oppure è un numero
  if ((userWord === null) || (!isNaN(userWord))) {

    return 'Devi inserire una parola';

  //altrimenti parte il controllo della parola nello specifico
  } else {

    const reverseUserWord = userWord.split('').reverse().join('');

    // se è diversa dalla parola al contrario oppure è uguale a 0 non sarà palindroma
    if ((reverseUserWord !== userWord) || (reverseUserWord.length === 0)) {
      return 'La parola inserita non è palindroma';
    }

    // altrimenti lo è
    return 'La parola inserita è palindroma: ' + userWord + ' al contrario è: ' + reverseUserWord;

  }
}

function getRandomNumber () {
  
}