const mongoose = require('mongoose')
require('dotenv').config()

const mon = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`HTML&CSS&DONTFORGETTHATMONGOSHIT`)
}

module.exports = {mon}