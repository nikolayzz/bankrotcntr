import { useRouter } from 'next/router';
import Link from 'next/link';
import Info from './Info';
import Phone from './Phone';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const NavMobile = ({ navbar, activeColor, nonActiveColor }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  if (!navbar) {
    return (
      <div className="h-screen md:hidden">
        <div>
          <h2 className="text-lg uppercase animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            БАНКРОТСТВО ФИЗИЧЕСКИХ И ЮРИДИЧЕСКИХ ЛИЦ В ЛЮБОМ ГОРОДЕ РОССИИ С
            ГАРАНТИЕЙ РЕЗУЛЬТАТА
          </h2>
          <div>
            <Link href="/">
              <div className="flex flex-col items-center animate-fade-down animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
                <h1 className="mt-20 text-4xl uppercase text-center font-bold">
                  Центр Банкротства
                </h1>
                <h2 className="text-lg my-5 uppercase text-center">
                  Федеральная юридическая компания
                </h2>
              </div>
            </Link>
          </div>

          <div>
            <div className="flex mt-7 justify-center font-semibold animate-fade-up animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
              <Phone />
            </div>
            <div className="mt-7 text-center animate-fade-up animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
              <Info />
            </div>
          </div>
        </div>
        <div>
          <div className="relative -left-1/2 animate-bounce">
            <ArrowDownwardRoundedIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/">
          <div className="flex flex-col items-center animate-fade-down animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            <h1 className="mt-20 text-4xl uppercase text-center font-bold">
              Центр Банкротства
            </h1>
            <h2 className="text-lg my-5 uppercase text-center">
              Федеральная юридическая компания
            </h2>
          </div>
        </Link>
      </div>
    );
  }
};

export default NavMobile;
