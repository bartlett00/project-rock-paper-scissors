function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'paper';
    } else if (randomNum == 3) {
        return 'scissors';
    }
};

//console.log(getComputerChoice());
let player;
let winOrLose = 'tie';

function playRound(playerSelection, computerSelection) {
   let playerChoice = playerSelection.toLowerCase();

// algo. that determines who wins 
    console.log(`the player chooses ${playerSelection}!`);
    console.log(`the computer chooses ${computerSelection}!`);

    if (playerChoice == computerSelection) {
        winOrLose = 'tie';
    } else if (playerChoice == 'rock') {
        if(computerSelection == 'paper') {
            winOrLose = 'lose';
        } else {
            winOrLose = 'win';
        }
    } else if (playerChoice == 'paper') {
        if (computerSelection == 'rock') {
            winOrLose = 'win';
        } else {
            winOrLose = 'lose';
        }
    } else if (playerChoice == 'scissors') {
        if (computerSelection == 'paper') {
            winOrLose = 'win';
        } else {
            winOrLose = 'lose';
        }   
   }

// Checks if player wins or loses and returns appropriate message

   if (winOrLose == 'win') {
        return `You win! ${playerChoice} beats ${computerSelection}`;        
   } else if (winOrLose == 'lose') {
        return `You lose! ${computerSelection} beats ${playerChoice}`;
   } else if (winOrLose == 'tie') {
        return `It is a tie!`;
   }
};

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for(i = 0; i < 5; i++) {
        player = prompt('rock, paper, or scissors?', 'rock');
        console.log(playRound(player, getComputerChoice()));
        if (winOrLose == 'win') {
            playerScore++;
        } else if(winOrLose == 'lose') {
            computerScore++;
        }
    }
 
    console.log(`your score was ${playerScore}`);
    console.log(`the computer scored ${computerScore}`);
    if (playerScore > computerScore) {
        return `You won! congrats on winning ${playerScore} rounds!`;   
    } else {
        return `Sorry... looks like you lost. you won ${playerScore} round(s) and the computer won ${computerScore} rounds`;
    }
};

console.log(playGame());
