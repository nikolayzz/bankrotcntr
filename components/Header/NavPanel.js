import Link from 'next/link';

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
  // old color #843332

  // old navbar without mui
  return (
    <div className="bg-[#4E0110] h-16 lg:h-20 rounded-sm">
      <div className="flex m-auto h-16 lg:h-20">
        {pages.map((el) => (
          <Link
            key={el.id}
            href={el.path}
            className={`flex items-center justify-around mr-1 md:mr-2 lg:mr-5 px-1 md:px-2 lg:px-3 text-[#fafafa] text-lg uppercase`}
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavPanel;
