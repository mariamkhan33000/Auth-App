const userModel = require("../models/user")
const {hashPassword, comparePassword} = require('../helper/authPassword')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            return res.status(400).json({error: "Provide fields"})
        }
        if(!password || password.length < 6) 
            return res.status(409).json({error: "Password should at least 6 charactors"})
        
        const existing = await userModel.findOne({email})
        if(existing) {
            return res.status(404).json({error: "User alread exisit"})
        }
        const hashedPassword = await hashPassword(password)
        
        const user = await userModel.create({name, email, password: hashedPassword})
        res.status(200).send({error: "successfully submit", user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error in rgister api"})
    }
}

//Login EndPoint
const loginUser = async (req, res) => {
    
    try {
        const {email, password} = req.body;
        
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({error: "No User Found"})
        }
        const isMatch = await comparePassword(password, user.password)
        if(isMatch) {
           jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
           })
        }
        if(!isMatch) {
            res.json({error: "Password donot matcth"})
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = async (req, res) => {
    const {token} = req.cookies
    if(token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if(err) throw error;
        res.json(user)
    })
} else {
    res.json(null)
}
}

module.exports = {registerUser, loginUser , getProfile}