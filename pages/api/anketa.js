import sendEmail from '@/service/mailService';

export default async function handler(req, res) {
  const message = {
    to: 'bankrot.cntr@gmail.com',
    subject: `Анкета клиента ${req.body.data.name}`,
    text: `Анкета клиента.
    Имя: ${req.body.data.name}
    Телефон: ${req.body.data.phone}
    Размер задолженности: ${req.body.data.debt}
    Доходы: ${req.body.data.incomes ? 'Имеются' : 'Отсутствуют'}
    ${
      req.body.data.incomeSize
        ? `Размер доходов: ${req.body.data.incomeSize}`
        : ''
    }
    Имущество: ${req.body.data.property ? 'Имеется' : 'Отсутствует'}
    ${
      req.body.data.propertyList
        ? `Список имущества: ${req.body.data.propertyList}`
        : ''
    }
    Сделки с имуществом: ${
      req.body.data.propertyDeal ? 'Имеются' : 'Отсутствуют'
    }
    ${
      req.body.data.propertyDealList
        ? `Список сделок: ${req.body.data.propertyDealList}`
        : ''
    }
    Залог: ${req.body.data.zalog ? 'Имеется' : 'Отсутствует'}
    Статус ИП: ${req.body.data.kommersant ? 'Имеется' : 'Отсутствует'}
    Несовершеннолетние дети: ${
      req.body.data.haveChildren ? 'Имеются' : 'Отсутствуют'
    }
    В браке: ${req.body.data.isMarried ? 'Да' : 'Нет'}
    ${
      req.body.data.spouseIncomes
        ? `Доходы супруга: ${
            req.body.data.spouseIncomes ? 'Имеются' : 'Отсутствуют'
          }`
        : ''
    }
    ${
      req.body.data.spouseIncomesSize
        ? `Размер доходов супруга: ${req.body.data.spouseIncomesSize}`
        : ''
    }
    ${
      req.body.data.commonProperty
        ? `Совместное имущество: ${
            req.body.data.commonProperty ? 'Имеется' : 'Отсутствует'
          }`
        : ''
    }
    ${
      req.body.data.commonPropertyList
        ? `Список совместного имущества: ${req.body.data.commonPropertyList}`
        : ''
    } 
  
    `,
  };

  sendEmail(message);
  console.log(message);
  res.send('Thank you');
}

// export default function handler(req, res) {
//   res.send('hello');
//   console.log();
// }
