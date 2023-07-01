import Info from './Info';
import LogoHeader from './LogoHeader';
import Phone from './Phone';
import CallButton from './CallButton';
import NavPanel from './NavPanel';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="mt-4 sm:mt-0 relative">
      <div className="h-24 flex justify-between items-center text-[#4A0A09]">
        <LogoHeader isText={true} />
        <div className="hidden lg:inline-block">
          <Info />
        </div>
        <div className="hidden md:inline-block">
          <Phone />
        </div>
        <div className="hidden md:inline-block">
          <CallButton />
        </div>
        <div className="inline-block sticky md:hidden">
          <BurgerMenu />
        </div>
      </div>
      <div className="hidden sm:inline-block sm:w-full">
        <NavPanel />
      </div>
    </header>
  );
};

export default Header;
