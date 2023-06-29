// Create a pattern
// *
// ** 
// ***
// ****

function createPattern(numberOfRows) {
    for (var i = 0; i <= numberOfRows; i++) {
        patternString = ""
        for(j=i; j > 0; j--){
            patternString += '*'
        }
        console.log(patternString)
    }
}

createPattern(5)

// Starry Pattern in js

function starLine(n) {
    let pattern = ""
    for (var i=1; i<=n; i++) {
        pattern += '*'
    }
    console.log(pattern)
}

function starPattern(line) {
    for (var l=0; l<=line; l++){
        starLine(l)
    }
}
starPattern(5)