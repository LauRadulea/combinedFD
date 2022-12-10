let scorePlayer = 0;
let scoreComputer = 0;
let score = 0;
const choices = ["rock", "paper", "scissor"];
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener( 'click', () => {
    const playerSelection = selectionButton.dataset.selection;
    const computerSelection = computerPlay();
    if(score < 5) 
      playRound(playerSelection, computerSelection);
    else 
      displayWinner(); //add refresh page to play again
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
      console.log(`You are the winner! The score is: ${scorePlayer}:${scoreComputer}`);
    } else {
      scoreComputer++;
      console.log(`Computer is the winner! The score is: ${scoreComputer}:${scorePlayer}`);
    }
    if(scoreComputer == 5) 
      score = scoreComputer;
    else if(scorePlayer == 5)
      score = scorePlayer;

}

function displayWinner() {
  if(scoreComputer == scorePlayer) {
    console.log(`It's a draw! The score is: ${scoreComputer}:${scorePlayer}`);
  } else if (scoreComputer > scorePlayer) {
    console.log(`Computer is the winner!`);
  } else {
    console.log(`You are the winner!`);
  }
}