"use strict";

const panelSelection = document.querySelector('.selection-panel');
const roundWinner = document.querySelector('.round-winner');
const scorePanel = document.querySelector('.score');
const playerWins = document.querySelector('.player-wins');
const computerWins = document.querySelector('.computer-wins');
const playAgain = document.querySelector('.play-again');

const whoWinsWho = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper',
}

const emojiToString = {
    '✊🏻': 'Rock',
    '✋🏻': 'Paper',
    '✌🏻': 'Scissors',
}

const scores = {
    player: 0,
    computer: 0,
}

let  stopGame = false;


panelSelection.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        playRound(emojiToString[e.target.innerText], getComputerChoice());
    }
})

const updateWinner = (result, selection, color="black") => {
    if (stopGame) return;
    roundWinner.innerText = result ? `¡You ${result}! ${selection} beats ${whoWinsWho[selection]}`
                                   : "¡You tied!";
    roundWinner.style.color = color;
}

const updateScore = () => {
    if (stopGame) return;
    playerWins.innerText = `Player: ${scores.player}`;
    computerWins.innerText = `Computer: ${scores.computer}`;
}

const checkWinnerGame = () => {
    if (stopGame) return;
    if (!(scores.player === 5 || scores.computer === 5)) return;
    if (scores.player === 5) {
        scorePanel.classList.add('winner')
        roundWinner.innerText = "you won the game";
    } else if (scores.computer === 5) {
        scorePanel.classList.add('loser');
        roundWinner.innerText = "You lose the game";
    }
    stopGame = true;
}

playAgain.addEventListener('click', () => {
    stopGame = false;
    scores.player = 0;
    scores.computer = 0;
    updateScore();
    roundWinner.innerText = 'press one of the buttons to play';
    roundWinner.style.color = 'black';
    scorePanel.classList.remove("winner");
    scorePanel.classList.remove("loser");
    scorePanel.classList.add("base");
})

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        updateWinner(null);
    } else if (whoWinsWho[playerChoice] === computerChoice) {
        updateWinner('win', playerChoice, 'darkgreen');
        scores.player ++;
    } else {
        updateWinner('lose', computerChoice, 'darkred');
        scores.computer ++;
    }
    updateScore();
    checkWinnerGame();
}


