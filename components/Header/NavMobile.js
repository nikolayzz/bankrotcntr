import { useRouter } from 'next/router';
import Link from 'next/link';
import Info from './Info';
import Phone from './Phone';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const NavMobile = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // flex items-center px-2

  // m-auto flex flex-col items-center justify-center text-center

  return (
    <div className={`${currentRoute === '/' ? 'h-screen' : ''}  sm:hidden `}>
      <div className={`${currentRoute === '/' ? 'pt-24 ' : ''}`}>
        <h2
          className={`${
            currentRoute === '/' ? '' : 'hidden'
          } text-lg uppercase animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out`}
        >
          БАНКРОТСТВО ФИЗИЧЕСКИХ И ЮРИДИЧЕСКИХ ЛИЦ В ЛЮБОМ ГОРОДЕ РОССИИ С
          ГАРАНТИЕЙ РЕЗУЛЬТАТА
        </h2>
        <div>
          <Link href="/">
            <div
              className={`${
                currentRoute === '/' ? 'flex flex-col items-center' : ''
              } animate-fade-down animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out`}
            >
              <h1
                className={`${
                  currentRoute === '/' ? 'mt-20 text-4xl ' : 'py-9'
                } uppercase text-center font-bold`}
              >
                Центр Банкротства
              </h1>
              <h2
                className={`${
                  currentRoute === '/'
                    ? 'text-lg my-5 uppercase text-center'
                    : 'hidden'
                }`}
              >
                Федеральная юридическая компания
              </h2>
            </div>
          </Link>
        </div>

        <div className={`${currentRoute === '/' ? '' : 'hidden'}`}>
          <div className="flex mt-7 justify-center font-semibold animate-fade-up animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            <Phone />
          </div>
          <div className="mt-7 text-center animate-fade-up animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            <Info />
          </div>
        </div>
      </div>
      <div
        className={`${
          currentRoute === '/' ? '' : 'hidden'
        } absolute left-1/2 bottom-10 `}
      >
        <div className="relative -left-1/2 animate-bounce">
          <ArrowDownwardRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
