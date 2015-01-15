var num = prompt('Please pick a number.');
num = parseInt(num);
num = Math.floor( Math.random() * num) + 1;
document.write('<p> ' + num + '</p>');