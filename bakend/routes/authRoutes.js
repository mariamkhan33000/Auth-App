const express = require('express')
const router = express.Router()
const cors = require('cors')
const { registerUser, loginUser, getProfile } = require('../controllers/authController')

router.use( 
    cors({
    credentials : true,
    origin: "http://localhost:5173"
})
)

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)


module.exports =  router