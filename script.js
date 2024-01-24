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
