const nodemailer = require("nodemailer");
require("dotenv").config();
const cron = require("node-cron");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

cron.schedule(
  "40 17 * * *",
  function () {
    console.log("Sent at 10am");

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender’s email address
      to: process.env.RECIPIENT_EMAIL, // Recipient’s email address
      subject: "Hello from Node.js", // Email subject
      text: "This is a test email sent from Node.js.", // Email body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: " + error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
  {
    scheduled: true,
    timezone: "America/Los_Angeles",
  }
);

console.log("Your email has been scheduled.");
