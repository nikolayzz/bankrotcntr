import React from 'react';
import {
  useTransform,
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { pages } from './NavPanel';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import { useRouter } from 'next/router';

export default function FramerMotionHeader() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const scrollYRange = [0, 100, 100];

  const motionValueScrollYFactory = (values) => {
    return useTransform(scrollY, scrollYRange, values);
  };

  const containerHeight = motionValueScrollYFactory(['100px', '60px', '60px']);
  const imageSize = motionValueScrollYFactory([70, 40, 40]);
  const fontSize = motionValueScrollYFactory(['1.4rem', '1rem', '1rem']);
  const opacity = motionValueScrollYFactory([1, 0, 0]);
  const fontAddress = motionValueScrollYFactory(['0.75rem', '0rem', '0rem']);
  const showAdress = motionValueScrollYFactory(['block', 'none', 'none']);
  const paddingHeaderX = motionValueScrollYFactory(['30px', '20px', '20px']);

  // uncomment to check values
  // scrollY.onChange((val) => console.log(`useViewportScroll.y: ${val}`));

  const controls = useAnimation();
  const delta = React.useRef(0);
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, 'change', (val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }

    // console.log(`val: ${val}`);
    // console.log(`delta: ${delta.current}`);
    // console.log(`lastScrollY: ${lastScrollY.current}`);

    if (delta.current >= 10 && val > 200) {
      controls.start('hidden');
    } else if (delta.current <= -10 || val < 200) {
      controls.start('visible');
    }
    lastScrollY.current = val;
  });

  const handleIconClick = (event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <motion.div
      initial="visible"
      animate={controls}
      variants={{
        visible: { top: '0px' },
        hidden: { top: '-100px' },
      }}
      // transition={{ duration: 1 }}
      style={{
        height: containerHeight,
        paddingLeft: paddingHeaderX,
        paddingRight: paddingHeaderX,
      }}
      className="h-20 bg-dots-red fixed w-full z-50 text-white flex justify-between items-center"
    >
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <motion.img
          src="/images/mini-logo1.svg"
          style={{ width: imageSize, height: imageSize }}
          alt="mini-logo1"
          className="bg-white border-4 md:w-1/4 hover:cursor-pointer"
          onClick={handleIconClick}
        />
        <div className="hidden md:flex ">
          {pages.map((el) => (
            <Link
              key={el.id}
              href={el.path}
              className="mx-3 my-2 hover:text-[#E3E36A] hover:underline underline-offset-8"
            >
              <div className="flex items-center">
                <div className="lg:pr-2">{/* <el.icon /> */}</div>
                <motion.div style={{ fontSize }}>{el.title}</motion.div>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:block w-1/4">+7 988 688 0777</div>

        <div className="absolute right-5 md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </motion.div>
  );
}
