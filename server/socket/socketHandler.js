// server/socket/socketHandler.js
const Message = require('../models/Message');
const User = require('../models/User');

module.exports = (io) => {
  const users = {};
  const messages = [];
  const typingUsers = {};

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('user_join', (username) => {
      const user = new User(socket.id, username);
      users[socket.id] = user;
      io.emit('user_list', Object.values(users));
      io.emit('user_joined', user);
      console.log(`${username} joined the chat`);
    });

    socket.on('send_message', (messageData) => {
      const message = new Message({
        ...messageData,
        sender: users[socket.id]?.username,
        senderId: socket.id,
      });
      messages.push(message);
      if (messages.length > 100) messages.shift();
      io.emit('receive_message', message);
    });

    socket.on('typing', (isTyping) => {
      if (users[socket.id]) {
        const username = users[socket.id].username;
        if (isTyping) typingUsers[socket.id] = username;
        else delete typingUsers[socket.id];
        io.emit('typing_users', Object.values(typingUsers));
      }
    });

    socket.on('private_message', ({ to, message }) => {
      const msg = new Message({
        message,
        sender: users[socket.id]?.username,
        senderId: socket.id,
        isPrivate: true,
      });
      socket.to(to).emit('private_message', msg);
      socket.emit('private_message', msg);
    });

    socket.on('disconnect', () => {
      if (users[socket.id]) {
        const { username } = users[socket.id];
        io.emit('user_left', { username, id: socket.id });
        console.log(`${username} left the chat`);
      }
      delete users[socket.id];
      delete typingUsers[socket.id];
      io.emit('user_list', Object.values(users));
      io.emit('typing_users', Object.values(typingUsers));
    });
  });
};
