const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.get('/test', (req, res) => {
  console.log("✅ GET /api/messages/test hit");
  res.json({ message: "Hello from /api/messages/test" });
});

router.post('/', async (req, res) => {
  const { firstName, lastName, company, email, phoneNumber, message } = req.body;

  console.log('Contact form request received:', req.body);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      text: `
Name: ${firstName} ${lastName}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phoneNumber || 'N/A'}
Message: ${message}
      `,
      html: `
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Company:</strong> ${company || 'N/A'}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
<p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.verify();  // optional but good for debugging
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

module.exports = router;

