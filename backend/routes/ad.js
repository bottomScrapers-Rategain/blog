const express = require('express');

const router = express.Router();
const adController = require('../controllers/adController')
router.post('/behaviourads',adController.selectBehaviouralAdCategory);
router.post('/contextualads',adController.selectContextualAdCategory);
module.exports = router;