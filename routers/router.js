const router = require('express').Router()

const { postData } = require('../controllers/data.js')

router.post('/', postData)

module.exports = { router }