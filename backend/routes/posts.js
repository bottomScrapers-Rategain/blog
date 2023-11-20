const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController')
router.get('/get-all-posts',postController.getAllPosts);
router.post('/get-post',postController.postSinglePost)

module.exports = router;