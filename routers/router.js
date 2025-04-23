const express = require('express')
const {getEntry, postEntry, putEntry, deleteEntry} = require('../controllers/data.js')
const router = express.Router()

router.get('/', getEntry)

//router.put('api/v1/data', putEntry)

router.post('/', postEntry)

router.put('/:id', putEntry)

router.delete('/:id', deleteEntry)

//router.delete('api/v1/data/:ID', deleteSingleEntry)

//router.get('api/v1/data:ID', getSingleEntry)

module.exports = { router }