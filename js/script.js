function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
 playGame(playerInput){

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

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

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(
        argComputerMove == 'kamień' && argPlayerMove == 'papier'
        || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'
        || argComputerMove == 'papier' && argPlayerMove == 'nożyce'
      ){
        printMessage('Ty wygrywasz!');
    } else if(
      argComputerMove == 'papier' && argPlayerMove == 'kamień'
      || argComputerMove == 'kamień' && argPlayerMove == 'nożyce'
      || argComputerMove == 'nożyce' && argPlayerMove == 'papier'
    ){
      printMessage('Przegrałeś');
    } else if(
      argComputerMove == 'papier' && argPlayerMove == 'papier'
      || argComputerMove == 'kamień' && argPlayerMove == 'kamień'
      || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'
    ){
      printMessage('Remis');
    } else if(
      argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'
      || argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'
      || argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'
    ){
      printMessage('Oszukujesz!');
    }
  }
}

displayResult(argComputerMove, argPlayerMove)

  printMessage('Twój ruch to: ' + playerMove);

playGame(3);

document.getElementById('rock').addEventListener('click', function(){
  printMessage('zagrałeś kamień');
});
document.getElementById('paper').addEventListener('click', function(){
  printMessage('zagrałeś papier');
});
document.getElementById('zagrałeś nożyce').addEventListener('click', function(){
  printMessage('Guzik został kliknięty');
});
