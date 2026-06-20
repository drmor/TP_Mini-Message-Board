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
  res.render('index', { title: 'home', messages });
};

module.exports = {
  message_index,
};
