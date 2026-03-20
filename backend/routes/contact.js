const express = require('express');
const axios = require('axios');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact');
// Route to handle contact form submission
router.post('/contacts', async (req, res) => {
  const { name, company, email, phone, service, message } = req.body;

  try {
    // Create a new contact instance
    const newContact = new Contact({
      name,
      company,
      email,
      phone,
      service,
      message
    });

    // Save the contact to the database
    const savedContact = await newContact.save();

    res.status(200).json({ success: true, data: savedContact, message: 'Contact form submitted successfully' });
    nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    }).sendMail({
      from: `"UniqueLeads" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Contact Form Submission',
      text: `Thank you for contacting us, ${name}! We will get back to you soon.`
    }, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;