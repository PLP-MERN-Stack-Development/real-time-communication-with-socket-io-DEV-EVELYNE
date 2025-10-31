// server/models/User.js
class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
    this.joinedAt = new Date().toISOString();
  }
}

module.exports = User;
