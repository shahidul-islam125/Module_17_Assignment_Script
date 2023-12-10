//Basic lib import
const express = require('express')
const app = express()
const router = require('./src/Routes/api')
const bodyParser = require('body-parser')
const path = require("path")

//Sy middleware import
const cors = require('cors')
const hpp = require('hpp')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')

//Database lib import
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

//Sy middleware implimentation
app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(mongoSanitize())

//Set req rate limiting
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100,
    message: "Rate limit exceed try again later.",
    statusCode: 429,
    headers: true
})

app.use(limiter)
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', router)

//Connect to Mongo Database
let URI = "mongodb+srv://demoDatabase:1234@cluster0.gdvqevi.mongodb.net/MERNEcommerce";
let OPTION= {autoIndex: true}
mongoose
        .connect(URI, OPTION)
        .then(() => {
            console.log("Database Connected!")
        })
        .catch((err) => {
            console.log(err)
        })



//Undefined routing :
app.use("*", (req, res) => {
	res.status(404).json({ status: "fail", data: "No route found" });
});

//Export this file
module.exports = app