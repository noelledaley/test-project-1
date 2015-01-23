var correctGuess = 0;

//ask questions
var q1 = prompt('What is my favorite color?');
    if ( q1.toUpperCase() == 'GREEN') {
        var correctGuess +=1;
    }

var q2 = prompt('What is my favorite food?');
    if ( q2.toUpperCase() == 'BANANA') {
        var correctGuess +=1;
    }

var q3 = prompt('What is my favorite animal?');
    if ( q3.toUpperCase() == 'WHALE') {
        var correctGuess +=1;
    }

var q4 = prompt('What instrument do I play?');
    if ( q4.toUpperCase() == 'GUITAR') {
        var correctGuess +=1;
    }

var q5 = prompt('Where was I born?');
    if ( q5.toUpperCase() == 'SAN FRANCISCO') {
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