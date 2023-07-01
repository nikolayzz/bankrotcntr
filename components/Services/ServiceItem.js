import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ServiceItem = ({ id, title, text, path, icon }) => {
  const [activeItem, setActiveItem] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveItem(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      key={id}
      className={`${
        activeItem
          ? 'opacity-100 transition-all translate-x-0 ease-in-out duration-1000'
          : 'opacity-0 translate-y-32'
      } bg-[#EDEDED] p-5 rounded-xl shadow-md hover:scale-105 ease-in-out duration-300`}
    >
      <icon fontSize="large" />
      <div className="font-semibold my-3">{title}</div>
      <div className="mb-3">{text}</div>
      <Link
        href={path}
        className="links bg-[#843332] text-white py-3 px-7 rounded-3xl"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default ServiceItem;
