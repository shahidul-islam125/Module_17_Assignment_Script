const app = require('./app')

//Configuration
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

const PORT = process.env.RUNNING_PORT

//Running the server
app.listen(process.env.RUNNING_PORT,   () => {
    console.log("Server is running on " + PORT)
})