const mongoose = require('mongoose');

const newData = new mongoose.Schema({
    name: String
})

const dataSchema = mongoose.model('test', newData)

module.exports = {dataSchema}