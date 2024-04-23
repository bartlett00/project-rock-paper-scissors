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

let player;
let winOrLose = 'tie';
let scorePlayer = 0;
let scoreComputer = 0;
let scoreDisplay = document.querySelector('#score'); 
scoreDisplay.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;
let display = document.querySelector('#display');

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

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
    scoreDisplay.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;
     if (winOrLose == 'win') {
            scorePlayer++;
            if (scorePlayer == 5) {
                display.textContent = `The final score is: ${scorePlayer} - ${scoreComputer}`;
                scoreComputer = 0;
                scorePlayer = 0;
            } else {
                display.textContent = `
                Player choice: ${playerChoice}! 
                Computer choice: ${computerSelection}!
                You win!`;   
            }    
    } else if (winOrLose == 'lose') {
            scoreComputer++;
            if (scoreComputer == 5) {
                display.textContent = `The final score is: ${scorePlayer} - ${scoreComputer}`;
                scoreComputer = 0;
                scorePlayer = 0;   
            } else {
                display.textContent = `
                Player choice: ${playerChoice}!
                Computer choice: ${computerSelection}!
                You lose...`;  
            }
    } else if (winOrLose == 'tie') {
            display.textContent = `
            Player choice: ${playerChoice}!
            Computer choice: ${computerSelection}!
            It's a tie!`;
    }
    scoreDisplay.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;

    console.log(scoreComputer);
    console.log(scorePlayer);
};


const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id, getComputerChoice());
    });
});




/*
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
*/

