import Info from './Info';
import LogoHeader from './LogoHeader';
import Phone from './Phone';
import CallButton from './CallButton';
import NavPanel from './NavPanel';
import BurgerMenu from './BurgerMenu';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full relative">
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
      <div className="h-screen sm:hidden flex items-center">
        <div className="flex m-auto flex-col items-center justify-center text-center">
          <Image
            src="/images/m-logo.png"
            height={200}
            width={200}
            alt="logo"
            priority
          />
          <h1 className="uppercase text-3xl font-bold mb-5">
            Центр Банкротства
          </h1>
          <div className="mb-5">
            <Info />
          </div>
          <Phone />
        </div>
      </div>
    </header>
  );
};

export default Header;
