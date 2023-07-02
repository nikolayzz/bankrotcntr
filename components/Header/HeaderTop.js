import { useRouter } from 'next/router';
import CallButton from './CallButton';
import NavPanel from './NavPanel';

const HeaderTop = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={`${
        currentRoute === '/' ? 'pt-10' : ''
      } transition-all ease-in-out duration-1000`}
    >
      {currentRoute === '/' ? (
        ''
      ) : (
        <div className="transition-all ease-in-out duration-1000 h-24 flex justify-between items-center text-[#fafafa]">
          <div>
            <h5 className="uppercase text-xl font-bold">Центр Банкротства</h5>
          </div>
        </div>
      )}
      <div className="hidden sm:block transition-all ease-in-out duration-1000">
        <NavPanel />
      </div>
    </div>
  );
};

export default HeaderTop;
