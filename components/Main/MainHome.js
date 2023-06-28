import Services from "@/pages/services";
import HomeBanner from "./HomeBanner";
import HomeTabs from "./HomeTabs";
import HomeText from "./HomeText";

const MainHome = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div className="my-16">
        <Services />
      </div>
      <div className="my-16">
        <HomeText />
      </div>
      <div>
        <HomeTabs />
      </div>
    </div>
  );
};

export default MainHome;
