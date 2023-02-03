// global variables 
const state = {
    leaderBoard: null,
};

// variables for timer
let startTime;
let endTime;
let finishTimeInSeconds;
let userScore = 0;


// Prompt to create a player and fill in values after the game is complete
const Player = function (name, time, score) {
    this.name = name,
        this.time = time,
        this.score = score
};


// Leaderboard Constructor and creating leaderboard for state
const Leaderboard = function (listOfPlayers) {
    this.listOfPlayers = listOfPlayers;
};

if (!state.leaderBoard) {
    let listOfPlayers = new Array();
    state.leaderBoard = new Leaderboard(listOfPlayers);
}

// LeaderBoard Prototype Functions
Leaderboard.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
};

Leaderboard.prototype.saveToLocalStorage = function () {
    localStorage.setItem('listOfPlayers', JSON.stringify(this.listOfPlayers));
};

// initialize test players, clear players to add new players to leaderboard
function generateTestPlayers() {

    const players = JSON.parse(localStorage.getItem('listOfPlayers'))
    console.log(players)
    if (!players) {
        let ash = new Player('ash', 5, 10);
        let misty = new Player('misty', 6, 8);
        let brock = new Player('brock', 4, 9);
        state.leaderBoard.addPlayer(ash);
        state.leaderBoard.addPlayer(misty);
        state.leaderBoard.addPlayer(brock);
        state.leaderBoard.saveToLocalStorage();
        console.log('running')
    }
};

generateTestPlayers();


// functions for timer, will get called when start button is clicked, and when quiz is over
function startTimer() {
    startTime = new Date();
};

function endTimer() {
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // divide to change ms to seconds 
    timeDiff /= 1000;

    // gets the seconds
    finishTimeInSeconds = Math.round(timeDiff)
};



// submission for form to get player info
function handleSubmit(e) {
    e.preventDefault();
    let newPlayer = new Player(e.target.name.value, finishTimeInSeconds, userScore)
    state.leaderBoard.addPlayer(newPlayer);
    state.leaderBoard.saveToLocalStorage();
    playerFormContainerEl.classList.toggle('hidden');
    document.getElementById('try-again-container').classList.toggle('hidden');

}


//submit event listener for player form
const playerFormEl = document.getElementById('player-form');

if (playerFormEl) {
    playerFormEl.addEventListener('submit', handleSubmit);
}

// function for try again button click
function handleTryAgain(e) {
    e.preventDefault();
    startGame();
    document.getElementById('try-again-container').classList.toggle('hidden');
}

// event listener for try again button
const tryAgainBtnEl = document.getElementById('try-again-btn');
if (tryAgainBtnEl) {
    tryAgainBtnEl.addEventListener('click', handleTryAgain)
}