require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const sendEmail = (message) => {
  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email has been sent successfully");
    }
    transporter.close();
  });
};

export default sendEmail;
