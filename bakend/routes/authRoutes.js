const express = require('express')
const router = express.Router()
const cors = require('cors')
const { registerUser } = require('../controllers/authController')

router.use( 
    cors({
    credentials : true,
    origin: "http://localhost:5173"
})
)

router.post('/register', registerUser)


module.exports =  router