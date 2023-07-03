import Link from 'next/link';
import CallButton from './CallButton';

export const pages = [
  {
    id: 1,
    title: 'Главная',
    path: '/',
  },
  {
    id: 2,
    title: 'Услуги',
    path: '/services',
  },
  {
    id: 3,
    title: 'Практика',
    path: '/practice',
  },
  {
    id: 4,
    title: 'Статьи',
    path: '/articles',
  },
  {
    id: 5,
    title: 'Контакты',
    path: '/contacts',
  },
];

const NavPanel = () => {
  return (
    <div className="bg-[#4E0110] h-16 lg:h-20 flex animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
      <div className="flex m-auto h-16 lg:h-20 w-4/5">
        {pages.map((el) => (
          <Link
            key={el.id}
            href={el.path}
            className="hover:underline hover:underline-offset-8 decoration-[#E3E36A] flex items-center justify-around font-body mr-1 md:mr-2 lg:mr-5 md:px-2 lg:px-3 text-[#fafafa] text-lg uppercase"
          >
            {el.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex w-1/5 items-center h-full hover:animate-pulse hover:scale-105 duration-300">
        <CallButton />
      </div>
    </div>
  );
};

export default NavPanel;
