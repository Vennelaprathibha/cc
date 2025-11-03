const mongoose = require('mongoose');
module.exports = mongoose.model('Lab', new mongoose.Schema({
  username: String, 
  name: String, 
  gender: String, 
  contact: String, 
  address: String,
  tests: [Object]
}));