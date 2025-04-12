const express = require('express');
const app = express()
const router  = require('./routers/router.js')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/songs', router)







app.all('*'), (req, res) => {//not working as expected
    res.json({"ERROR OCCURRED": "U FKD UP"})
}





app.listen(port, () => {
    console.log(`Spinning and spinning these mf ports on port ${port}...`)
})

module.exports = express