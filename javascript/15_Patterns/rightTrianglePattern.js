/*
Right Triangle Pattern in Javascript

    *
   **
  ***
 ****
*****

*/

function printSpaces(numOfSpace) {
    let space = ""
    for (let s = 0; s < numOfSpace; s++){
        space += " "
    }
    return space
}

function printStars(numOfStars) {
    let stars = ""
    for (let s = 0; s < numOfStars; s++) { 
        stars += "*"
    }
    return stars
}

function printSingleLine(numOfStars) {
    let spaces = 0
    for (let star = 1; star <= numOfStars; star++) {
        spaces = numOfStars - star
        totalSpace = printSpaces(spaces)
        totalStars = printStars(star)
        console.log(totalSpace + totalStars)
    }
}

function printRightTrianglePattern(numOfStars, numOfLines) {
        printSingleLine(numOfStars)
}

printRightTrianglePattern(10)