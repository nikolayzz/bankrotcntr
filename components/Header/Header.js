import Info from './Info';
import LogoHeader from './LogoHeader';
import Phone from './Phone';
import CallButton from './CallButton';
import NavPanel from './NavPanel';
import BurgerMenu from './BurgerMenu';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header className="w-full relative">
      {/* header desktop */}
      <div className="hidden sm:block">
        <div className="h-24 flex justify-between items-center text-[#4A0A09]">
          <LogoHeader isText={true} />
          <div className="hidden lg:block">
            <Info />
          </div>
          <div className="hidden md:block">
            <Phone />
          </div>
          <div className="hidden md:block">
            <CallButton />
          </div>
          <div className="block sticky md:hidden">
            <BurgerMenu />
          </div>
        </div>
        <div className="hidden sm:inline-block sm:w-full">
          <NavPanel />
        </div>
      </div>
      {/* header mobile for home page */}
      <NavMobile />
    </header>
  );
};

export default Header;
