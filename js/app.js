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
    // this.rank,
    this.name = name,
        this.time = time,
        this.score = score
};


// Leaderboard Constructor and creating leaderboard for state
const Leaderboard = function (listOfPlayers) {
    this.listOfPlayers = listOfPlayers;
};

state.leaderBoard = new Leaderboard([]);

// LeaderBoard Prototype Functions
Leaderboard.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
};

Leaderboard.prototype.saveToLocalStorage = function () {
    localStorage.setItem('listOfPlayers', JSON.stringify(this.listOfPlayers));
};

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
}


//submit event listener for player form
const playerFormEl = document.getElementById('player-form');
if (playerFormEl) {
    playerFormEl.addEventListener('submit', handleSubmit);
}

function generateTestPlayers() {
    let ash = new Player('ash', 5, 10);
    let misty = new Player('misty', 6, 8);
    let brock = new Player('brock', 4, 9);
    state.leaderBoard.addPlayer(ash);
    state.leaderBoard.addPlayer(misty);
    state.leaderBoard.addPlayer(brock);
    state.leaderBoard.saveToLocalStorage()
}
generateTestPlayers();

