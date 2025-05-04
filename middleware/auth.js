const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {

const token = await req.header('Authorization')
if(!token){
    res.status(404).send(`No token provided for auth`)
}

res.status(200).send('Successful auth')
console.log(token)
next()
}

module.exports = auth