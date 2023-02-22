
// storing player's selection in variable
const playerSelection = (prompt('Which would you like to choose: rock, paper, scissors?')).toLowerCase();
console.log("You Selected: " + playerSelection);

// computer options: rock, paper, or scissors
const selection = ['rock', 'paper', 'scissors'];

// select computer's choice
function getComputerChoice() {
    let i = Math.floor(Math.random() * selection.length);
    console.log("Computer's Choice: " + selection[i]);
    return selection[i];
}

// store computer's choice in variable
const computerSelection = getComputerChoice();






// test for valid selection until valid selection made
/* if (playerSelection != 'rock' || 'paper' || 'scissors') {
    console.log("Invalid Selection");
    playerSelection = (prompt('Which would you like to choose: rock, paper, scissors?')).toLowerCase();
} */




// game of rock, paper, scissors

function play(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                console.log('You Lose! Paper beats Rock');
            } 
            else if (computerSelection == 'scissors') {
                console.log('You Win! Rock beats Scissors');
            } else {
                console.log("It's a tie!");
            }
            break;

        case 'paper':
            if (computerSelection == 'rock') {
                console.log('You Win! Paper beats Rock');
            } else if (computerSelection == 'scissors') {
                console.log('You Lose! Scissors beats Paper');
            } else {
                console.log("It's a tie!");
            }
            break;

        case 'scissors': 
            if (computerSelection == 'rock') {
                console.log('You Lose! Rock beats Scissors ');
            } else if (computerSelection == 'paper') {
                console.log('You Win! Scissors beats Paper');
            } else {
                console.log("It's a tie!");
            }
            break;

    }
}

console.log(play(playerSelection, computerSelection));
