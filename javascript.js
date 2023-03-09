function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "its a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, paper, or scissors?");
      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(roundResult);
  
      if (roundResult.includes("Win")) {
        playerScore++;
      } else if (roundResult.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Player wins!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  }
game()