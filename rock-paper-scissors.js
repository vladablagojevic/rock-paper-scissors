/*********************************************************************************************
1. Create function getComputerChoice() that will randomly retrurn either rock, paper or scissors
*********************************************************************************************/
function getComputerChoice() {
  const gameOptions = ['rock', 'paper', 'scissors'];
  const computerSelected = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerSelected;
}
const computerSelection = getComputerChoice();
/*********************************************************************************************
2. Store users input in a variable and make it case-insensitive 
 ********************************************************************************************/
const userSelection = prompt('Enter rock, paper or scissors').toLocaleLowerCase();
/*********************************************************************************************
3. Write a function playRound() that plays single round of the game and take two parameters
   playerSelection and computerSelection and than returns a string that declares winner of
   the round.
*********************************************************************************************/

/*********************************************************************************************
4. Write a function game() that calls playRound() in its own body. playRound should be
executed 5 times. It should keep score of every round (create a variables for users score and
for computers score userWon and computerWon). It should report a winner at the end - create a
helper function with condition for win inside... winCondition(). Helper function is going to
be called at the end of playRound(). Results should be displayed in console for now and the
winner too.
*********************************************************************************************/
