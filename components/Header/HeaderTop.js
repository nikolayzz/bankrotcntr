import { useRouter } from 'next/router';
import CallButton from './CallButton';
import NavPanel from './NavPanel';

const HeaderTop = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out
  // transition-all ease-in-out duration-1000
  return (
    <div
      className={`${
        currentRoute === '/' ? 'pt-10' : ''
      } transition-all ease-in-out duration-1000 animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out `}
    >
      {currentRoute === '/' ? (
        ''
      ) : (
        <div className=" h-24 flex justify-between items-center text-[#fafafa]">
          <div className="animate-fade-right animate-once animate-duration-[2500ms] animate-delay-100 animate-ease-out">
            <h5 className="sm:p-4 uppercase text-xl font-bold">
              Центр Банкротства
            </h5>
          </div>
        </div>
      )}
      <div className="hidden md:block transition-all ease-in-out duration-1000">
        <NavPanel />
      </div>
    </div>
  );
};

export default HeaderTop;
