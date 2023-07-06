// Practice Promise concepts

function getMedicine(resolve, reject){
    console.log("get Medicine")
    return "From get Medicine"
}

function user() {
    getmed = new Promise(getMedicine)
    // console.log(getmed)
    getmed.then((result) => console.log(result))
}
user()