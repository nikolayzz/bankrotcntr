import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const textSlides = [
  {
    id: 1,
    title: 'Помогаем избавиться от долгов',
  },
  // {
  //   id: 2,
  //   title:
  //     'Банкротство физических и юридических лиц в любом городе с гарантией результата',
  // },
  // {
  //   id: 3,
  //   title: `Процедура банкротства — единственный законный способ избавиться от долгов`,
  // },
  {
    id: 4,
    title: 'Центр Банкротства',
  },
];

const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentSlide === textSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }, [currentSlide, textSlides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);

  return (
    <div className="flex items-center text-[#fafafa] h-96 text-2xl md:text-8xl pt-10 font-body ">
      {textSlides[currentSlide].title}
    </div>
  );
};

export default TextCarousel;

// animate-fade-left animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out
