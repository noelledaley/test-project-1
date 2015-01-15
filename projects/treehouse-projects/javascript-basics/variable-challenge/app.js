var questions = 5;
var questionsLeft = '[' + questions + ' questions left]';
var nounToChoose = prompt('Please choose a noun. ' + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var noun = nounToChoose;
var adjToChoose = prompt('Please choose an adjective. ' + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var adjOne = adjToChoose;
var adjToChooseTwo = prompt('Please choose a second adjective. ' + questionsLeft);
var adTwo = adjToChooseTwo;
var sentenceOne = ('The '+ adjOne + ' ' + noun + ' is ' + adTwo + '.');

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var adjToChooseThree = prompt('Please choose a third adjective. ' + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var adjThree = adjToChooseThree;
var nounToChooseTwo = prompt('Please choose a second noun.' + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var nounTwo = nounToChooseTwo;
var sentenceTwo = ('In fact, the ' + noun + ' is also ' + adjThree + ' just like a ' + nounTwo + '.');
document.write(sentenceOne + ' ' + sentenceTwo)