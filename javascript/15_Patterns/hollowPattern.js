/*
Hollow Square Pattern

*****
*   *
*   *
*   *
*****

*/

function printSingleLine(numOfStars) {
    let string = ""
    for (var i=1; i <= numOfStars; i++) {
        string += '*'
    }
    console.log(string)
}


function printSideStars(numOfStars) {
    let string = ""
    for (i = 1; i <= numOfStars; i++) {
        if (i == 1 || i == numOfStars) {
            string += '*'
        } else {
            string += " "
        }
    }
    console.log(string)
}


function printHollowPattern(numOfLines, numOfStars) {
    for (let l = 1; l <= numOfLines; l++) {
        if (l == 1 || l == numOfLines) {
            printSingleLine(numOfStars)
        } else {
            printSideStars(numOfStars)
        }
    }
}

printHollowPattern(10, 15)