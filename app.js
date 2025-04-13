const express = require('express');
const app = express()
const PORT = 3002;

const { router } = require('./routers/router.js')
const logger = (req, res, next) => {
    console.log(req.method)
    next()}
app.use(logger)

app.use(express.json())
app.use('/api/v1/sosa', router)

app.listen(PORT, (req, res)=> console.log(`Server running on port ${PORT}...`))