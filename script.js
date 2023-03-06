const body = document.querySelector('body');
const header = document.querySelector('h1');
const div = document.querySelector('#game-descript');
let winner_text = '';
const winner_div = document.createElement('div');
const lBox = document.querySelector('#lBox');
const rBox = document.querySelector('#rBox');
const lBox_text = document.createElement('div');
const rBox_text = document.createElement('div');

let selection = ['rock', 'paper', 'scissors'];
let cpuPoints = document.querySelector('#cpu-pnts');
let myPoints = document.querySelector('#player-pnts');

//score of player&cpu A N D round tracker
let player_points = 0;
let cpu_points = 0;


// game of rock, paper, scissors

function play(player, cpu) {
    if(body.contains(header)) {
        body.removeChild(header);
    }
    
    lBox_text.textContent = "You Selected: " + player;
    
    rBox_text.textContent = "Computer's Choice: " + cpu;
    switch (player) {
        case 'rock':
            if (cpu == 'paper') {
                cpu_points++;
                winner_text = `${cpu}  beats  ${player}`;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } 
            else if (cpu == 'scissors') {
                player_points++;
                winner_text = `${player}  beats  ${cpu}`;
                return myPoints.textContent = `My Score: ${player_points}`;
            } else {
                winner_text = "It's a tie!";
                return console.log("Tie!");
            }

        case 'paper':
            if (cpu == 'rock') {
                player_points++;
                winner_text = `${player}  beats  ${cpu}`;
                return myPoints.textContent = `My Score: ${player_points}`;
            } else if (cpu == 'scissors') {
                cpu_points++;
                winner_text = `${cpu}  beats  ${player}`;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } else {
                winner_text = "It's a tie!";
                return "Tie!";
            }
            
        case 'scissors': 
            if (cpu == 'rock') {
                cpu_points++;
                winner_text = `${cpu}  beats  ${player}`;
                return cpuPoints.textContent = `Computer: ${cpu_points}`;
            } else if (cpu == 'paper') {
                player_points++;
                winner_text = `${player}  beats  ${cpu}`;
                return myPoints.textContent = `My Score: ${player_points}`;
            } else {
                winner_text = "It's a tie";
                return "Tie!";
            }
    }

}

// select computer's choice
function getComputerChoice() {
    
    let i = Math.floor(Math.random() * selection.length);
    return selection[i];
}



// eventListener for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id, getComputerChoice());
        winner_div.textContent = winner_text;
        div.appendChild(winner_div);
        lBox.appendChild(lBox_text);
        rBox.appendChild(rBox_text);
    });
});
