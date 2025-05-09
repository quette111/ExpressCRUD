const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {

const authHeader = await req.header('Authorization')
if(!authHeader || !authHeader.startsWith('Bearer ')){
    res.send('<h1>No token</h1>')
}

const token = await authHeader.split(' ')[1]

const decoded = await jwt.verify(token, process.env.JWT_KEY)
req.user = decoded

next()
}

module.exports = auth