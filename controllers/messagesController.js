const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const message_index = (req, res) => {
  res.render('index', { title: 'Home', messages });
};

const message_add = (req, res) => {
  res.render('create', { title: 'New message' });
};

module.exports = {
  message_index,
  message_add,
};
