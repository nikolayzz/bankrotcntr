import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Tab } from '@mui/material';
import { useState } from 'react';

import TabItem from './TabItem';

const tabOne = [
  {
    id: 1,
    title: 'Дистанционная работа',
    text: 'После сбора документов, вы просто ожидаете положительного решения. Вся процедура проводится дистанционно и не требует вашего участия.',
  },
  {
    id: 2,
    title: 'Отчетность об этапах процедуры',
    text: 'В любой момент готовы сообщить на какой стадии находится ваша процедура — весь процесс автоматизирован.',
  },
  {
    id: 3,
    title: 'Узкая специализация',
    text: 'Специализируемся только на банкротстве физических лиц. Это значит, что знаем наперед исход каждого дела.',
  },
  {
    id: 4,
    title: 'Бесплатный анализ ситуации',
    text: 'Проведем консультацию, проанализируем ситуацию и сообщим возможно списать ваш долг полностью или частично.',
  },
];

const tabTwo = [
  {
    id: 1,
    title: 'Лёгкий старт',
    text: 'Запускаем работу по вашей процедуре в день заключения договора.',
  },
  {
    id: 2,
    title: 'Беспроцентная рассрочка',
    text: 'Даем рассрочку без процентов на обговариваемый срок.',
  },
  {
    id: 3,
    title: 'Фиксированная и неизменная цена',
    text: 'Мы фиксируем цену в договоре и она не меняется в ходе процедуры. Никаких навязанных услуг и дополнительных оплат.',
  },
  {
    id: 4,
    title: 'Экономия',
    text: 'Потратите минимум в 5 раз меньше денег и освободитесь от долгов уже через 4-6 месяцев, признав себя банкротом.',
  },
];

const tabThree = [
  {
    id: 1,
    title: 'Кредиторы потребуют взыскание',
    text: 'Через 6 месяцев кредиторы начнут обращаться в Суд для принудительного взыскания.',
  },
  {
    id: 2,
    title: 'Приставы возьмутся за кредит',
    text: 'Через 12 месяцев по решению суда Ваши долги поступят на исполнение в Федеральную службу судебных приставов.',
  },
  {
    id: 3,
    title: 'Наложат арест на имущество',
    text: 'На счета наложат арест,  запретят выезд за границу, а со всех доходов станут удерживать средства для погашения долга.',
  },
  {
    id: 4,
    title: 'По долгам будут расти %',
    text: 'По вашим долговым обязательствам будут расти проценты, пени, и начисляться штрафы и неустойки.',
  },
];

const HomeTabs = () => {
  const [tabsValue, setTabsValue] = useState('1');
  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <div className="min-h-[550px]">
      <TabContext value={tabsValue}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
              label="Преимущества работы с нами"
              value="1"
            />
            <Tab
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
              label="Финансовые выгоды"
              value="2"
            />
            <Tab
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
              label="Что будет, если не списать долг?"
              value="3"
            />
          </TabList>
        </Box>

        <TabPanel value="1" color="primary">
          <Box sx={{ mt: 2 }}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 6, sm: 12 }}
            >
              {tabOne.map((el) => (
                <TabItem {...el} key={el.id} />
              ))}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Box sx={{ mt: 2 }}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 6, sm: 12 }}
            >
              {tabTwo.map((el) => (
                <TabItem {...el} key={el.id} />
              ))}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value="3">
          <Box sx={{ mt: 2 }}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 6, sm: 12 }}
            >
              {tabThree.map((el) => (
                <TabItem {...el} key={el.id} />
              ))}
            </Grid>
          </Box>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default HomeTabs;
