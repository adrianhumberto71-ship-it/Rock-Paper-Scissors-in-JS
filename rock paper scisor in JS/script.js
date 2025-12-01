let humanScore = 0;
let computerScore = 0


// Function to get the human player's choice

function getHumanChoice() {

    return prompt("Enter rock, paper, or scissors:").toLowerCase( ); 

}

console.log(getHumanChoice());


// Function to get the computer's choice


function  getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

console.log(getComputerChoice());




// Function to play a single round of Rock, Paper, Scissors

function playRound() {

    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(humanScore + 1);
    } else {
        computerScore++;
        console.log(computerScore + 1);        
    }
}


// function to update scores

function updateScores() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

}

updateScores();