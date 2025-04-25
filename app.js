const express = require('express') //importing express 
const app = express(); //creating instance of express and storing it in a variable
const mongoose = require('mongoose');
const PORT = 3002
require('dotenv').config()

const {router} = require('./routers/router.js'); //importing router logic 


app.use(express.json())


app.use('/api/v1/data', router); //using router middleware logic to use filepath;

const start = async () =>{
    try{
        console.log('trying')
        await mongoose.connect(process.env.MONGO_URI)
        console.log('URI')
        app.listen(PORT)
        console.log('PORT')
    } catch(error){
        console.error(`Error: ${error} no worky`)
    }
}

start()