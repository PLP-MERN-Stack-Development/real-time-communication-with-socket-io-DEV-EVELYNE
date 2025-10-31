// server/controllers/chatController.js
let messages = [];
let users = {};

exports.getMessages = (req, res) => {
  res.json(messages);
};

exports.getUsers = (req, res) => {
  res.json(Object.values(users));
};

exports.addMessage = (message) => {
  messages.push(message);
  if (messages.length > 100) messages.shift();
};

exports.addUser = (socketId, username) => {
  users[socketId] = { username, id: socketId };
};

exports.removeUser = (socketId) => {
  delete users[socketId];
};

exports.getAllUsers = () => Object.values(users);
exports.getUserById = (socketId) => users[socketId];
