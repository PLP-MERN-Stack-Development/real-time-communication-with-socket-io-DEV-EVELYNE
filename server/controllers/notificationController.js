// server/controllers/notificationController.js
exports.sendNotification = (io, message) => {
  io.emit('notification', message);
};
