//score of player&cpu A N D round tracker
let round = 1;
let player_points = 0;
let cpu_points = 0;

// game of rock, paper, scissors

function play(player, cpu) {
    console.log(`Round ${round} `)
    if (player != 'rock' || 'paper' || 'scissors') {
        alert("Invalid Selection");
    } else {
        console.log("You Selected: " + player);
    }
    console.log("Computer's Choice: " + cpu)
    switch (player) {
        case 'rock':
            if (cpu == 'paper') {
                return cpu_points++;
            } 
            else if (cpu == 'scissors') {
                return player_points++;
            } else {
                return "Tie!";
            }

        case 'paper':
            if (cpu == 'rock') {
                return player_points++;
            } else if (cpu == 'scissors') {
                return cpu_points++;
            } else {
                return "Tie!";
            }
            
        case 'scissors': 
            if (cpu == 'rock') {
                return cpu_points++;
            } else if (cpu == 'paper') {
                return player_points++;
            } else {
                return "Tie!";
            }
    }
}

// select computer's choice
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * selection.length);
    return selection[i];
}

// plays five rounds and prints winner of all rounds
function game() {
    for (let i = 0; i < 5; i++) {
        play((prompt(`Round ${round}: Which would you like to choose? (rock, paper, scissors) `)).toLowerCase(), getComputerChoice());
        round++;
    }
    if (player_points > cpu_points) {
        console.log("You Win!");
    } else if (player_points < cpu_points){
        console.log("Computer Wins!")
    } else {
        console.log("It's a Tie!")
    }
}

game();
