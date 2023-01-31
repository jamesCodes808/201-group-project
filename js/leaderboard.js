'use strict'
// leaderboard functionality and storage

// global variables 

// element variables 
const leaderboardTbodyEl = document.getElementById('leaderboard-tbody');

// variables for timer
let startTime;
let endTime;
let finishTimeInSeconds;
let userScore = 0;

const Player = function (name) {
    this.name = name,
        this.time = finishTimeInSeconds,
        this.score = userScore
}

// renders leaderboard on page 
function renderLeaderBoard() {
    loadLeaderBoard();
}

// will load leaderboard saved from home page into the leaderboard page
function loadLeaderBoard() {
    const players = JSON.parse(localStorage.getItem('players'))
    state.leaderBoard = new LeaderBoard(players);
};



// functions for timer, will get called when start button is clicked, and when quiz is over
function startTimer() {
    startTime = new Date();
}

function endTimer() {
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // divide to change ms to seconds 
    timeDiff /= 1000;

    // gets the seconds
    finishTimeInSeconds = Math.round(timeDiff)
}

