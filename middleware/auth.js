const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {

const authHeader = await req.header('Authorization')
if(!authHeader || !authHeader.startsWith('Bearer ')){
    res.send('<h1>No token</h1>')
}
const token = authHeader.split(' ')[1]
const decoded = jwt.verify(token, process.env.JWT_KEY)
req.user = decoded
console.log(token)
next()
}

module.exports = auth