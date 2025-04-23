const {gmljs} = require('../models/task.js')


const getData = async(req,res) => {

}

const postData = async(req,res) => {

const newOne = await new gmljs(req.body)
newOne.save()

}

const putData = async(req,res) => {

}

const patchData  = async(req,res) => {

}

const deleteData  = async(req,res) => {
   const del = gmljs.findByIdAndDelete(req.params.id)
   await del
  
}

module.exports = { postData, putData, patchData, deleteData }