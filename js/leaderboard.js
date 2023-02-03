'use strict'

let showPlayersMax = 5;

const leaderboardTbodyEl = document.getElementById('leaderboard-tbody');

function loadLeaderBoard() {
    const players = JSON.parse(localStorage.getItem('listOfPlayers'))
    console.log(players)
    state.leaderBoard = new Leaderboard(players);
};

function renderLeaderBoard() {
    loadLeaderBoard();
    showLeaderBoard();
    clearLeaderBoard();
};


function clearLeaderBoard() {
    let trEl = leaderboardTbodyEl.querySelectorAll('tr');
    trEl.innerText = '';
}

function showLeaderBoard() {
    let listOfSortedPlayersByRank = state.leaderBoard.listOfPlayers.sort((x, y) => {
        return y.score - x.score;
    })
    console.log(listOfSortedPlayersByRank)
    for (let [i, player] of listOfSortedPlayersByRank.entries()) {

        let trEl = document.createElement('tr');
        let tdRankEl = document.createElement('td');
        let tdNameEl = document.createElement('td');
        let tdTimeEl = document.createElement('td');
        let tdScoreEl = document.createElement('td');


        tdRankEl.innerText = i + 1;
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


