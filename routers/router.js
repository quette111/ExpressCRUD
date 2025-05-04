const express = require('express');
const router = express.Router()
const { landing, login } = require('../controllers/data');


const auth = require('../middleware/auth')

router.route('/login').post(login)
router.route('/landing').get(auth, landing)

module.exports = router