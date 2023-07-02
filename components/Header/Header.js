import Info from './Info';
import LogoHeader from './LogoHeader';
import Phone from './Phone';
import CallButton from './CallButton';
import NavPanel from './NavPanel';
import BurgerMenu from './BurgerMenu';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header className="bg-[#4e0110] m-auto h-screen relative">
      {/* header desktop */}
      <div className="hidden sm:block max-w-7xl m-auto">
        <div className="h-24 flex justify-between items-center text-[#fafafa]">
          <div>
            <h5 className="uppercase text-xl font-bold">Центр Банкротства</h5>
          </div>

          <div className="hidden md:block">
            <CallButton />
          </div>
          <div className="block sticky sm:hidden">
            <BurgerMenu />
          </div>
        </div>
        <div className="hidden sm:inline-block sm:w-full">
          <NavPanel />
        </div>
        <h1 className="text-8xl">Центр Банкротства</h1>
        <h3 className="text-4xl my-10">Юридическая компания</h3>

        <div className="ml-96">
          <h2 className="text-5xl">
            БАНКРОТСТВО ФИЗИЧЕСКИХ И ЮРИДИЧЕСКИХ ЛИЦ В ЛЮБОМ ГОРОДЕ РОССИИ С
            ГАРАНТИЕЙ РЕЗУЛЬТАТА
          </h2>
        </div>
      </div>

      {/* header mobile for home page */}
      <NavMobile />
    </header>
  );
};

export default Header;
