import { useCallback, useEffect, useRef, useState } from 'react';

const textSlides = [
  {
    id: 1,
    title:
      'БАНКРОТСТВО ФИЗИЧЕСКИХ И ЮРИДИЧЕСКИХ ЛИЦ В ЛЮБОМ ГОРОДЕ РОССИИ С ГАРАНТИЕЙ РЕЗУЛЬТАТА',
  },
  {
    id: 2,
    title: `Процедура банкротства — единственный законный способ избавиться от долгов`,
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
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);

  return (
    <div className="flex items-center rounded-sm p-10 bg-[#4E0110] text-[#fafafa]">
      <h2 className="h-24 pt-6 uppercase text-lg md:text-xl lg:text-3xl text-center mb-10 font-semibold">
        {textSlides[currentSlide].title}
      </h2>
    </div>
  );
};

export default TextCarousel;
