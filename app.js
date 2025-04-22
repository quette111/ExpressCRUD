const express = require('express');
const { router } = require('./routers/router.js')
const {connectDB} = require('./mongoose/mongoose.js')
connectDB()
const app = express()
app.use(express.json())
app.use('/api/v1/data', router)

const PORT = 3000



app.listen(PORT, console.log(`working .  . . . on port: ${PORT}`))