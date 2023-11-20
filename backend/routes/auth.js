const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController')

router.post('/register',loginController.postRegister);
router.post('/login',loginController.postLogin)

module.exports = router;