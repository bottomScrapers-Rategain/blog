const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController')
router.get('/get-all-users',userController.getAllUsers);
router.post('/get-user', userController.getUserByUid);

module.exports = router;