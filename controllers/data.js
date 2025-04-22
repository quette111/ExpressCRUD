const {sosaData} = require('../CK.js')
const {scm} = require('../models/task.js')


const getEntry = async (req,res) => {
  try {
    await res.send(sosaData)
  } catch (error) {
    console.log(error)
  }
}

const postEntry = async (req,res) => {
  try {
     const newEntry = new scm(req.body)
     await newEntry.save()
     res.status(201).json(newEntry)

  } catch (error) {
    console.log(error)
  }
}




module.exports = {getEntry, postEntry}