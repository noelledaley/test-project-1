/* Instructions
    1.  Create a random number generating function that accepts 2 values: a lower and         an upper limit.
    2.  Call the function several times by passing different values. */

function getRandomNumber (lower, upper) {
    var randomNumber = Math.floor( Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
}

getRandomNumber();
getRandomNumber();
getRandomNumber();