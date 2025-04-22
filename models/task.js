const mongoose = require('mongoose');


const mySchema = new mongoose.Schema({
    name: String,
    ofAge: Boolean,
})


const scm = mongoose.model('test', mySchema)

module.exports = { scm }