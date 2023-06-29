import { Input } from "@mui/material";
import HomeCarousel from "./HomeCarousel";

const inputStyle = {
  backgroundColor: "#E2D2D2",
  color: "#4A0A09",
  fontSize: "smaller",
  fontWeight: "bold",
  p: "10px",
  mt: 2,
  borderRadius: "10px",
};

const HomeBanner = () => {
  return (
    <>
      <h1 className="text-xl text-center mb-10 font-semibold">
        Банкротство физических и юридических лиц в любом городе России с
        гарантией результата
      </h1>
      <div className="lg:h-96 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-8">
        <div className="h-64 mb-16 md:h-80 lg:min-h-full">
          <HomeCarousel />
        </div>

        <div className="bg-[#843332] max-w-xs m-auto text-white rounded-3xl p-7 text-center shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Он-лайн запись</h3>
            <p>Запишитесь на консультацию</p>
          </div>
          <div>
            <Input disableUnderline placeholder="Имя" sx={inputStyle} />
            <Input
              disableUnderline
              placeholder="Номер телефона"
              sx={inputStyle}
            />
            <button className="bg-white text-[#4A0A09] h-12 w-60 rounded-full mt-4 mb-3 font-semibold hover:bg-[#E2D2D2]">
              Отправить
            </button>
          </div>
          <p>
            Отправляя форму, Вы соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
