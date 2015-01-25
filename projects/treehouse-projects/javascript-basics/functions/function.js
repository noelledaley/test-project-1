/* Instructions
    1.  Create a random number generating function that accepts 2 values: a lower and         an upper limit.
    2.  Call the function several times by passing different values.
    3.  Use an if statement to verify both arguments are numbers
    4.  Spit out an error if one or both of the values aren't numbers.*/

function getRandomNumber (lower, upper) {
    if ( isNaN(lower) || isNaN(upper) ) {
        throw new Error('Both arguments must be numbers!');
    }
    return randomNumber = Math.floor( Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber('nine', 7));
console.log(getRandomNumber(5, 100));
console.log(getRandomNumber(50, 400));