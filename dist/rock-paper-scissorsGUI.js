
import {computerPlay} from './rock-paper-scissors.js';


function printTie() {
    playerScoreGUI.textContent = `You: ${playerScore} (Tie)`;
    compScoreGUI.textContent = `Computer: ${compScore} (Tie)`;
}

// Updates the images on each screen after a button click.
function updateScreens(playerImage, compImage) {
    playerScreenGUI.innerHTML = playerImage;
    compScreenGUI.innerHTML = compImage;
    compScoreGUI.textContent = `Computer: ${compScore}`;
    playerScoreGUI.textContent = `You: ${playerScore}`;
}

// Plays a single round of rock paper scissors following a button click.
function playRound(playerSelection, compSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    
    if (playerSelectionLower === 'rock' && compSelection === 'paper') {
        compScore++;
        updateScreens(rockImage, paperImage);
    }
    
    else if (playerSelectionLower === 'rock' && compSelection == 'scissors') {
        playerScore++;
        updateScreens(rockImage, scissorsImage);
    }

    else if (playerSelectionLower === 'paper' && compSelection === 'rock') {
        playerScore++;
        updateScreens(paperImage, rockImage);
    }

    else if (playerSelectionLower === 'scissors' && compSelection === 'rock') {
        compScore++;
        updateScreens(scissorsImage, rockImage);
    }

    else if (playerSelectionLower === 'paper' && compSelection === 'scissors') {
        compScore++;
        updateScreens(paperImage, scissorsImage);
    }

    else if (playerSelectionLower === 'scissors' && compSelection === 'paper') {
        playerScore++;
        updateScreens(scissorsImage, paperImage);
    }

    else {

        if(playerSelectionLower === 'scissors' && compSelection === 'scissors') {
            updateScreens(scissorsImage, scissorsImage);
        }

        else if (playerSelectionLower === 'rock' && compSelection === 'rock') {
            updateScreens(rockImage, rockImage);
        }

        else {
            updateScreens(paperImage, paperImage);
        }
        printTie();
    }
    roundCount++;
    if (roundCount <= 5) {
        roundCountGUI.textContent = `Round: ${roundCount}`;
    }
}

// updates the screen to reflect the game state
function progressGame() {
    if (roundCount <= 5) {
        const playerSelection = this.id;
        const compSelection = computerPlay();
        playRound(playerSelection, compSelection);
    }

    if (roundCount > 5) {
        if (playerScore > compScore) optionGUI.textContent = 'You Win!';
        else if (playerScore < compScore) optionGUI.textContent = 'You Loose!';
        else optionGUI.textContent = 'Tied Game!';
        roundCountGUI.textContent = 'Game Over!';
    }
}

const playerScoreGUI = document.querySelector('#score-container-user');
const compScoreGUI = document.querySelector('#score-container-comp');
const playerScreenGUI = document.querySelector('#image-container-user');
const compScreenGUI = document.querySelector('#image-container-comp');
const roundCountGUI = document.querySelector('#round-count');
const optionGUI = document.querySelector('p');

let roundCount = 1;
let compScore = 0;
let playerScore = 0;

const rockImage = '<img src="https://img.icons8.com/office/100/000000/rock.png"/>';
const paperImage = '<img src="https://img.icons8.com/office/100/000000/paper.png"/>';
const scissorsImage = '<img src="https://img.icons8.com/ultraviolet/100/000000/scissors.png"/>';

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', progressGame);
});


