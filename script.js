// querySelected Elements
const body = document.querySelector('body');
const header = document.querySelector('h1');
const para = document.querySelector('p');
const div = document.querySelector('#game-descript');
const playerCard = document.querySelector('#player-card');
const cpuCard = document.querySelector('#cpu-card');
let cpuPoints = document.querySelector('#cpu-pnts');
let myPoints = document.querySelector('#player-pnts');
const player_img = document.getElementById('player');
const cpu_img = document.getElementById('computer');

// createdElements
const winner_div = document.createElement('div');
const img = document.createElement('img');
img.setAttribute('class', 'selected');
const img2 = document.createElement('img');
img2.setAttribute('class', 'selected');


let winner_text = '';
let selection = ['rock', 'paper', 'scissors'];
//score of player&cpu tracker
let player_points = 0;
let cpu_points = 0;

// collection of lists
const images = document.querySelectorAll('img');



// eventListener for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id, getComputerChoice());
    });
}); 

// select computer's choice
function getComputerChoice() { 
    let i = Math.floor(Math.random() * selection.length);
    return selection[i];
}





    

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

//updates cpu's score, winning text, UI score, answer img
function cpuWins(player, cpu) {
    cpu_points++;
    winner_text = `${cpu}  beats  ${player}`;
    getAnswer('wrong');
    cpuPoints.textContent = `Computer: ${cpu_points}`;
    winner_div.textContent = winner_text;
    div.appendChild(winner_div);
    div.appendChild(answer);
    player_img.appendChild(img);
    cpu_img.appendChild(img2);
    
}

const answer = document.createElement('img');
answer.getAttribute('id', 'answer');
function getAnswer(source) {
    return answer.src = `./images/${source}.png`;
}

// displays results to UI
function getResults() {
    winner_div.textContent = winner_text;
    div.appendChild(winner_div);
    div.appendChild(answer);
    player_img.appendChild(img);
    cpu_img.appendChild(img2);
}

// updates player's score, winning text, UI score, answer img
function playerWins(player, cpu) {
    player_points++;
    winner_text = `${player}  beats  ${cpu}`;
    getAnswer('check');
    myPoints.textContent = `My Score: ${player_points}`;
    winner_div.textContent = winner_text;
    div.appendChild(winner_div);
    div.appendChild(answer);
    player_img.appendChild(img);
    cpu_img.appendChild(img2);
    
}


// resets Game 
function resetGame() {
    player_points = 0;
    cpu_points = 0;
    myPoints.textContent = `My Score: ${player_points}`;
    cpuPoints.textContent = `Computer: ${cpu_points}`;
    div.removeChild(answer);
    player_img.removeChild(img);
    cpu_img.removeChild(img2);
    div.removeChild(winner_div);
}


function play(player, cpu) {

    // S T E P 1 -> remove the header
        if(body.contains(header)) {
            body.removeChild(header);
        } 
    
    // S T E P 2 -> assigns correct image to player selection
        getImage(player, cpu);
    
    // S T E P 3 -> rps logic
        switch (player) {
            case 'rock':
                if (cpu == 'paper') {
                    cpuWins(player, cpu);
                    if (cpu_points == 5) {
                        alert("Sorry, you lose.");
                    }
                } else if (cpu == 'scissors') {
                    playerWins(player, cpu);
                    if (player_points == 5){
                        alert("Yay, you won!");
                    }
                } else {
                    winner_text = "It's a tie!";
                    getResults();
                    if (div.contains(answer)) {
                        div.removeChild(answer);
                    }
                }
                break;
    
            case 'paper':
                if (cpu == 'rock') {
                    playerWins(player, cpu);
                    if (player_points == 5){
                        alert("Yay, you won!");
                    }
                } else if (cpu == 'scissors') {
                    cpuWins(player, cpu);
                    if (cpu_points == 5) {
                        alert("Sorry, you lose.");
                    }
                } else {
                    winner_text = "It's a tie!";
                    getResults();
                    if (div.contains(answer)) {
                        div.removeChild(answer);
                    }
                }
                break;
                
            case 'scissors': 
                if (cpu == 'rock') {
                    cpuWins(player, cpu);
                    if (cpu_points == 5) {
                        alert("Sorry, you lose.");
                    }
                } else if (cpu == 'paper') {
                    playerWins(player, cpu);
                    if (player_points == 5){
                        alert("Yay, you won!");
                    }
                } else {
                    winner_text = "It's a tie!";
                    getResults();
                    if (div.contains(answer)) {
                        div.removeChild(answer);
                    }
                }
                break;
        }
    
    }