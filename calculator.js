const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let result = parseInt(num1)+parseInt(num2)

    res.send("The result of the calculation is " + result)
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)
    let bmi = weight/(height*height)

    res.send("BMI is " + bmi)
})

app.listen(3000, () => {
    console.log("Server is running at Port 3000")
})