import HomeBanner from './HomeBanner';
import HomeTabs from './HomeTabs';
import HomeText from './HomeText';
import ServicesList from '../Services/ServicesList';

const MainHome = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div className="my-16">
        <HomeText />
      </div>
      <div className="my-16">
        <ServicesList title={'Услуги'} />
      </div>
      <div>
        <HomeTabs />
      </div>
    </div>
  );
};

export default MainHome;
