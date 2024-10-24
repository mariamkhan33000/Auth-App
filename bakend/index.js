const express = require('express')
const app = express()
const  dotenv = require('dotenv').config()
const cors = require('cors')
const PORT = 8000;

app.use('/', require('./routes/authRoutes'))

app.listen(PORT, () =>{
    console.log(`Your Sever is Running at ${PORT}`)
})