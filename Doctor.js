const mongoose = require('mongoose');
module.exports = mongoose.model('Doctor', new mongoose.Schema({
  username: String, 
  name: String, 
  specialization: String, 
  workplace: String,
  gender: String, 
  contact: String, 
  address: String, 
  requests: [Object], 
  alerts: [Object]
}));