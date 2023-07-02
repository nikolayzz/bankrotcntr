import NavMobile from './NavMobile';
import { useRouter } from 'next/router';
import HeaderCenter from './HeaderCenter';
import HeaderTop from './HeaderTop';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header
      className={`${
        currentRoute === '/' ? 'h-screen' : ''
      } bg-[#4e0110] m-auto relative`}
    >
      {/* header desktop */}
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

      {/* header mobile for home page */}
      <NavMobile />
    </header>
  );
};

export default Header;
