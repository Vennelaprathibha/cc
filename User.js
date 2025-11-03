const mongoose = require('mongoose');
module.exports = mongoose.model('User', new mongoose.Schema({
  role: String,
  username: String,
  password: String,
  name: String
}));