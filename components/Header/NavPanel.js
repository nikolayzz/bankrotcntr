import Link from "next/link";
import CallButton from "./CallButton";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

export const pages = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    icon: HomeOutlinedIcon,
  },
  {
    id: 2,
    title: "Услуги",
    path: "/services",
    icon: GavelRoundedIcon,
  },
  {
    id: 3,
    title: "Практика",
    path: "/practice",
    icon: CasesOutlinedIcon,
  },
  {
    id: 4,
    title: "Статьи",
    path: "/articles",
    icon: FeedOutlinedIcon,
  },
  {
    id: 5,
    title: "Контакты",
    path: "/contacts",
    icon: AlternateEmailOutlinedIcon,
  },
];

const NavPanel = ({ navbar, activeColor, nonActiveColor }) => {
  return (
    <div
      className={`${
        navbar ? activeColor : nonActiveColor
      } h-10 lg:h-14 flex animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out`}
    >
      <div className="flex m-auto w-4/5">
        {pages.map((el) => (
          <Link
            key={el.id}
            href={el.path}
            className={`${
              navbar ? "text-[#4e0110]" : "text-[#4e0110]"
            } hover:underline hover:underline-offset-8 decoration-[#E3E36A] flex items-center justify-around font-body mr-1 md:mr-2 lg:mr-5 md:px-2 lg:px-3  text-lg uppercase`}
          >
            <div>
              <el.icon />
            </div>
            <div>{el.title}</div>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex w-1/5 items-center h-full animate-pulse hover:scale-105 duration-300">
        <CallButton
          navbar={navbar}
          activeColor={activeColor}
          nonActiveColor={nonActiveColor}
        />
      </div>
    </div>
  );
};

export default NavPanel;
