"use strict";

const who_wins_who = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Rock',
}

function getPlayerChoice() {
    while (true) {
        let choice = prompt('choose rock paper or scissors:');
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        if (who_wins_who[choice] !== undefined) return choice;
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection === computerSelection) {
        console.log('You tied! re-playing the round');
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }
    if (who_wins_who[playerSelection] === computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
