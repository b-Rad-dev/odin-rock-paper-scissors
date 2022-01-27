
let playerScore = 0;
let computerScore = 0;


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

//Function that plays a single round of Rock, Paper, Scissors
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === computerSelection) {
        return "Tie Game"
    } else {
        computerScore++
        computerSelection = computerSelection.charAt(0).toUpperCase () + computerSelection.slice(1)
        playerSelection = playerSelection.charAt(0).toUpperCase () + playerSelection.slice(1)
        return "You Lose! " + computerSelection + " beats " + playerSelection 
    }
}



//Loop to play 5 Rounds
for (let i=0; i<5; i++) {
    let playerSelection = prompt("Pick Rock, Paper or Scissors")
    playerSelection = playerSelection.toLowerCase ();
    const computerSelection = computerPlay ();
    console.log (playerSelection, computerSelection)
    console.log (playRound(playerSelection, computerSelection))
    console.log (playerScore, computerScore)
}

//Function to determine the Winner
function winner (playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "WINNER!"
    } else if (playerScore < computerScore) {
        return "COMPUTER WINS"
    } else {
        return "TIE GAME"
    }
}

console.log (winner(playerScore, computerScore))

    