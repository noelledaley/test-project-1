var num1 = prompt('Please type a starting number.');
var bottomNum = parseInt(num1)
var num = prompt('Please pick a number.');
var topNum = parseInt(num);
var randomNum = Math.floor( Math.random() * (topNum - bottomNum + 1)) + bottomNum;
var message = ('<p> ' + randomNum + ' is a number between ' + bottomNum + ' and ' + topNum + '.</p>');
document.write(message);