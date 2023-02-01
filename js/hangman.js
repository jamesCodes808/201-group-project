'use strict'

var alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

//potential words to guess
var pokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran', 'nidorina', 'nidoqueen', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebell', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowsee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mrmime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];

var guesses = 10;
var wins = 0;
var losses = 0;

var answer = pokemon[Math.floor(Math.random()*pokemon.length)];

//create '_' placeholders in HTML document with the same number of characters as the pokemon
var answerLength = answer.length;

var underscore = Array.from('_'.repeat(answerLength));

//initializes an array to store letter guesses
var letterGuess = [];

//initializes text on the window load
window.onload = function(){

    
    document.getElementById("answer").innerHTML = underscore.join(' ');

    document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;

    document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;

}

//function runs after click me 
document.getElementById("startGame").onclick = function(event) {

   
    document.getElementById('pokemonimg').src = "assets/img/pokemonName/"+answer+".png";

    if (guesses === 0 || underscore.join('') === answer){
    //    prevents guessing after game end
    }
    else {
        //userGuess is recorded based on key pressed
        var userGuess = event.key;

        if (alphabet.indexOf(userGuess) > -1) {

            userGuessLower = userGuess.toLowerCase();

            if (answer.indexOf(userGuessLower) < 0) {

                if (letterGuess.indexOf(userGuessLower) < 0) {

                    guesses = guesses - 1;

                    document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;
                }
            }

            //appends userGuess to lettersGuessed array and updates document
            if (letterGuess.indexOf(userGuessLower) < 0) {
                letterGuess.push(userGuessLower);

                document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;
            }

            //checks to see if the guess is part of the answer
            if (answer.indexOf(userGuessLower) > -1) {

                //cycles through the answer to find locations matching the user guess
                for (var i = 0; i < answer.length; i++) {

                    if (answer[i] === userGuessLower) {

                        //updates underscore with letter at correct location
                        underscore[i] = userGuessLower;

                        document.getElementById("answer").innerHTML = underscore.join(' ');
                    }
                }
            }
        }
    }

}