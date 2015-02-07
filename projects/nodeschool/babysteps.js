var sum = 0;
var size = process.argv.length - 2;

for (i=0; i<size; i++) { // the loop occurs 'size' many times
    sum += parseInt(process.argv[i+2]); // adds old sum to new sum
}

console.log(sum)