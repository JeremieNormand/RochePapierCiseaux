const choicesNames = {
    rock: 'Roche',
    paper: 'Papier',
    scissors: 'Ciseaux'
};

const choicesClasses = {
    rock: 'fa-sharp fa-solid fa-hand-back-fist',
    paper: 'fa-sharp fa-solid fa-hand',
    scissors: 'fa-sharp fa-solid fa-hand-scissors'
};

const playerChoiceName = document.querySelector('#playerChoiceName');
const playerChoiceIcon = document.querySelector('#playerChoiceIcon');

function onClickRock() {
    playerChoiceName.textContent = choicesNames.rock;
    playerChoiceIcon.className = choicesClasses.rock;
}

function onClickPaper() {
    playerChoiceName.textContent = choicesNames.paper;
    playerChoiceIcon.className = choicesClasses.paper;
}

function onClickScissors() {
    playerChoiceName.textContent = choicesNames.scissors;
    playerChoiceIcon.className = choicesClasses.scissors;
}

function onClickPlay() {
    selectOpponentChoice();
    var winner = determineWinner();
    displayResults(winner);
}

const opponentChoiceName = document.querySelector('#opponentChoiceName');
const opponentChoiceIcon = document.querySelector('#opponentChoiceIcon');

function selectOpponentChoice() {
    var choice = Math.floor(Math.random() * 4);

    if (choice == 0) {
        opponentChoiceName.textContent = choicesNames.rock;
        opponentChoiceIcon.className = choicesClasses.rock;
    }
    else if (choice == 1) {
        opponentChoiceName.textContent = choicesNames.paper;
        opponentChoiceIcon.className = choicesClasses.paper;
    }
    else {
        opponentChoiceName.textContent = choicesNames.scissors;
        opponentChoiceIcon.className = choicesClasses.scissors;
    }
}

function determineWinner() {
    if (playerChoiceName.textContent == opponentChoiceName.textContent) {
        return 'none';
    }
    else if (playerChoiceName.textContent == choicesNames.rock && opponentChoiceName.textContent == choicesNames.paper) {
        return 'opponent';
    }
    else if (playerChoiceName.textContent == choicesNames.paper && opponentChoiceName.textContent == choicesNames.scissors) {
        return 'opponent';
    }
    else if (playerChoiceName.textContent == choicesNames.scissors && opponentChoiceName.textContent == choicesNames.rock) {
        return 'opponent';
    }
    else {
        return 'player';
    }
}

function displayResults(winner) {
    displayIcon(winner);
    displayScores(winner);
}

const resultIcon = document.querySelector('#result');

function displayIcon(winner) {
    if (winner == 'none') {
        resultIcon.className = 'fa-sharp fa-solid fa-equals';
    }
    else if (winner == 'opponent') {
        resultIcon.className = 'fa-sharp fa-solid fa-arrow-right';
    }
    else {
        resultIcon.className = 'fa-sharp fa-solid fa-arrow-left';
    }
}

var playerScore = 0;
var opponentScore = 0;

const playerScoreSpan = document.querySelector('#playerScore');
const opponentScoreSpan = document.querySelector('#opponentScore');

function displayScores(winner) {
    if (winner == 'opponent') {
        opponentScore++;
        opponentScoreSpan.textContent = opponentScore;
    }
    if (winner == 'player') {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    }
}