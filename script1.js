// variable for players' selection
let player;
let cpu; 

const player_img = document.createElement('img');
const playerCard = document.querySelector('#player');
const buttons = document.querySelectorAll('button');

// listens for player selection, add image to player card
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.firstElementChild.id;
        player_img.src = `./images/${player}-select.png`;
        player_img.setAttribute('class', 'selected');   
        playRound(player, getComputerChoice());
        setTimeout(endGame, 2000);
    });
}); 



const cpu_img = document.createElement('img');
const cpuCard = document.querySelector('#computer');
// random selection for cpu and adds image to cpu card
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * selection.length);
    cpu = selection[i];
    cpu_img.src =  `./images/${cpu}-select.png`;
    cpu_img.setAttribute('class', 'selected');
    return cpu;
}


// plays one round of rps
function playRound(player, cpu) {
    playerCard.appendChild(player_img); 
    cpuCard.appendChild(cpu_img);
    switch (player) {
        case 'rock':
            if (cpu == 'paper') {
                return cpuWins();
            } else if (cpu == 'scissors') {
                return playerWins();
            } else {
                return getTie();
            }
            
        case 'paper':
            if (cpu == 'rock') {
               return playerWins();
            } else if (cpu == 'scissors') {
               return cpuWins();
            } else {
               return getTie();
            }
            
        case 'scissors':
            if (cpu == 'rock') {
               return cpuWins();
            } else if (cpu == 'paper') {
               return playerWins();
            } else {
               return getTie();
            }
            
    }
     
}


//document element references
let point_text;
const point_div = document.createElement('div');
const point_img = document.createElement('img');
const point = document.querySelector('#game-descript');

// updates cpu score, ui score and point div
const ui_cpu_score = document.getElementById('ui-cpu-pnts');
let cpu_score = 0;
function cpuWins() {
    point_text = `${cpu} beats ${player}`;
    point_div.textContent = point_text;
    point.appendChild(point_div);
    point_img.src = './images/wrong.png';
    point.appendChild(point_img);
    cpu_score++;
    ui_cpu_score.textContent = `Computer: ${cpu_score}`;
    
}

// updates player score, ui score and point div
const ui_player_score = document.getElementById('ui-player-pnts');
let player_score = 0;
function playerWins() {
    point_text = `${player} beats ${cpu}`;
    point_div.textContent = point_text;
    point.appendChild(point_div);
    point_img.src = './images/check.png';
    point.appendChild(point_img);
    player_score++;
    ui_player_score.textContent = `My Score: ${player_score}`;
}

// prints tie message to ui
function getTie() {
    point_text = "It's a tie!";
    point_div.textContent = point_text;
    point.appendChild(point_div);
    if (point.contains(point_img)) {
        point.removeChild(point_img);
    }
}

//ends game 
function endGame(){
    if (ui_cpu_score.textContent == "Computer: 5"){
        alert("Sorry, you lose.");
        resetGame();
    }  else if (ui_player_score.textContent == "My Score: 5") {
        alert("Yay, you won!");
        resetGame();
    }
}


// resets game 
function resetGame() {
    player_score = 0;
    cpu_score = 0;
    ui_player_score.textContent = `Computer: ${player_score}`;
    ui_cpu_score.textContent = `Computer: ${cpu_score}`;
    point.removeChild(point_img);
    point.removeChild(point_div);
    playerCard.removeChild(player_img);
    cpuCard.removeChild(cpu_img);
}