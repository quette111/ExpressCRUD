const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const data = new Schema({
    username: String,
    password: String
})
  
data.pre('save', async function (next) {
    const user = this;
    if(user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
})

const loggingInData = mongoose.model('title', data)

module.exports = loggingInData