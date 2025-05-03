const express = require('express');
const app = express()
const PORT = 3000
const { router } = require('./routers/router.js');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.json())
app.use('/api/v1/data', router)

const start = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server has started on port: ${PORT} . . . `))
    } catch(error){
        console.error('Error', error)
    }
}

start()

