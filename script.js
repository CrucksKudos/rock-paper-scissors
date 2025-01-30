let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const n = Math.floor(Math.random() * 3 + 1);

    let choice = "Scissors";
    
    if (n == 1) {
        choice = "Rock";
    }
    else if (n == 2) {
        choice = "Paper";
    }

    return choice;
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors. What do you choose?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(computerChoice, humanChoice) { 

    let roundWinner = ""

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore ++;
        roundWinner = "You win! Rock beats Scissors.";
    }

    else if ((humanChoice == "Rock" && computerChoice == "Paper")) {
        computerScore ++;
        roundWinner = "You lose! Paper beats Rock.";   
    }

    else if ((humanChoice == "Paper" && computerChoice == "Rock")) {
        humanScore ++;
        roundWinner = "You win! Paper beats Rock.";   
    }

    else if ((humanChoice == "Paper" && computerChoice == "Scissors")) {
        computerScore ++;
        roundWinner = "You lose! Scissors beats Paper.";   
    }  

    else if ((humanChoice == "Scissors" && computerChoice == "Paper")) {
        humanScore ++;
        roundWinner = "You win! Scissors beats Paper.";   
    }
    
    else if ((humanChoice == "Scissors" && computerChoice == "Rock")) {
        computerScore ++;
        roundWinner = "You lose! Rock beats Scissors.";   
    }  

    else {
        roundWinner = "It's a draw! Nobody scores.";
    }

    return roundWinner;
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const results = document.createElement("div");
const scoreBoard = document.createElement("div");


document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(results);
document.body.appendChild(scoreBoard);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => {
    results.textContent = playRound (getComputerChoice(), "Rock")
    if (humanScore == 5) {
        scoreBoard.textContent = `You won the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scoreBoard.textContent = `You lost the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;       
    }
    else {
        scoreBoard.textContent = `Your score now is: ${humanScore}. The computer score is: ${computerScore}.`;
    }
})

paperButton.addEventListener("click", () => {
    results.textContent = playRound (getComputerChoice(), "Paper")
    if (humanScore == 5) {
        scoreBoard.textContent = `You won the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scoreBoard.textContent = `You lost the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;       
    }
    else {
        scoreBoard.textContent = `Your score now is: ${humanScore}. The computer score is: ${computerScore}.`;
    }
})

scissorsButton.addEventListener("click", () => {
    results.textContent = playRound (getComputerChoice(), "Scissors")
    if (humanScore == 5) {
        scoreBoard.textContent = `You won the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scoreBoard.textContent = `You lost the game! Your score was: ${humanScore}. The computer score was: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;       
    }
    else {
        scoreBoard.textContent = `Your score now is: ${humanScore}. The computer score is: ${computerScore}.`;
    }
})