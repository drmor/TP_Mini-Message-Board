const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.message_index);
router.get('/new', messagesController.message_new_get);
router.post('/', messagesController.message_new_post);

module.exports = router;
