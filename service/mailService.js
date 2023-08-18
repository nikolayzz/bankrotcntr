require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// const mailOptions = {
//   from: 'bankrot.cntr@gmail.com',
//   to: 'bankrot.cntr@gmail.com',
//   subject: 'Письмо отправленное через node.js',
//   text: 'Текст письма',
// };

const sendEmail = (message) => {
  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email has been sent successfully', info);
    }
    transporter.close();
  });
};

export default sendEmail;
