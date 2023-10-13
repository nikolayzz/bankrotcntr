require('dotenv').config();
const nodemailer = require('nodemailer');

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
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

  const message = {
    to: 'bankrot.cntr@gmail.com',
    subject: `Запись на консультацию. Клиент ${req.body.data.name}`,
    text: `Клиент оставил заявку на сайте. 
    Имя: ${req.body.data.name}, Телефон: ${req.body.data.phone}`,
  };

  transporter.sendMail(message, (err, data) => {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log('mail send');
      res.send('success');
    }
  });
};
