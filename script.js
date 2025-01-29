function getComputerChoice() {
    let n = Math.floor(Math.random() * 3 + 1);

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
    let choice = prompt("Rock, Paper or Scissors. What do you choose?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound (computerChoice, humanChoice) { 

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore ++;
        return "You win! Rock beats Scissors.";
    }

    else if ((humanChoice == "Rock" && computerChoice == "Paper")) {
        computerScore ++;
        return "You lose! Paper beats Rock.";   
    }

    else if ((humanChoice == "Paper" && computerChoice == "Rock")) {
        humanScore ++;
        return "You win! Paper beats Rock.";   
    }

    else if ((humanChoice == "Paper" && computerChoice == "Scissors")) {
        computerScore ++;
        return "You lose! Scissors beats Paper.";   
    }  

    else if ((humanChoice == "Scissors" && computerChoice == "Paper")) {
        humanScore ++;
        return "You win! Scissors beats Paper.";   
    }
    
    else if ((humanChoice == "Scissors" && computerChoice == "Rock")) {
        computerScore ++;
        return "You lose! Rock beats Scissors.";   
    }  

    else {
        return "It's a draw! Nobody scores."
    }
}

let computerScore = 0;
let humanScore = 0;

let pcChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(pcChoice)

console.log(humanChoice)

console.log(playRound (pcChoice, humanChoice))

console.log(computerScore)

console.log(humanScore)
