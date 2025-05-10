const loggingInData = require('../models/task')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const login = async(req, res, next) => {
   let {username, password} = req.body

   if(!username || ! password){
      console.log('You must provide a un and pw')
   }

 
   const key = await jwt.sign(username,process.env.JWT_KEY)
   const dataStored = await loggingInData.create(req.body)
   res.status(200).send(key)
  
}

const landing = async (req, res) => {


   console.log('landing page babby')
   res.status(200).send(`<div><h1 id='info'>YOUR PERSONAL INFO! :-)</h1></div>`)
}

module.exports = {login,landing}