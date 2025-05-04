
require('express-async-errors')
const mongoose = require('mongoose')
const express = require('express');
const router = require('./routers/router')
const app = express();
const port = process.env.PORT || 3001
const cors = require('cors');
app.use(cors());

require('dotenv').config()
app.use(express.json());
app.use('/api/v1', router)
app.use(express.static('./public'))
app.get('/', (req, res)=> {
    res.send({msg:`File served!`})
})

const start = async (req, res) => {
    try{        
         app.listen(port, console.log(`Port listening on port: ${port}`))

         mongoose.connect(process.env.MONGO_URI, console.log('Database connected'))
       
    } catch (error){
console.log(error)
    }
}

start()