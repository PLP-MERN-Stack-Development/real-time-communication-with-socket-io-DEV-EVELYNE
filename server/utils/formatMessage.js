// server/utils/formatMessage.js
module.exports = (username, message) => {
  return {
    id: Date.now(),
    username,
    message,
    time: new Date().toLocaleTimeString(),
  };
};
