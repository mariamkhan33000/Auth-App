const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique : true
    },
    password : {
        type: String
    }
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel