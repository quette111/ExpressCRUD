const { sosaData } = require('../CK.js')
const { scm } = require('../models/task.js')


const getEntry = async (req, res) => {
  try {
    await res.send(sosaData)
  } catch (error) {
    console.log(error)
  }
}

const postEntry = async (req, res) => {
  try {
    const newEntry = new scm(req.body)
    await newEntry.save()
    res.status(201).json(newEntry)

  } catch (error) {
    console.log(error)
  }
}

const putEntry = async (req, res) => {
  try {
    const updated = await scm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,

    });

    res.status(200).json(updated)

  } catch (error) {
    console.log(error)
  }
}

const deleteEntry = async (req, res) => {
  try { 
  const deleted = await scm.findByIdAndDelete(req.params.id);
  res.status(200).json(deleted)
    
  } catch (error) {
    console.log(error)
  }
}







module.exports = { getEntry, postEntry, putEntry, deleteEntry }