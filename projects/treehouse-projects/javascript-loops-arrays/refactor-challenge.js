var html = '';
var rgbColor;

function getColor() { // generates random #s
  return Math.floor(Math.random() * 256);
}

function randomColor() { // creates html string w color values
  var color = 'rgb(';
  color += getColor() + ',';
  color += getColor() + ',';
  color += getColor() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for (var i=0; i <= 10; i++) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
  }

print();