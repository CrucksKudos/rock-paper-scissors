function getComputerChoice() {
    let n = Math.floor(Math.random() * 3 + 1);
    
    if (n == 1) {
        return 'Rock'
    }
    else if (n == 2) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors. What do you choose?');
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

