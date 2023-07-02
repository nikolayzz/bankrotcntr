import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const HeaderCenter = () => {
  return (
    <>
      <div>
        <h1 className="text-8xl pt-10 font-body">Центр Банкротства</h1>
        <h3 className="text-3xl my-10 uppercase">
          Федеральная юридическая компания
        </h3>
        <div className="ml-96 pt-16">
          <h2 className="text-3xl uppercase ">
            БАНКРОТСТВО ФИЗИЧЕСКИХ И ЮРИДИЧЕСКИХ ЛИЦ В ЛЮБОМ ГОРОДЕ С ГАРАНТИЕЙ
            РЕЗУЛЬТАТА
          </h2>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 animate-bounce">
        <ArrowDownwardRoundedIcon fontSize="large" />
      </div>
    </>
  );
};

export default HeaderCenter;
