const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userScore = document.querySelector('#userWon');
const computerScore = document.querySelector('#computerWon');
const gameScore = document.querySelector('#gameScore');
const winner = document.querySelector('#winner');
const reset = document.querySelector('#reset');
let userWon = 0;
let computerWon = 0;

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

function game(event) {
  
  let playerSelection = event.target.innerText.toLowerCase();

  function getComputerChoice() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    const computerSelected = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerSelected;
  }
  const computerSelection = getComputerChoice();
  
  gameScore.innerText = playRound(playerSelection, computerSelection);
  
  if (userWon === 5 || computerWon === 5) 
    gameScore.innerText = winCondition();
  }

function playRound(playerSelection, computerSelection) {
  
  while (userWon < 5 && computerWon < 5) {

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
      userWon += 1;
      userScore.innerText = 'You: ' + userWon;
      return `You won! ${playerSelection} breaks ${computerSelection}.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      userWon  += 1;
      userScore.innerText = 'You: ' + userWon;
      return `You won! ${playerSelection} cuts trough ${computerSelection}.`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      userWon += 1;
      userScore.innerText = 'You: ' + userWon;
      return `You won! ${playerSelection} folds around ${computerSelection}.`; 
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      computerWon += 1;
      computerScore.innerText = 'Computer: ' + computerWon;
      return `You lose! Computer has chosen ${computerSelection}.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computerWon += 1;
      computerScore.innerText = 'Computer: ' + computerWon;
      return `You lose! Computer has seleced ${computerSelection}.`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computerWon += 1;
      computerScore.innerText = 'Computer: ' + computerWon;
      return `You lose! Computer was smarter and has chosen ${computerSelection}.`;
    } else if (playerSelection == computerSelection) {
      return `It's a tie! You have chosen ${playerSelection} and computer has chosen ${computerSelection}`;
    } 
  }
  
}

function winCondition() {
  if (userWon == 5) {
    return 'Bravooo... you won! Congratulations';
  } else if (computerWon == 5) {
    return 'You lost! Computer has won.'
  }
}