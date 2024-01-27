"use strict";

const who_wins_who = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper',
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

function game() {
    let player_wins = 0;
    let computer_wins = 0;
    for (let i = 0; i < 5; i++) {
        const winner = playRound(getPlayerChoice(), getComputerChoice());
        console.log(winner);
        if (winner.includes('win')) player_wins ++;
        else computer_wins ++;
    }
    if (player_wins > computer_wins) console.log(`The player has won the best of five games`);
    else console.log(`The computer has won the best of five games\n`);
    console.log(`Player wins: ${player_wins}\nComputer wins: ${computer_wins}`);
}

game();

