// Write a function that prints sum from start index to end index.

function sum(start, end) {
    sum = 0
    for (i=start; i <= end; i++) {
        sum += i
    }
    return sum
}

let result = sum(1, 10)
console.log(result)