var questions = 5;
var questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please choose a noun. ' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adj = prompt('Please choose an adjective. ' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjTwo = prompt('Please choose a second adjective. ' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjThree = prompt('Please choose a third adjective. ' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var nounTwo = prompt('Please choose a second noun.' + questionsLeft);
alert('All done. Ready?');

var sentence = 'The ' + adj + ' ';
sentence += noun + ' is ';
sentence += adjTwo + '.';
sentence += ' In fact, the ' + noun + ' is also ';
sentence += adjThree + ' just like a ';
sentence += nounTwo + '.';
document.write(sentence);