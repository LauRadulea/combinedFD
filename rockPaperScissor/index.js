let scorePlayer = 0;
let scoreComputer = 0;
const choices = ["rock", "paper", "scissor"];
const resultsOutputText = document.querySelector('[data-results]')
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener( 'click', () => {
    const playerSelection = selectionButton.dataset.selection;
    const computerSelection = computerPlay();
    if(scorePlayer < 5 && scoreComputer <5) 
      playRound(playerSelection, computerSelection);
    else {
      displayWinner(); 
      scorePlayer = 0
      scoreComputer = 0
    }
    })
})

function computerPlay () {
    return choices [Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection) {
    console.log("DRAW");
  } else if (playerSelection === "rock" && computerSelection === "scissor" 
          || playerSelection === "paper" && computerSelection === "rock" 
          || playerSelection === "scissor" && computerSelection === "paper") {
    scorePlayer++;
    resultsOutputText.innerText = `You are the winner! The score is: ${scorePlayer}:${scoreComputer}`
  } else {
    scoreComputer++;
    resultsOutputText.innerText = `Computer is the winner! The score is: ${scoreComputer}:${scorePlayer}`
  }
}

function displayWinner() {
  if(scoreComputer == scorePlayer) {
    resultsOutputText.innerText = `It's a draw! The score is: ${scoreComputer}:${scorePlayer}`
  } else if (scoreComputer > scorePlayer) {
    resultsOutputText.innerText = `Computer is the winner!`
  } else {
    resultsOutputText.innerText = `You are the winner!`
  }
}