require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

if (!process.env.MONGODB_URI) {
  console.error('Add MONGODB_URI to .env');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// Models
const User = require('./model/User');
const Donor = require('./model/Donor');
const Hospital = require('./model/Hospital');
const Doctor = require('./model/Doctor');
const Lab = require('./model/Lab');
const Admin = require('./model/Admin');
const BloodBank = require('./model/BloodBank');
const Donation = require('./model/Donation');

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// === ALL YOUR API ROUTES (register, login, donate, etc.) ===
app.post('/api/register', async (req, res) => { /* ... */ });
app.post('/api/login', async (req, res) => { /* ... */ });
app.post('/api/donor/donate', async (req, res) => { /* ... */ });
// ... (keep all other routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});