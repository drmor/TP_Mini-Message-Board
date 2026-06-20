class Message {
  constructor(message, author) {
    this.message = message;
    this.author = author;
    this.added = new Date();
  }
}

module.exports = Message;
