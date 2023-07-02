import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HomeTabs from './HomeTabs';
import HomeText from './HomeText';
import ServicesList from '../Services/ServicesList';
import Banner from './Banner';
import TextCarousel from './TextCarousel';
import CallForm from './CallForm';
import CallFormButton from './CallFormButton';

const MainHome = () => {
  const [textShown, setTextShown] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setTextShown(true);
    }
  }, [inView]);

  return (
    <div>
      <div className="hidden m-auto md:flex items-center">
        <Banner />
      </div>

      <TextCarousel />
      <div className="my-16">
        <ServicesList title={'Услуги'} />
      </div>
      <div
        ref={ref}
        className={`${
          textShown
            ? 'opacity-100 transition-all translate-x-0 ease-in-out duration-1000'
            : 'opacity-0 translate-y-32'
        }  my-16 grid md:grid-cols-[3fr,_1fr] gap-2`}
      >
        <HomeText />
        <CallForm
          style={`bg-[#843332] max-w-xs m-auto text-white rounded-md p-7 text-center shadow-2xl`}
          button={
            <CallFormButton
              styles={`bg-white text-[#4A0A09] h-12 w-48 rounded-xl mt-4 mb-3 font-semibold hover:bg-[#E2D2D2]`}
            />
          }
        />
      </div>

      <div>
        <HomeTabs />
      </div>
    </div>
  );
};

export default MainHome;
