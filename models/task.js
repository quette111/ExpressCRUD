const mongoose = require('mongoose');

const newStructure = new mongoose.Schema({
    name: String
})

const structure = mongoose.model('test', newStructure)

module.exports = structure;