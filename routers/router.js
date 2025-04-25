const express = require('express');
const router = express.Router();

const {postData, editData, deleteData} = require('../controllers/data.js');

router.post('/', postData)
router.patch('/:id', editData)
router.delete('/:id', deleteData)
module.exports = {router}