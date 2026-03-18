// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const nodemailer = require('nodemailer');
const fs = require('fs');
 
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Convert form data to an Excel file
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([formData]);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'FormData');

  const filePath = './form_data.xlsx';
  xlsx.writeFile(workbook, filePath);

  // Send the Excel file via email
  sendEmail(filePath, (error) => {
    if (error) {
      console.error('Email sending failed:', error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent successfully!');
      res.send('Form submitted and email sent successfully!');
    }

    // Clean up the file after sending
    fs.unlinkSync(filePath);
  });
});

// Function to send email with Excel attachment
function sendEmail(filePath, callback) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // From .env
      pass: process.env.EMAIL_PASS, // From .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'himanshugarg3731@gmail.com',
    subject: 'Form Data Submission',
    text: 'Attached is the submitted form data.',
    attachments: [
      {
        filename: 'form_data.xlsx',
        path: filePath,
      },
    ],
  };

  transporter.sendMail(mailOptions, callback);
}

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
