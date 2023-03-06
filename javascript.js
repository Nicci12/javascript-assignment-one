function computerPlay() {
const choices = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * 3);
return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
playerSelection = playerSelection.toLowerCase()
if(playerSelection===computerSelection){
return "its a tie!"
} else if((playerSelection==="rock" && computerSelection==="scissors")||(playerSelection==="paper" &&
computerSelection==="rock")||(playerSelection==="scissors" && computerSelection==="paper")){
return `You Win! ${playerSelection} beats ${computerSelection}`
} else{
return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}