let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
}	else if (randomNumber == 3) {
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
 if(argMoveId == 1){
   return 'kamień';
 } else if (argMoveId == 2){
   return 'papier';
 } else if (argMoveId == 3){
   return 'nożyce';
 }

 printMessage('Nie znam ruchu o id ' + argMoveId + '.');
 return 'nieznany ruch';
}

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
}	else if (playerInput == '3') {
  playerMove = 'nożyce';
}*/

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}




printMessage('Twój ruch to: ' + playerMove);

if(
    computerMove == 'kamień' && playerMove == 'papier'
    || computerMove == 'nożyce' && playerMove == 'kamień'
    || computerMove == 'papier' && playerMove == 'nożyce'
  ){
    printMessage('Ty wygrywasz!');
} else if(
  computerMove == 'papier' && playerMove == 'kamień'
  || computerMove == 'kamień' && playerMove == 'nożyce'
  || computerMove == 'nożyce' && playerMove == 'papier'
){
  printMessage('Przegrałeś');
} else if(
  computerMove == 'papier' && playerMove == 'papier'
  || computerMove == 'kamień' && playerMove == 'kamień'
  || computerMove == 'nożyce' && playerMove == 'nożyce'
){
  printMessage('Remis');
} else if(
  computerMove == 'papier' && playerMove == 'nieznany ruch'
  || computerMove == 'kamień' && playerMove == 'nieznany ruch'
  || computerMove == 'nożyce' && playerMove == 'nieznany ruch'
){
  printMessage('Oszukujesz!');
}
