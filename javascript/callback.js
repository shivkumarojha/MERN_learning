// Call back Function practice

function one(func2) {
    func2()
}

function func2() {
    console.log("I am func 2")
}

one(func2)