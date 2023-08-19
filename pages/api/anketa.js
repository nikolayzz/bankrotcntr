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
    subject: `Анкета клиента ${req.body.data.name}`,
    text: `Анкета клиента.
    Имя: ${req.body.data.name}
    Телефон: ${req.body.data.phone}
    Размер задолженности: ${req.body.data.debt}
    Доходы: ${req.body.data.incomes === "yes" ? "Имеются" : "Отсутствуют"}
    ${
      req.body.data.incomeSize
        ? `Размер доходов: ${req.body.data.incomeSize}`
        : ""
    }
    Имущество: ${req.body.data.property === "yes" ? "Имеется" : "Отсутствует"}
    ${
      req.body.data.propertyList
        ? `Список имущества: ${req.body.data.propertyList}`
        : ""
    }
    Сделки с имуществом: ${
      req.body.data.propertyDeal === "yes" ? "Имеются" : "Отсутствуют"
    }
    ${
      req.body.data.propertyDealList
        ? `Список сделок: ${req.body.data.propertyDealList}`
        : ""
    }
    Залог: ${req.body.data.zalog === "yes" ? "Имеется" : "Отсутствует"}
    Статус ИП: ${req.body.data.kommersant === "yes" ? "Имеется" : "Отсутствует"}
    Несовершеннолетние дети: ${
      req.body.data.haveChildren === "yes" ? "Имеются" : "Отсутствуют"
    }
    В браке: ${req.body.data.isMarried === "yes" ? "Да" : "Нет"}
    ${
      req.body.data.spouseIncomes
        ? `Доходы супруга: ${
            req.body.data.spouseIncomes === "yes" ? "Имеются" : "Отсутствуют"
          }`
        : ""
    }
    ${
      req.body.data.spouseIncomesSize
        ? `Размер доходов супруга: ${req.body.data.spouseIncomesSize}`
        : ""
    }
    ${
      req.body.data.commonProperty
        ? `Совместное имущество: ${
            req.body.data.commonProperty === "yes" ? "Имеется" : "Отсутствует"
          }`
        : ""
    }
    ${
      req.body.data.commonPropertyList
        ? `Список совместного имущества: ${req.body.data.commonPropertyList}`
        : ""
    } 
    `,
  };

  transporter.sendMail(message, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send", req.body.data.incomes);
      res.send("success");
    }
  });
};
