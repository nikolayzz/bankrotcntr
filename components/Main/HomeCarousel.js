'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const slides = [
  {
    path: '/images/logo.jpg',
  },
  {
    path: '/images/car1.jpg',
  },
  {
    path: '/images/car2.jpg',
  },
];

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }, [currentSlide, slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);

  return (
    <div className="h-full relative group border-[#843332]/20 rounded-md">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].path})` }}
        className={`bg-[#fafafa] w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500`}
      ></div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-black cursor-pointer"
      >
        <ChevronLeftRoundedIcon color="primary" />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-black cursor-pointer"
      >
        <ChevronRightRoundedIcon color="primary" />
      </div>
      <div className="flex justify-center py-4 top-4">
        {slides.map((el, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="cursor-pointer "
          >
            <FiberManualRecordIcon fontSize="small" color="primary" />
          </div>
        ))}
      </div>
    </div>

    // <div className="bg-[url('/images/logo.jpg')] h-96 bg-contain bg-no-repeat"></div>
  );
};

export default HomeCarousel;
