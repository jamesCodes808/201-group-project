"use strict";

var alphabet = [
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "i",
  "I",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "o",
  "O",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "u",
  "U",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z",
];

var pokemon = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran",
  "nidorina",
  "nidoqueen",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebell",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetchd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowsee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mrmime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omanyte",
  "omastar",
  "kabuto",
  "kabutops",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "dratini",
  "dragonair",
  "dragonite",
  "mewtwo",
  "mew",
];

var guessesCounter = 0;
var winCounter = 0;
var lossCounter = 0;
let roundCounter = 0;

var answer = '';
let lettersInAnswer = [];

var underscore = 0;

let wrongGuesses = [];
let rightGuessesAndBlanks = [];

const startGameButtonEl = document.getElementById('startGame');
startGameButtonEl.addEventListener('click', startGame);

const gameContainerEl = document.getElementById('game-main-container');
const playerFormContainerEl = document.getElementById('player-form-section');

function startGame() {
  roundCounter++;
  if (roundCounter == 1) {
    if (!startGameButtonEl.classList.contains('hidden')) {
      startGameButtonEl.classList.toggle('hidden');
    }
    startTimer();
  }

  if (roundCounter > 3) {
    endGame();
    console.log(finishTimeInSeconds);
  }

  answer = pokemon[Math.floor(Math.random() * pokemon.length)];
  console.log(answer)
  lettersInAnswer = answer.split("");
  underscore = lettersInAnswer.length;

  guessesCounter = 10;
  wrongGuesses = [];
  rightGuessesAndBlanks = [];

  for (let i = 0; i < underscore; i++) {
    rightGuessesAndBlanks.push("_");
  }

  document.getElementById("pokemonimg").src =
    "assets/img/pokemonName/" + answer + ".png";

  document.getElementById("answer").innerHTML = rightGuessesAndBlanks.join(' ');

  document.getElementById("guessCount").innerHTML = "Guesses left: " + guessesCounter;

  document.getElementById("lettersGuessed").innerHTML =
    "Letters Guessed: " + wrongGuesses;

  document.getElementById('wins').innerHTML = 'Wins: ' + winCounter;

  document.getElementById("losses").innerHTML = "Losses: " + lossCounter;

}


function checkGuesses(guess) {
  let isGuessCorrect = false;

  for (let i = 0; i < underscore; i++) {
    if (answer[i] == guess) {
      isGuessCorrect = true;
    } else if (!alphabet.includes(guess)) {
      isGuessCorrect = false;
    }
  }

  if (isGuessCorrect) {
    for (let i = 0; i < underscore; i++) {
      if (answer[i] == guess) {
        rightGuessesAndBlanks[i] = guess;
      }
    }
  } else if (!alphabet.includes(guess)) {
    console.log('enter a valid letter')
  } else {
    wrongGuesses.push(guess);
    guessesCounter--;
  }

}

function completeRound() {
  document.getElementById('guessCount').innerHTML = `Guesses Left: ${guessesCounter}`;
  document.getElementById('answer').innerHTML = rightGuessesAndBlanks.join(' ');
  document.getElementById('lettersGuessed').innerHTML = `Letters Guessed: ${wrongGuesses.join(' ')}`;

  if (lettersInAnswer.toString() == rightGuessesAndBlanks.toLocaleString()) {
    winCounter++;

    document.getElementById("game-title").innerHTML = "You win! It's " + answer.toUpperCase() + "!";
    document.getElementById('wins').innerHTML = winCounter;

    startGame();
  } else if (guessesCounter == 0) {
    lossCounter++;

    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("game-title").innerHTML =
      "You lose! It's " + answer.toUpperCase() + "!";
    startGame();
  }
}

function endGame() {
  roundCounter = 0;

  document.getElementById('game-title').innerText = 'Congrats!';
  gameContainerEl.classList.toggle('hidden');
  playerFormContainerEl.classList.toggle('hidden');
  endTimer();
  document.removeEventListener("keydown", handleKeyDown);

  document.getElementById('score').value = winCounter - lossCounter;
  document.getElementById('time').value = finishTimeInSeconds
  userScore = winCounter - lossCounter;
  winCounter = 0;
  lossCounter = 0;
}


function handleKeyDown(event) {
  event.preventDefault();
  let userGuess = event.key.toLowerCase();
  checkGuesses(userGuess);
  completeRound();
}
document.addEventListener("keydown", handleKeyDown);