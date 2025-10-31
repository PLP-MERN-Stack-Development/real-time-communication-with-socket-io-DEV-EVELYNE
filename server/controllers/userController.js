// server/controllers/userController.js
let users = {};

exports.addUser = (socketId, username) => {
  users[socketId] = { id: socketId, username };
};

exports.removeUser = (socketId) => {
  delete users[socketId];
};

exports.getAllUsers = () => Object.values(users);
exports.getUser = (socketId) => users[socketId];
