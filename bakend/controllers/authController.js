const userModel = require("../models/user")

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
        
        const user = await userModel.create({name, email, password})
        res.status(200).send({error: "successfully submit", user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error in rgister api"})
    }
}

module.exports = {registerUser}