import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
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

  return (
    <div
      className={`${
        shown
          ? 'animate-fade animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out'
          : ''
      }`}
    >
      <Image
        ref={ref}
        className="m-auto transition-all translate-x-0 ease-in-out duration-1000"
        src="/images/mini-banner.jpg"
        height={500}
        width={800}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
