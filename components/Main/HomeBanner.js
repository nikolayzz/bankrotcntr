import { Input } from "@mui/material";
import HomeCarousel from "./HomeCarousel";

const inputStyle = {
  backgroundColor: "#E2D2D2",
  color: "#843332",
  fontSize: "smaller",
  fontWeight: "bold",
  p: "10px",
  mt: 2,
};

const HomeBanner = () => {
  return (
    <div className="lg:h-96 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-8">
      <div className="h-64 mb-16 md:h-80 lg:min-h-full">
        <HomeCarousel />
      </div>

      <div className="bg-[#843332] text-white rounded-3xl p-7 text-center">
        <div>
          <h3 className="font-bold text-2xl">Он-лайн запись</h3>
          <p>Запишитесь на консультацию</p>
        </div>
        <div>
          <Input placeholder="Имя" sx={inputStyle} />
          <Input placeholder="Номер телефона" sx={inputStyle} />
          <button className="bg-white text-black h-12 w-60 rounded-full mt-4 mb-3 font-semibold hover:bg-[#E2D2D2]">
            Отправить
          </button>
        </div>
        <p>Отправляя форму, Вы соглашаетесь с политикой конфиденциальности.</p>
      </div>
    </div>
  );
};

export default HomeBanner;
