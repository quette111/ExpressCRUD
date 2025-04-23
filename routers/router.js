const router = require('express').Router()
const {deleteData} = require('../controllers/data.js')
router.get('/')

router.post('/')

router.put('/')

router.patch('/:id')

router.delete('/:id', deleteData)

module.exports = {router}