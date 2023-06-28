import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const serviceList = [
  {
    id: 1,
    icon: BalanceRoundedIcon,
    title: "Банкротство физических лиц",
    text: "Узнать больше о банкротстве физических лиц",
  },
  {
    id: 2,
    icon: GavelRoundedIcon,
    title: "Банкротство юридических лиц",
    text: "Узнать больше о банкротстве юридических лиц",
  },
  {
    id: 3,
    icon: ChatOutlinedIcon,
    title: "Консультация юриста",
    text: "Хотите получить личную консультацию по банкротству?",
  },
];

const Services = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-bold text-3xl text-center text-[#4A0A09]">
          Услуги
        </h3>
      </div>
      <div className="grid md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-3 md:gap-5 lg:gap-10 text-center">
        {serviceList.map((el) => (
          <div key={el.id} className="bg-[#EDEDED] p-5 rounded-xl">
            <el.icon fontSize="large" />
            <div className="font-semibold my-3">{el.title}</div>
            <div className="mb-3">{el.text}</div>
            <button className="bg-[#843332] text-white py-3 px-7 rounded-3xl">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
