const { dataSchema } = require('../models/task.js');


const postData = async (req, res) => {
   try{
  const theNewShit = await dataSchema.create(req.body)
   res.send(theNewShit)
   } catch (error){
      res.status(404)
   }
}



module.exports = { postData }