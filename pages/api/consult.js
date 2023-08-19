require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
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

  const message = {
    to: "bankrot.cntr@gmail.com",
    subject: "Запись на консультацию",
    text: `Запись на консультацию от
        Имя: ${req.body.data.name}, Телефон: ${req.body.data.phone}
        Тест: ${process.env.API_HOST}`,
  };

  transporter.sendMail(message, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send", process.env.PASSWORD);
      res.send("success");
    }
  });
};

// export default async function handler(req, res) {
//   const message = {
//     to: 'bankrot.cntr@gmail.com',
//     subject: 'Запись на консультацию',
//     text: `Запись на консультацию от
//     Имя: ${req.body.data.name}, Телефон: ${req.body.data.phone}
//     Тест: ${process.env.API_HOST}
//     `,
//   };

//   sendEmail(message);
//   console.log(message);
//   res.send('Thank you');
// }
