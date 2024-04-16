function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'paper';
    } else if (randomNum == 3) {
        return 'scissors';
    }
}
console.log(getComputerChoice());

playRound(playerSelection, computerSelection) {
   let playerChoice = playerSelection.toLowerCase();
   let winOrLose = false;

// algo. that determines who wins 

   if (playerChoice == computerSelection) {
    return 'It is a tie!';
   } else if (playerChoice == 'rock') {
        if(computerSelection == 'paper') {
            winOrLose = false;
        } else {
            winOrLose = true;
        }
   } else if (playerChoice == 'paper') {
        if (computerSelection == 'rock') {
            winOrLose = true;
        } else {
            winOrLose = false;
        }
   } else if (playerChoice == 'scissors') {
        if (computerSelection == 'paper') {
            winOrLose = true;
        } else {
            winOrLose = false;
        }
   }

// Checks if player wins or looses and returns appropriate message

   if (winOrLose == true) {
        return `You win! ${playerChoice} beats ${computerSelection}`;        
   } else {
        return `You lose! ${computerSelection} beats ${playerChoice}`;
   }
}

