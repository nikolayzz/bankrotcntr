import NavMobile from './NavMobile';
import { useRouter } from 'next/router';
import HeaderCenter from './HeaderCenter';
import HeaderTop from './HeaderTop';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header
      className={`${
        currentRoute === '/' ? 'h-screen' : ''
      } bg-[#4e0110] m-auto relative`}
    >
      <div className="px-7">
        <div className="hidden sm:block max-w-7xl m-auto">
          {currentRoute === '/' ? (
            <>
              <HeaderTop />
              <HeaderCenter />
            </>
          ) : (
            <HeaderTop />
          )}
        </div>
        <NavMobile />
        <div className="absolute top-8 right-1 md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
