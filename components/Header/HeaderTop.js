import { useRouter } from 'next/router';
import CallButton from './CallButton';
import NavPanel from './NavPanel';

const HeaderTop = ({ navbar, activeColor, nonActiveColor }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out
  // transition-all ease-in-out duration-1000

  return (
    <div
      className={`${
        navbar ? activeColor : nonActiveColor
      } transition-all ease-in-out duration-1000 animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out `}
    >
      {currentRoute === '/' ? (
        ''
      ) : (
        <div className=" h-10 flex justify-between items-center ">
          <div className="animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            <h5 className="sm:p-4 uppercase text-xl font-bold">
              Центр Банкротства
            </h5>
          </div>
        </div>
      )}
      <div className="hidden md:block transition-all ease-in-out duration-1000">
        <NavPanel
          navbar={navbar}
          activeColor={activeColor}
          nonActiveColor={nonActiveColor}
        />
      </div>
    </div>
  );
};

export default HeaderTop;
