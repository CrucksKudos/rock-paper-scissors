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
        computerScore ++;
        humanScore ++;
        roundWinner = "It's a draw! Nobody scores.";
    }

    console.log (roundWinner);
}

function playGame() {

    for (i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You Won! Your score was ${humanScore} points. The computer scored ${computerScore} points.`)
    }

    else if (humanScore < computerScore) {
        console.log(`You Lost! Your score was ${humanScore} points. The computer scored ${computerScore} points.`)
    }

    else {
        console.log(`It's a draw! Your score was ${humanScore} points.`)
    }
}
  
let computerScore = 0;
let humanScore = 0;

playGame()
