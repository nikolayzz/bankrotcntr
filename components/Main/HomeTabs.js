import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const tabStyles = {
  color: '#fafafa',
};

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            sx={tabStyles}
            label="Преимущества работы с нами"
            {...a11yProps(0)}
          />
          <Tab sx={tabStyles} label="Финансовые выгоды" {...a11yProps(1)} />
          <Tab
            sx={tabStyles}
            label="Что будет, если не списать долг?"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="grid grid-cols-2">
          {tabOne.map((el) => (
            <div
              key={el.id}
              className="w-96 flex flex-col items-center justify-center"
            >
              <div className="bg-[#E3E36A]">{el.title}</div>
              <div>{el.text}</div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabTwo.map((el) => (
          <div key={el.id}>
            <div>{el.title}</div>
            <div>{el.text}</div>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tabThree.map((el) => (
          <div key={el.id}>
            <div>{el.title}</div>
            <div>{el.text}</div>
          </div>
        ))}
      </TabPanel>
    </Box>
  );
}

// <div className="min-h-[550px]">
//   <TabContext value={tabsValue}>
//     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//       <TabList onChange={handleChange} variant="fullWidth">
//         <Tab sx={tabStyles} label="Преимущества работы с нами" value="1" />
//         <Tab sx={tabStyles} label="Финансовые выгоды" value="2" />
//         <Tab
//           sx={tabStyles}
//           label="Что будет, если не списать долг?"
//           value="3"
//         />
//       </TabList>
//     </Box>

//     <TabPanel value="1">
//       <Box sx={{ mt: 2 }}>
//         <Grid
//           container
//           justifyContent="center"
//           spacing={2}
//           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           columns={{ xs: 6, sm: 12 }}
//         >
//           {tabOne.map((el) => (
//             <TabItem {...el} key={el.id} />
//           ))}
//         </Grid>
//       </Box>
//     </TabPanel>

//     <TabPanel value="2">
//       <Box sx={{ mt: 2 }}>
//         <Grid
//           container
//           justifyContent="center"
//           spacing={2}
//           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           columns={{ xs: 6, sm: 12 }}
//         >
//           {tabTwo.map((el) => (
//             <TabItem {...el} key={el.id} />
//           ))}
//         </Grid>
//       </Box>
//     </TabPanel>

//     <TabPanel value="3">
//       <Box sx={{ mt: 2 }}>
//         <Grid
//           container
//           justifyContent="center"
//           spacing={2}
//           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           columns={{ xs: 6, sm: 12 }}
//         >
//           {tabThree.map((el) => (
//             <TabItem {...el} key={el.id} />
//           ))}
//         </Grid>
//       </Box>
//     </TabPanel>
//   </TabContext>
// </div>

export default HomeTabs;
