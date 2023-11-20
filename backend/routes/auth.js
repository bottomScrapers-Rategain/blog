const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController')

router.post('/register',loginController.postRegister);
router.post('/login')

module.exports = router;