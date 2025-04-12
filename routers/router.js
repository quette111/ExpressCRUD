const express = require('express')
const router = express.Router()
const {getData, postData, deleteData} = require('../controllers/data.js')



router.get('/', getData)

router.post('/', postData)

router.delete('/:id', deleteData)

module.exports = router