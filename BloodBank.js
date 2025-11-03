const mongoose = require('mongoose');
module.exports = mongoose.model('BloodBank', new mongoose.Schema({
  username: String, name: String, state: String, district: String, location: String,
  contact: String, address: String, stock: Object, requests: [Object], alerts: [Object]
}));