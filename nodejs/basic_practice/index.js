const bodyParser = require('body-parser')
const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const port = 3000

app.use(express.json())
// Writing a middleware
function middleware1(req, res, next) {
    console.log("from Middleware"+ req.headers.number)
    next()
}

app.use(middleware1)

function calculateSum(number) {
    let sum = 0
    for (let i = 0; i<=number; i++) {
        sum += i
    }
    return sum
}

function calculateMul(number) {
    let mul = 1
    for(let i = 1; i<=number; i++) {
        mul *= i
        console.log(mul)
    }
    console.log(mul)
    return mul
}
app.post('/handleSum', (req, res) => {
    const number = req.body.number
    const sumObject = {
        sum: calculateSum(number),
        mul: calculateMul(number)
    }
    res.status(200).send(sumObject)
})

app.get('/handleSum', (req, res) => {
    let obj = {
        name: "Shiv Kumar ojha",
    }
    res.send(obj)
})

app.get('/', (req, res) => {
    res.send("Listening")
})
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})