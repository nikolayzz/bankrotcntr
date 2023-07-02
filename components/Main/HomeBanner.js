import HomeCarousel from './HomeCarousel';
import CallForm from './CallForm';
import CallFormButton from './CallFormButton';

const HomeBanner = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-[3fr_1fr] lg:gap-8">
        <div className="h-64 mb-16 md:h-80 lg:min-h-full">
          <HomeCarousel />
        </div>
        <CallForm
          style={`bg-[#843332] max-w-xs m-auto text-white rounded-md p-7 text-center shadow-2xl`}
          button={
            <CallFormButton
              styles={`bg-white text-[#4A0A09] h-12 w-48 rounded-xl mt-4 mb-3 font-semibold hover:bg-[#E2D2D2]`}
            />
          }
        />
      </div>
    </div>
  );
};

export default HomeBanner;
