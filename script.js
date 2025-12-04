let humanScore = 0;
let computerScore = 0


// Function to get the human player's choice

const btn1 = document.querySelector('#rock');
if (!btn1) {
  console.error('Button #rock not found — check your HTML or script placement.');
} else {
  btn1.addEventListener('click', () => {
    const humanChoice = 'rock';                 // button represents the human picking rock
    const computerChoice = getComputerChoice(); // generate computer choice
    console.log('Human choice:', humanChoice);
    console.log('Computer choice:', computerChoice);
    const result = determineWinner(humanChoice, computerChoice);
    console.log('Round result:', result);
    console.log(`Scores — Human: ${humanScore}, Computer: ${computerScore}`);
  });
}

// Function to get the button 2 "paper"

const btn2 = document.querySelector('#paper');
if (!btn2) {
  console.error('Button #paper not found — check your HTML or script placement.');
} else {
  btn2.addEventListener('click', () => {
    const humanChoice = 'paper';                 // button represents the human picking rock
    const computerChoice = getComputerChoice(); // generate computer choice
    console.log('Human choice:', humanChoice);
    console.log('Computer choice:', computerChoice);
    const result = determineWinner(humanChoice, computerChoice);
    console.log('Round result:', result);
    console.log(`Scores — Human: ${humanScore}, Computer: ${computerScore}`);
  });
}

// function to get the button 3 "scissor"

const btn3 = document.querySelector('#scissor');
if (!btn3) {
  console.error('Button #scissor not found — check your HTML or script placement.');
} else {
  btn3.addEventListener('click', () => {
    const humanChoice = 'scissor';                 // button represents the human picking rock
    const computerChoice = getComputerChoice(); // generate computer choice
    console.log('Human choice:', humanChoice);
    console.log('Computer choice:', computerChoice);
    const result = determineWinner(humanChoice, computerChoice);
    console.log('Round result:', result);
    console.log(`Scores — Human: ${humanScore}, Computer: ${computerScore}`);
  });
}



// Function to get the computer's choice


 function  getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
} 

// console.log(getComputerChoice());


// Function to play a single round of Rock, Paper, Scissors

 function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  // human wins cases
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}


// function to update scores

/*
function updateScores() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

}

updateScores(); */