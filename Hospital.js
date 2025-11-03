const mongoose = require('mongoose');
module.exports = mongoose.model('Hospital', new mongoose.Schema({
  username: String, 
  name: String, 
  state: String, 
  district: String, 
  contact: String, 
  address: String,
  stock: Object, 
  requests: [Object]
}));