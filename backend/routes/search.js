const express = require('express');

const router = express.Router();
const searchController = require('../controllers/searchController')
router.post('/search',searchController.addToSearch);

module.exports = router;