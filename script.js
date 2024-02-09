"use strict";

const who_wins_who = {
    '✊🏻': 'Scissors',
    '✋🏻': 'Rock',
    '✌🏻': 'Paper',
}

function getPlayerChoice() {
    while (true) {
        let choice = prompt('choose rock paper or scissors:');
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        if (choice in who_wins_who) return choice;
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    while (playerChoice === computerChoice) {
        console.log('You tied! re-playing the round');
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
    }
    if (who_wins_who[playerChoice] === computerChoice) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } 
    return `You lose! ${computerChoice} beats ${playerChoice}`;
}


