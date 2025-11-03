const mongoose = require('mongoose');
module.exports = mongoose.model('Donor', new mongoose.Schema({
  username: String, 
  name: String, 
  age: String, 
  gender: String, 
  bloodGroup: String,
  contact: String, 
  address: String, 
  donations: [String], 
  healthIssues: [String]
}));