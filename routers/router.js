const express = require('express');

const {getFile, postFile, deleteFile}   = require('../controllers/data.js')
const router = express.Router()


router.get('/', getFile)

router.post('/', postFile)

router.delete('/:id', deleteFile)
//router.post(function)


//router.delete(function)


module.exports = { router }

