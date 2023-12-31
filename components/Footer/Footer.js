import Link from 'next/link';
import { pages } from '../Header/NavPanel';
import Socials from '../Contacts/Socials';
import Info from '../Header/Info';

const Footer = ({ socials }) => {
  return (
    <div className="bg-dots-red font-geometria pt-10 pb-4 px-2">
      <div className="max-w-7xl m-auto text-center lg:text-left lg:flex lg:justify-between font-semibold">
        <div>(c) 2023 Все права защищены</div>
        <div>
          <h2 className="mt-5 lg:mt-0 text-center lg:text-left uppercase font-semibold text-lg mb-2">
            Навигация
          </h2>
          <div className="flex flex-col w-40 lg:w-28 m-auto">
            {pages.map((el) => (
              <Link
                href={el.path}
                key={el.id}
                className="px-5 hover:bg-[#4A0A09] hover:text-[#fafafa] rounded-lg"
              >
                {el.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mt-5 lg:mt-0 text-center lg:text-left uppercase font-semibold mb-2">
            Социальные сети
          </h2>
          <Socials justify="justify-center" fill="#fafafa" />
        </div>
        {/* API SOCIALS */}
        {/* <div>
          <ul>
            {socials.map((el) => (
              <li key={el.id}>
                <a href={el.path} target="_blank">
                  {el.icon}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <div>
          <h2 className="mt-5 lg:mt-0 uppercase font-semibold mb-4">
            Контакты
          </h2>
          <Info />
          <div className="my-4 text-sm">+7 988 688 0777</div>
          <div className="text-sm">bankrot.cntr@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
