
const mongoose =  require('mongoose')

const dataSchema = new mongoose.Schema({
    name: String,
    loveJS: Boolean
})

const gmljs = mongoose.model('test', dataSchema)

module.exports ={gmljs}