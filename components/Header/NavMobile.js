import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import Info from './Info';
import Phone from './Phone';

const NavMobile = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={`${
        currentRoute === '/' ? 'h-screen' : ''
      }  sm:hidden flex items-center`}
    >
      <div
        className={`${
          currentRoute === '/' ? '' : 'relative'
        } flex m-auto flex-col items-center justify-center text-center`}
      >
        <Link href="/">
          <div className="flex flex-col items-center">
            <Image
              src="/images/m-logo.png"
              height={100}
              width={currentRoute === '/' ? '200' : '150'}
              alt="logo"
              priority
            />
            <h1 className="uppercase text-3xl font-bold mb-5">
              Центр Банкротства
            </h1>
          </div>
        </Link>
        <div className="mb-5">
          <Info />
        </div>
        <Phone />
        <div className={`absolute top-10 right-1`}>
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
