import { useRouter } from 'next/router';
import BurgerMenu from './BurgerMenu';
import React from 'react';
import { pages } from './NavPanel';
import Link from 'next/link';
import Image from 'next/image';
import Info from './Info';
import Phone from './Phone';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  //backdrop-blur-xl backdrop-saturate-150 sticky top-0 z-50 bg-[#ffffff]/30 text-[#4e0110]/70 w-full h-16 transition-all duration-500
  return (
    <header className="z-50 text-[#4e0110] flex justify-center items-center lg:block">
      <nav className="max-w-7xl m-auto flex items-center justify-between relative lg:p-2">
        <div className="">
          <Link href="/">
            <Image src="/images/mini-logo1.svg" width={60} height={60} />
          </Link>
        </div>
        <div className="hidden lg:block text-lg font-semibold">
          {pages.map((el) => (
            <Link
              key={el.id}
              href={el.path}
              className="mx-3 hover:text-[#E3E36A] hover:underline underline-offset-8"
            >
              {el.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Info />
          <Phone />
        </div>
        {/* <div className="hidden lg:block animate-pulse">
          {currentRoute === '/' ? (
            <Link href="#consult">Связаться с нами</Link>
          ) : (
            <CallButton />
          )}
        </div> */}
      </nav>

      <div className="absolute right-5 lg:hidden">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
