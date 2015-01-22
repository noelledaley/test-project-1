var skipMultiples = function() {
    for (var i = 1; i <= 50; i++) {
        if (i % 7 == 0) {
            console.log('There is power in looking silly and not caring that you do.');
        } else {
            console.log(i);
        }
    }
} 

skipMultiples();