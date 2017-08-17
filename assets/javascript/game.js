//Word bank
var bandNames = ["Ingested", "Decapitated", "Archspire", "Behemoth", "Acrania", "Necrophagist"]


//Get word from word bank
var guess = bandNames[Math.floor(Math.random() * bandNames.length)];


//Show input box with dashes & split letters
var displayGuess = [];

for (i = 0; i < guess.length; i++) {
    displayGuess = "_";
}


document.onkeyup = function(event) {
	var userChoice = event.key;

// upperCase user input
guess = guess.toUpperCase();

document.getElementById("guess").innerHTML = displayGuess;
    console.log(guess);

}

// var isInWord false
// for loop
// isInWord true
