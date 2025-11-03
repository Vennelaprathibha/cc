const mongoose = require('mongoose');
module.exports = mongoose.model('Admin', new mongoose.Schema({
  username: String, name: String, email: String, gender: String, contact: String, address: String
}));