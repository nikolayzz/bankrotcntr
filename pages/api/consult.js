import sendEmail from "@/service/mailService";

export default async function handler(req, res) {
  const message = {
    to: "bankrot.cntr@gmail.com",
    subject: `Запись на консультацию. Клиент ${req.body.data.name}`,
    text: `Клиент оставил заявку на сайте. 
    Имя: ${req.body.data.name}, Телефон: ${req.body.data.phone}`,
  };

  sendEmail(message);
  console.log(message);
  res.send("Thank you");
}
