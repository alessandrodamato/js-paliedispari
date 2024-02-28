///////////////// PALINDROMA /////////////////

const userWord = prompt('Inserisci una parola palindroma');
const reverseOutput = document.getElementById('reverse');
reverseOutput.innerHTML = palindromaCheck();

///////////////// PARI E DISPARI /////////////////

const btnGo = document.getElementById('go');
const numberPlayer = document.getElementById('num-player');
const choose = document.getElementById('choose');
const numbers = document.getElementById('numbers');
let playerChoose;
let pcChoose;
let winCondition;

btnGo.addEventListener('click', function(){

  playerChoose = parseInt(numberPlayer.value);
  pcChoose = parseInt(getRandomNumber(1, 5));
  
  if ((choose.value == 'pari') && (numberPlayer.value > 0) && (numberPlayer.value <= 5)){
    
    numbers.innerHTML = `
    <div>PC: ${pcChoose} | Player: ${playerChoose}</div>
    <div>Somma = ${sum(playerChoose, pcChoose)}</div>
    `;
    
    if (winCondition === 'PARI'){
      numbers.innerHTML += 'Vince il Player';
    } else {
      numbers.innerHTML += 'Vince il PC';
    }
    
  } else if ((choose.value == 'dispari') && (numberPlayer.value > 0) && (numberPlayer.value <= 5)){

    numbers.innerHTML = `
    <div>PC: ${pcChoose} | Player: ${playerChoose}</div>
    <div>Somma = ${sum(playerChoose, pcChoose)}</div>
    `;

    if (winCondition === 'DISPARI'){
      numbers.innerHTML += 'Vince il Player';
    } else {
      numbers.innerHTML += 'Vince il PC';
    }
  
  } else {

    numbers.innerHTML = 'Devi scegliere tra pari e dispari e inserire un numero da 1 a 5 per poter giocare';

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

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum (numA, numB) {

  if ((numA + numB) % 2 === 0) {
   return winCondition = 'PARI'
  }
  return winCondition = 'DISPARI'

}