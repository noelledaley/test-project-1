var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

// generate random number between 1 and 10,000
function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

// compare computer's guess to randomNumber
while (guess !== randomNumber) { //while computer's guess is not true
    guess = getRandomNumber(upper);
    attempts += 1;
}

console.log('The random number was: ' + randomNumber + '. ');
console.log('It took ' + attempts + ' attempts to get it right.');