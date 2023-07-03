// Square Star Pattern
/*

*****
*****
*****
*****
*****

*/

function printSingleRow(stars) {
    starString = ''
    for(var star=1; star <= stars; star++){
        starString += '*'
    }
    console.log(starString)
}

function squareStarPattern(lines, stars) {
    for (var l = 1; l <= lines; l++) {
        printSingleRow(stars)
    }
}
squareStarPattern(5, 10)