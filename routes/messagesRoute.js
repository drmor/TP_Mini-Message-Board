const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.message_index);
router.get('/new', messagesController.message_add);

module.exports = router;
