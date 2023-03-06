const body = document.querySelector('body');
const header = document.querySelector('h1');
const div = document.querySelector('#game-descript');
let winner_text = '';
const winner_div = document.createElement('div');

const playerCard = document.querySelector('#player-card');
const cpuCard = document.querySelector('#cpu-card');


let selection = ['rock', 'paper', 'scissors'];
let cpuPoints = document.querySelector('#cpu-pnts');
let myPoints = document.querySelector('#player-pnts');

//score of player&cpu A N D round tracker
let player_points = 0;
let cpu_points = 0;

const images = document.querySelectorAll('img');
const player_img = document.getElementById('player');
const cpu_img = document.getElementById('computer');
const img = document.createElement('img');
img.setAttribute('class', 'selected');
const img2 = document.createElement('img');
img2.setAttribute('class', 'selected');
function getImage(choice1, choice2) {
    images.forEach((image) => {
        if (image.id == `${choice1}_img` && image.id == `${choice2}_img`) {
            img.src = `./images/${choice1}-select.png`;
            img2.src = `./images/${choice2}-select.png`;
        }else if (image.id == `${choice1}_img`) {
            img.src = `./images/${choice1}-select.png`;
        } else if (image.id == `${choice2}_img`) {
            img2.src = `./images/${choice2}-select.png`;
        }
    });
}
// game of rock, paper, scissors

function play(player, cpu) {
    if(body.contains(header)) {
        body.removeChild(header);
    }

    getImage(player, cpu);

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
        player_img.appendChild(img);
        cpu_img.appendChild(img2);
    });
});