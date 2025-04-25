const structure = require('../models/task.js');

const postData = async (req, res) => {
  const newnew = await structure.create(req.body)
 res.send(newnew)
}

const editData = async (req, res) => {
   const edited = await structure.findByIdAndUpdate(req.params.id, req.body)
   res.send(edited)
}

const deleteData = async (req, res) => {
   const deleted = await structure.findByIdAndDelete(req.params.id)
   res.send(deleted)
}

module.exports = {postData, editData, deleteData}