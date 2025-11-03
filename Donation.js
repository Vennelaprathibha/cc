const mongoose = require('mongoose');
module.exports = mongoose.model('Donation', new mongoose.Schema({
  donor: String, name: String, bloodGroup: String, contact: String, state: String,
  district: String, hospital: String, date: String, time: String, healthIssues: String,
  status: String, testId: Number
}, { timestamps: true }));