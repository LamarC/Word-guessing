var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(options);

var wins = 0;
var losses = 0;
var attempsLeft = 0;

var pcChoice = options[Math.floor(Math.random() * options.length)];
var userGuess = [];

document.onkeyup = function(event) {
  var userGuess = event.key;
 //event.keycode figure this one out 
 //keyboard event
}

if (userGuess === pcChoice) {
        wins++;
    }

else if 
(userGuess !== pcChoice) {
        attempsLeft --;
    }

else {
    attempsLeft = losses ++;
}
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("attempsLeft").innerHTML = "Guesses left: " + guesses;
