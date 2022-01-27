function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


 function playGame(playerInput){
	clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  ('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  ('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  function getMoveName(argMoveId){
   if(argMoveId == 1){
     return 'kamień';
   } else if (argMoveId == 2){
     return 'papier';
   } else if (argMoveId == 3){
     return 'nożyce';
	 }
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(
        argComputerMove == 'kamień' && argPlayerMove == 'papier'
        || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'
        || argComputerMove == 'papier' && argPlayerMove == 'nożyce'
      ){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == argPlayerMove){
      printMessage('Remis');
    } else {
      printMessage('Przegrałeś');
    }
  }
	displayResult(computerMove, playerMove)
}

document.getElementById('rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3);
});
