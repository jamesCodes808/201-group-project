'use strict'
// leaderboard functionality and storage

// global variables 

// HTML element variables 
const leaderboardTbodyEl = document.getElementById('leaderboard-tbody');

// will load leaderboard saved from home page into the leaderboard page
function loadLeaderBoard() {
    const players = JSON.parse(localStorage.getItem('listOfPlayers'))
    console.log(players)
    state.leaderBoard = new Leaderboard(players);
};

// renders leaderboard on page 
function renderLeaderBoard() {
    loadLeaderBoard();
    clearLeaderBoard();
    showLeaderBoard();
};



// will clear leader board data before reloading new scores. 
function clearLeaderBoard() {
    let trEl = leaderboardTbodyEl.querySelectorAll('tr');
    trEl.innerText = '';
}

function showLeaderBoard() {
    for (let player of state.leaderBoard.listOfPlayers) {
        let trEl = document.createElement('tr');
        let tdRankEl = document.createElement('td');
        let tdNameEl = document.createElement('td');
        let tdTimeEl = document.createElement('td');
        let tdScoreEl = document.createElement('td');

        tdNameEl.innerText = player.name;
        tdTimeEl.innerText = player.time;
        tdScoreEl.innerText = player.score;

        trEl.appendChild(tdRankEl);
        trEl.appendChild(tdNameEl);
        trEl.appendChild(tdTimeEl);
        trEl.appendChild(tdScoreEl);

        leaderboardTbodyEl.appendChild(trEl);
    }
}

renderLeaderBoard();


