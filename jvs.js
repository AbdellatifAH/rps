function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * 3);

    return choices[index];
}
