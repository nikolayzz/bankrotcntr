import sendEmail from '@/service/mailService';

export default async function handler(req, res) {
  const message = {
    to: 'bankrot.cntr@gmail.com',
    subject: 'Запись на консультацию',
    text: `Запись на консультацию от 
    Имя: ${req.body.data.name}, Телефон: ${req.body.data.phone}`,
  };

  sendEmail(message);
  console.log(message);
  res.send('Thank you');
}
