var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(options);

var wins = 0;
var losses = 0;
var attempsLeft = 14;
var userChoice = [];
var userText = document.getElementById("user-text");

//This is the example that I found in one of the activities
document.onkeyup = function (event) {

    userText.textContent = event.key;

    //This is what I tried first
    //var userGuess = event.key;

    var pcChoice = options[Math.floor(Math.random() * pcChoice.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === pcChoice) {
            wins++;
            attempsLeft = 14;
            userChoice = [];
        }

        if (userGuess !== pcChoice) {
            attempsLeft--;
            //"push" was a great discovery for me!! 
            userChoice.push(userGuess);
        }

        if (attempsLeft === 0) {
            attempsLeft = 14;
            losses++;
            userChoice = [];
        }

        //All of this is what I tried before and it didn't work.

        //document.getElementById("wins").innerHTML = "Wins: " + wins;

        //document.getElementById("losses").innerHTML = "Losses: " + losses;

        //document.getElementById("attempsLeft").innerHTML = "Your guesses: " + userGuess;

        //document.getElementById("attempsLeft").innerHTML = "Attemps Left: " + attempsLeft;


        //Then I found this online and I decided to give it a try 
        var html =

            "<h1>Try to guess the letter!</h1>" +
            "<p>Wins :" + wins + "</p>" +
            "<p>Losses :" + losses + "</p>" +
            "<p>Your guesses:" + attempsLeft + "</p>" +
            "<p>Attemps Left: " + userChoice.join(", ") + "</p>";

        document.getElementById("game").innerHTML = html;

    }

}; 

//I got an error in console, I google it and I have not being able to solve it yet
//logic.js:13 Uncaught TypeError: Cannot read property 'length' of undefined
//at HTMLDocument.document.onkeyup