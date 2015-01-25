var correctGuess = 0;

//ask questions
var answer1 = prompt('What is my favorite color?');
    if ( answer1.toUpperCase() === 'GREEN') {
        var correctGuess +=1;
    }

var answer2 = prompt('What is my favorite food?');
    if ( answer2.toUpperCase() === 'BANANA') {
        var correctGuess +=1;
    }

var answer3 = prompt('What is my favorite animal?');
    if ( answer3.toUpperCase() === 'WHALE') {
        var correctGuess +=1;
    }

var answer4 = prompt('What instrument do I play?');
    if ( answer4.toUpperCase() === 'GUITAR') {
        var correctGuess +=1;
    }

var answer5 = prompt('Where was I born?');
    if ( answer5.toUpperCase() === 'SAN FRANCISCO') {
        var correctGuess +=1;
    }

//output results
document.write('<p>You got ' + correctGuess + 'out of 5 questions correct!</p>');

//output ranking
if (correctGuess === 5) {
    document.write('<p>You earned a gold crown!</p>');
} else if (correctGuess >= 3) {
    document.write('<p>You earned a silver crown!</p>');
} else if (correct guess >= 1) {
    document.write('<p>You earned a bronze crown!</p>');
} else if (correctGuess === 0){
    document.write('<p>No crown for you.</p>');
}