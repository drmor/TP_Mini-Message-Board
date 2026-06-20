const express = require('express');
const app = express();
require('dotenv').config();
const messagesRoutes = require('./routes/messagesRoute');

app.listen(process.env.PORT);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/messages');
});

app.use('/messages', messagesRoutes);
