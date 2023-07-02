import { useInView } from 'react-intersection-observer';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const serviceList = [
  {
    id: 1,
    icon: BalanceRoundedIcon,
    title: 'Банкротство физических лиц',
    text: 'Узнать больше о банкротстве физических лиц',
    path: '/services/bankrotstvograzhdan',
    img: '/images/item1.jpg',
  },
  {
    id: 2,
    icon: GavelRoundedIcon,
    title: 'Банкротство юридических лиц',
    text: 'Узнать больше о банкротстве юридических лиц',
    path: '/services/bankrotstvocompanies',
    img: '/images/item2.jpg',
  },
  {
    id: 3,
    icon: ChatOutlinedIcon,
    title: 'Консультация юриста',
    text: 'Хотите получить личную консультацию по банкротству?',
    path: '/services/cons',
    img: '/images/item3.jpg',
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
      console.log('Работает!');
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${
        shown
          ? 'opacity-100 transition-all translate-x-0 ease-in-out duration-1000'
          : 'opacity-0 translate-y-32'
      }  sm:grid sm:grid-cols-2 lg:grid-cols-3`}
    >
      {serviceList.map((el) => (
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
      ))}
    </div>

    // <div>
    //   <div className="mb-4">
    //     <h3 className="font-bold text-3xl text-center text-[#4A0A09]">
    //       {title}
    //     </h3>
    //   </div>
    //   <div className="grid md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-3 md:gap-5 lg:gap-10 text-center">
    //     {serviceList.map((el) => (
    //       <ServiceItem key={el.id} {...el} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default ServicesList;
