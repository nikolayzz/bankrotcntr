import { useCallback, useEffect, useRef, useState } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

//    {
//   id: 3,
//   title:
//     'Наша главная цель — дать возможность гражданам России, которые столкнулись с финансовыми проблемами и не в состоянии выполнять свои обязательства, воспользоваться своим ЗАКОННЫМ ПРАВОМ списания долгов',
// },

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
    <div
      // style={{ backgroundImage: 'url("images/text-carousel.jpg")' }}
      className="flex items-center"
    >
      <h2 className="h-32 pt-6 uppercase text-lg md:text-xl lg:text-3xl text-center mb-10 font-semibold">
        {textSlides[currentSlide].title}
      </h2>
    </div>
  );
};

export default TextCarousel;
