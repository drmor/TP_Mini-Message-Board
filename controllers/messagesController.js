const db = require('../db');
const Message = require('../models/message');

const message_index = (req, res) => {
  res.render('index', { title: 'Home', db });
};

const message_new_get = (req, res) => {
  res.render('create', { title: 'New message' });
};

const message_new_post = (req, res) => {
  const message = new Message(req.body);

  db.push(message);

  res.redirect('/messages');
};

module.exports = {
  message_index,
  message_new_get,
  message_new_post,
};
