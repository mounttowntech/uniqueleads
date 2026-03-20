const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: { type: String , required: true

  },
  service: String,
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contacts', contactSchema);