function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function round(pc, cc) {
    let result;
    pc = pc.toLowerCase();
    if (pc === cc) result = "It's a tie";
    else {
        if (pc === "rock") {
            if (cc === "scissors") result = "You Win, Rock beats Scissors";
            if (cc === "paper") result = "You Lose, Paper beats Rock";
        } else if (pc === "scissors") {
            if (cc === "paper") result = "You Win, Scissors beats Paper";
            if (cc === "rock") result = "You Lose, Rock beats Scissors";
        } else if (pc === "paper") {
            if (cc === "scissors") result = "You Lose, Scissors beats Paper";
            if (cc === "rock") result = "You Win, Paper beats Rock";
        } else result = "error";
    }
    return result;
}
console.log(round(prompt("Rock, Paper, Scissors, Your choice"), getComputerChoice()));