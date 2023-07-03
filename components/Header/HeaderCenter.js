import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const HeaderCenter = () => {
  return (
    <>
      <div className="font-geometria">
        <h1 className="text-8xl pt-10 font-body animate-fade-left animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
          Центр Банкротства
        </h1>
        <h2 className="text-3xl my-10 uppercase animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
          Федеральная юридическая компания
        </h2>
        <div className="ml-96 pt-16">
          <h2 className="text-3xl uppercase animate-fade-up animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
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
