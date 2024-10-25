const express = require('express')
const app = express()
const userModel = require('./models/user')
const  dotenv = require('dotenv')
const cors = require('cors')
const connectedDb = require('./db')
const cookieParser = require('cookie-parser')
dotenv.config()
connectedDb()
const PORT = process.env.PORT || 8000;


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/authRoutes'))

app.listen(PORT, () =>{
    console.log(`Your Sever is Running at ${PORT}`)
})