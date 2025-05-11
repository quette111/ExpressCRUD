const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const data = new Schema({
    username:{
        type:String,
        required:true,
        maxLength:20
    }, 
    password:{
        type:String,
        required:true,
        minLength:10
    }
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