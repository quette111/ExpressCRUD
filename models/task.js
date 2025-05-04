const mongoose = require('mongoose');
const Schema = mongoose.Schema

const data = new Schema({
    username: String,
    password: String
})

const loggingInData = mongoose.model('title', data)

module.exports = loggingInData