const express = require('express');

const router = express.Router();
const adController = require('../controllers/adController')
router.get('/behavioural-ad-category',adController.selectBehaviouralAdCategory);
router.get('/contextual-ad-category',adController.selectContextualAdCategory);
module.exports = router;