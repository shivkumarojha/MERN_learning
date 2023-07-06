// Asyc js Practice
// setInterval counter

let counter = 1
function stopwatch() {
    console.clear()
    console.log(counter)
    counter += 1
}

setTimeout(stopwatch, 1000)