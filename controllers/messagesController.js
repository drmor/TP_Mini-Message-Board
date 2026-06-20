const db = require('../db');

const message_index = (req, res) => {
  res.render('index', { title: 'Home', db });
  console.log(db);
};

const message_new_get = (req, res) => {
  res.render('create', { title: 'New message' });
};

const message_new_post = (req, res) => {
  db.push({ text: req.body.message, user: req.body.author, added: new Date() });

  res.redirect('/messages');
};

module.exports = {
  message_index,
  message_new_get,
  message_new_post,
};
