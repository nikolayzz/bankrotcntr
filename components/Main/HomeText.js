import { Box, Grid } from '@mui/material';

const text = [
  {
    id: 1,
    text: 'Гарантируем полное списание долга.',
  },
  {
    id: 2,
    text: 'Бесплатно проводим анализ и оцениваем шансы.',
  },
  {
    id: 3,
    text: 'Фиксируем цену. Цена услуг не меняется.',
  },
  {
    id: 4,
    text: 'Даем рассрочку. Платите по этапам процедуры.',
  },
  {
    id: 5,
    text: 'Делаем всю работу "под ключ".',
  },
  {
    id: 6,
    text: 'Сохраняем конфиденциальность.',
  },
];

const HomeText = () => {
  return (
    <div>
      <div className="text-2xl mb-5 font-bold text-center uppercase text-[#4A0A09]">
        почему для списания долгов обращаются к нам
      </div>
      <div className="grid md:grid-cols-[1fr,_1fr] gap-5">
        {text.map((el) => (
          <div key={el.id} className="text-xl text-center md:text-left">
            {el.text}
          </div>
        ))}
      </div>
    </div>

    // <Box>
    //   <div className="text-2xl mb-7 font-bold text-center uppercase text-[#4A0A09]">
    //     почему для списания долгов обращаются к нам
    //   </div>
    //   <Grid
    //     container
    //     justifyContent="center"
    //     spacing={2}
    //     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    //     sx={{ fontSize: "1.3rem" }}
    //   >
    //     <Grid item xs={6}>
    //       Гарантируем полное списание долга
    //     </Grid>
    //     <Grid item xs={6}>
    //       Бесплатно проводим анализ и оцениваем шансы
    //     </Grid>
    //     <Grid item xs={6}>
    //       Фиксируем цену. Цена услуг не меняется
    //     </Grid>
    //     <Grid item xs={6}>
    //       Даем рассрочку. Платите по этапам процедуры
    //     </Grid>
    //     <Grid item xs={6}>
    //       Делаем всю работу "под ключ"
    //     </Grid>
    //     <Grid item xs={6}>
    //       Сохраняем конфиденциальность
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default HomeText;

// old color form #4A0A09
