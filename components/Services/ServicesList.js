import { useInView } from "react-intersection-observer";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useEffect, useState } from "react";
import Link from "next/link";

const serviceList = [
  {
    id: 1,
    icon: BalanceRoundedIcon,
    title: "Банкротство физических лиц",
    text: "Узнать больше о банкротстве физических лиц",
    path: "/services/bankrotstvograzhdan",
    img: "/images/section-one.jpg",
  },
  {
    id: 2,
    icon: ChatOutlinedIcon,
    title: "Представительство в суде",
    text: "Защищаем Ваши интересы в судебном заседании",
    path: "/services/",
    img: "/images/section-one-one.jpg",
  },
  {
    id: 3,
    icon: GavelRoundedIcon,
    title: "Банкротство юридических лиц",
    text: "Узнать больше о банкротстве юридических лиц",
    path: "/services/bankrotstvocompanies",
    img: "/images/item2.jpg",
  },
  {
    id: 4,
    icon: ChatOutlinedIcon,
    title: "Юридическая консультация",
    text: "Хотите получить личную консультацию по банкротству?",
    path: "/services/cons",
    img: "/images/item3.jpg",
  },
  {
    id: 5,
    icon: ChatOutlinedIcon,
    title: "Внесудебное банкротство",
    text: "Поможем пройти внесудебную процедуру банкротства",
    path: "/services/",
    img: "/images/mfc.png",
  },
];

const ServicesList = ({ title }) => {
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setShown(true);
    }
  }, [inView]);

  // гриды для общей сетки sm:grid sm:grid-cols-2 lg:grid-cols-3

  return (
    <div
      ref={ref}
      className={`${
        shown
          ? "opacity-100 transition-all translate-x-0 ease-in-out duration-1000"
          : "opacity-0 translate-y-32"
      } md:flex md:h-[580px]`}
    >
      <div className="md:h-full md:w-1/3">
        <Link href={serviceList[0].path}>
          <div
            style={{
              backgroundImage: `url(${serviceList[0].img})`,
            }}
            className={`h-72 md:h-full m-1 border text-white bg-cover shadow-2xl hover:scale-105 ease-in-out duration-700`}
          >
            <div className="w-full h-1/3 flex items-center p-10 bg-[#843332]/[0.5]">
              <h2 className="text-xl">{serviceList[0].title}</h2>
            </div>
          </div>
        </Link>
      </div>

      <div className="md:w-2/3 md:grid grid-cols-2">
        {serviceList.map((el, index) => {
          if (index > 0) {
            return (
              <Link key={el.id} href={el.path}>
                <div
                  style={{
                    backgroundImage: `url(${el.img})`,
                  }}
                  className={`h-72 m-1 border text-white bg-cover shadow-2xl hover:scale-105 ease-in-out duration-700`}
                >
                  <div className="w-full h-1/3 flex items-center p-10 bg-[#843332]/[0.5]">
                    <h2 className="text-xl">{el.title}</h2>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ServicesList;
