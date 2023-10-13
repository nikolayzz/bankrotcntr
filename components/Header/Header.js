import Image from "next/image";
import NavPanel from "./NavPanel";
import Info from "./Info";
import Phone from "./Phone";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* pc */}
      <div className="hidden md:block">
        <div className="max-w-7xl m-auto text-[#4e0110] py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="images/mini-logo1.svg"
                width={50}
                height={50}
                alt="logo"
              />
              <span className="ml-5 text-xl font-semibold">
                Центр Банкротства
              </span>
            </Link>
            <div>
              <Info />
              <Phone />
            </div>
          </div>
        </div>
        <div className="flex bg-dots-red h-20 text-white m-auto justify-center items-center">
          <nav className="max-w-7xl m-auto">
            <NavPanel />
          </nav>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden m-auto py-5 relative text-[#4e0110]">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="images/mini-logo1.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="absolute right-5 top-7 md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
