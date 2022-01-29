{
 	const playGame = function(playerInput){
	clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
	const playerMove = getMoveName(playerInput);

  const getMoveName(argMoveId){
   if(argMoveId == 1){
     return 'kamień';
   } else if (argMoveId == 2){
     return 'papier';
   } else if (argMoveId == 3){
     return 'nożyce';
	 }
  }

  const displayResult(argComputerMove, argPlayerMove){
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
}
