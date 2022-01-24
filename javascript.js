const playerSelection = "RocK";
const computerSelection = computerPlay ();

// Function for computer to randomly select - rock, paper, scissors
function computerPlay () {
    const number = Math.floor(Math.random()*4)
    if (number === 1) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log (playerSelection, computerSelection)

//Function that plays a single round of Rock, Paper, Scissors
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase ();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === computerSelection) {
        return "Tie Game"
    } else {
        computerSelection = computerSelection.charAt(0).toUpperCase () + computerSelection.slice(1)
        playerSelection = playerSelection.charAt(0).toUpperCase () + playerSelection.slice(1)
        return "You Lose! " + computerSelection + " beats " + playerSelection 
    }
}

console.log (playRound(playerSelection, computerSelection))