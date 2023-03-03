let cpuPoints = document.querySelector('#cpu-pnts');
let myPoints = document.querySelector('#player-pnts');

//score of player&cpu A N D round tracker
let player_points = 0;
let cpu_points = 0;

// game of rock, paper, scissors

function play(player, cpu) {
    console.log("You Selected: " + player);
    console.log("Computer's Choice: " + cpu)
    switch (player) {
        case 'rock':
            if (cpu == 'paper') {
                cpu_points++;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } 
            else if (cpu == 'scissors') {
                player_points++;
                return myPoints.textContent = `My Score: ${player_points}`;
            } else {
                return console.log("Tie!");
            }

        case 'paper':
            if (cpu == 'rock') {
                player_points++;
                return myPoints.textContent = `My Score: ${player_points}`;
            } else if (cpu == 'scissors') {
                cpu_points++;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } else {
                return "Tie!";
            }
            
        case 'scissors': 
            if (cpu == 'rock') {
                cpu_points++;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } else if (cpu == 'paper') {
                player_points++;
                return myPoints.textContent = `My Score: ${player_points}`;
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

// eventListener for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id, getComputerChoice());
    });
});

