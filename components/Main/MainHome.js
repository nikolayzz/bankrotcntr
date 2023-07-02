import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HomeTabs from './HomeTabs';
import ServicesList from '../Services/ServicesList';
import Banner from './Banner';

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
    <>
      {/* баннер и услуги */}
      <div className="min-h-screen m-auto">
        <div className="max-w-7xl m-auto">
          <div className="min-h-screen m-auto bg-[#fafafa] flex flex-col">
            <div className="hidden sm:block">
              <Banner />
            </div>
            <div className="py-10">
              <ServicesList />
            </div>
          </div>
        </div>
      </div>
      {/* миссия и текст */}
      <div className="bg-[#4e0110] m-auto min-h-screen">
        <div className="max-w-7xl m-auto p-10">
          <div className="text-[#E3E36A]">
            <div className="border-l-4 border-[#E3E36A] pl-5">
              <h2 className="uppercase text-lg md:text-xl lg:text-3xl font-semibold">
                Наша главная цель
              </h2>
              <span className="text-lg md:text-xl text-white">
                — дать возможность гражданам, которые столкнулись с финансовыми
                проблемами, воспользоваться своим ЗАКОННЫМ ПРАВОМ на списание
                долгов.
              </span>
            </div>
          </div>

          {/* <div className="m-auto">
            <HomeTabs />
          </div> */}
        </div>
      </div>
    </>

    // <div>
    //   <div className="hidden m-auto md:flex items-center">
    //     <Banner />
    //   </div>
    //   <div className="mt-2 mb-14">
    //     <TextCarousel />
    //   </div>
    //   <div className="">
    //     <ServicesList title={'Услуги'} />
    //   </div>
    //   <div className="bg-[#4E0110] text-[#E3E36A] rounded-md p-16 mt-16 mb-10">
    //     <div className="border-l-4 border-[#E3E36A] pl-5">
    //       <h2 className="uppercase text-lg md:text-xl lg:text-3xl font-semibold">
    //         Наша главная цель
    //       </h2>
    //       <span className="text-lg md:text-xl text-white">
    //         — дать возможность гражданам, которые столкнулись с финансовыми
    //         проблемами, воспользоваться своим ЗАКОННЫМ ПРАВОМ списания долгов.
    //       </span>
    //     </div>
    //   </div>

    //   <div
    //     ref={ref}
    //     className={`${
    //       textShown
    //         ? 'opacity-100 transition-all translate-x-0 ease-in-out duration-1000'
    //         : 'opacity-0 translate-y-32'
    //     }  my-16 grid md:grid-cols-[3fr,_1fr] gap-2`}
    //   >
    //     <HomeText />
    //     <CallForm
    //       style={`bg-[#843332] max-w-xs m-auto text-white rounded-md p-7 text-center shadow-2xl`}
    //       button={
    //         <CallFormButton
    //           styles={`bg-white text-[#4A0A09] h-12 w-48 rounded-xl mt-4 mb-3 font-semibold hover:bg-[#E2D2D2]`}
    //         />
    //       }
    //     />
    //   </div>

    //   <div>
    //     <HomeTabs />
    //   </div>
    // </div>
  );
};

export default MainHome;
