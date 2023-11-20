const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController')

router.post('/login')
router.post('/register',loginController.postRegister);