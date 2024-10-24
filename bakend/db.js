const mongoose = require('mongoose')

const conectedDB = async () => {
    try {
        await mongoose.connect(process.env.PORT_LOCAL)
        console.log((`Connected to the Database : ${mongoose.connection.host}`))
    } catch (error) {
        console.log('DB ERROR:', error)
    }
}

module.exports = conectedDB