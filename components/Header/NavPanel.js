"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NavPanel.module.css";

export const pages = [
  {
    id: 1,
    title: "Главная",
    path: "/",
  },
  {
    id: 2,
    title: "Услуги",
    path: "/services",
  },
  {
    id: 3,
    title: "Практика",
    path: "/practice",
  },
  {
    id: 4,
    title: "Статьи",
    path: "/articles",
  },
  {
    id: 5,
    title: "Контакты",
    path: "/contacts",
  },
];

const NavPanel = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="bg-[#843332] h-16 lg:h-20 absolute top-20 left-0 right-0 shadow-lg">
      <div className="flex justify-center m-auto h-16 lg:h-20">
        {pages.map((el) => (
          <Link
            key={el.id}
            href={el.path}
            className={`${
              currentRoute === el.path ? styles.active : styles.nonActive
            } flex items-center justify-around mr-1 md:mr-2 lg:mr-5 px-1 md:px-2 lg:px-8 font-bold text-white text-lg uppercase`}
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavPanel;
