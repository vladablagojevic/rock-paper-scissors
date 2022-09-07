/*********************************************************************************************
1. Create function getComputerChoice() that will randomly retrurn either rock, paper or scissors
*********************************************************************************************/
function getComputerChoice() {
  const gameOptions = ['rock', 'paper', 'scissors'];
  const computerSelected = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerSelected;
}
const computerSelection = getComputerChoice();
console.log(computerSelection);
/*********************************************************************************************
2. Store users input in a variable and make it case-insensitive 
 ********************************************************************************************/
const playerSelection = prompt('Enter rock, paper or scissors').toLowerCase();
/*********************************************************************************************
3. Write a function playRound() that plays single round of the game and take two parameters
   playerSelection and computerSelection and than returns a string that declares winner of
   the round.
*********************************************************************************************/
let userWon = 0;
let computerWon = 0;

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    userWon += 1;
    //console.log(userWon);
    return `You won! ${playerSelection} breaks ${computerSelection}.`;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    userWon  += 1;
    return `You won! ${playerSelection} cuts trough ${computerSelection}.`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    userWon += 1;
    return `You won! ${playerSelection} folds around ${computerSelection}.`; 
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerWon += 1;
    return `You lose! Computer has chosen ${computerSelection}.`;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerWon += 1;
    return `You lose! Computer has seleced ${computerSelection}.`;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerWon += 1;
    return `You lose! Computer was smarter and has chosen ${computerSelection}.`;
  } else if (playerSelection == computerSelection) {
    return `It's a tie! You have choesen ${playerSelection} and computer has chosen ${computerSelection}`;
  } else {
    return 'You misstyped something... try again!';
  }
}
console.log(playRound(playerSelection, computerSelection));
/*********************************************************************************************
4. Write a function game() that calls playRound() in its own body. playRound should be
executed 5 times. It should keep score of every round (create a variables for users score and
for computers score userWon and computerWon). It should report a winner at the end - create a
helper function with condition for win inside... winCondition(). Helper function is going to
be called at the end of playRound(). Results should be displayed in console for now and the
winner too.
*********************************************************************************************/
