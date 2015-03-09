var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // starts out false so the loop will run

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do { // do this
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount +=1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
} while ( ! correctGuess ) // while the correct guess is false
    
document.write('<h1>You guessed the number!<h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber + ' .')