function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
} //generates random number between 1 and upper

var counter = 0;
while (counter < 10) {
    var randNum = randomNumber(6);
    console.log(randNum);
    counter += 1;
} // logs a random number 10 times