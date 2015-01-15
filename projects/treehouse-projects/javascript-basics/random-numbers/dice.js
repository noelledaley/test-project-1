var num = prompt('Please pick a number.');
var topNum = parseInt(num);
var randomNum = Math.floor( Math.random() * topNum) + 1;
var message = ('<p> ' + randomNum + ' is a number between 1 and ' + topNum + '.</p>');
document.write(message);