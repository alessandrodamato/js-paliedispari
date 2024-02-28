///////////////// PALINDROMA /////////////////

const userWord = prompt('Inserisci una parola palindroma')
const reverseOutput = document.getElementById('reverse');
reverseOutput.innerHTML = palindromaCheck();

///////////////// PARI E DISPARI /////////////////






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