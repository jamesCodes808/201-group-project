
const state = {
    leaderBoard: null,
};


let startTime;
let endTime;
let finishTimeInSeconds;
let userScore = 0;



const Player = function (name, time, score) {
    this.name = name,
        this.time = time,
        this.score = score
};


const Leaderboard = function (listOfPlayers) {
    this.listOfPlayers = listOfPlayers;
};

if (!state.leaderBoard) {
    let listOfPlayers = new Array();
    state.leaderBoard = new Leaderboard(listOfPlayers);
}


Leaderboard.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
};

Leaderboard.prototype.saveToLocalStorage = function () {
    localStorage.setItem('listOfPlayers', JSON.stringify(this.listOfPlayers));
};

function generateTestPlayers() {

    const players = JSON.parse(localStorage.getItem('listOfPlayers'))
    console.log(players)
    if (!players) {
        let ash = new Player('ash', 5, 2);
        let misty = new Player('misty', 6, 2);
        let brock = new Player('brock', 4, 1);
        state.leaderBoard.addPlayer(ash);
        state.leaderBoard.addPlayer(misty);
        state.leaderBoard.addPlayer(brock);
        state.leaderBoard.saveToLocalStorage();
        console.log('running')
    }
};

generateTestPlayers();


function startTimer() {
    startTime = new Date();
};

function endTimer() {
    endTime = new Date();
    let timeDiff = endTime - startTime;
  
    timeDiff /= 1000;


    finishTimeInSeconds = Math.round(timeDiff)
};



function handleSubmit(e) {
    e.preventDefault();
    let newPlayer = new Player(e.target.name.value, finishTimeInSeconds, userScore)
    state.leaderBoard.addPlayer(newPlayer);
    state.leaderBoard.saveToLocalStorage();
    playerFormContainerEl.classList.toggle('hidden');
    document.getElementById('try-again-container').classList.toggle('hidden');
}


const playerFormEl = document.getElementById('player-form');

if (playerFormEl) {
    playerFormEl.addEventListener('submit', handleSubmit);
}

function handleTryAgain(e) {
    e.preventDefault();
    document.getElementById('try-again-container').classList.toggle('hidden');
    document.getElementById('game-main-container').classList.toggle('hidden');
    startGame();
    document.addEventListener('keydown', handleKeyDown)
}


const tryAgainBtnEl = document.getElementById('try-again-btn');
if (tryAgainBtnEl) {
    tryAgainBtnEl.addEventListener('click', handleTryAgain)
}