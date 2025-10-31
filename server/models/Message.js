// server/models/Message.js
class Message {
  constructor({ message, sender, senderId, isPrivate = false }) {
    this.id = Date.now();
    this.message = message;
    this.sender = sender || 'Anonymous';
    this.senderId = senderId;
    this.timestamp = new Date().toISOString();
    this.isPrivate = isPrivate;
  }
}

module.exports = Message;
