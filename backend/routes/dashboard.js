const express = require('express');

const router = express.Router();
const dashboardController = require('../controllers/dashboardController')
router.get('/get-user-details',dashboardController.getUserDetails);

module.exports = router;