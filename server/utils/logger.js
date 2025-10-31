// server/utils/logger.js
exports.log = (message) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
};
