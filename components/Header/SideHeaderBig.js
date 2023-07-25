import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import BurgerMenu from './BurgerMenu';
import React, { useContext } from 'react';
import { pages } from './NavPanel';
import Link from 'next/link';
import Image from 'next/image';
import Info from './Info';
import { Context } from '@/pages/_app';

const SideHeaderBig = () => {
  const props = useContext(Context);
  const openSideHeader = props.openSideHeader;
  const setOpenSideHeader = props.setOpenSideHeader;
  console.log(openSideHeader);
  const handleOpenSideHeader = () => {
    setOpenSideHeader(!openSideHeader);
  };

  return (
    <header
      className={`w-full ${
        openSideHeader ? 'lg:w-48' : 'lg:w-32'
      } duration-200 fixed top-0  lg:left-0  lg:h-full  flex justify-center items-center z-50 bg-white lg:bg-inherit text-[#4e0110]`}
    >
      <nav
        className={`${
          openSideHeader ? 'lg:p-5' : 'lg:px-2 lg:py-5'
        } w-full h-full m-auto flex flex-col items-center relative`}
      >
        <div className="lg:h-1/5">
          <Link href="/">
            <Image src="/images/mini-logo1.svg" width={60} height={60} />
          </Link>
        </div>
        <div className="hidden lg:block mb-10">
          <span
            className={`${
              openSideHeader ? 'text-sm ' : 'text-xs'
            } font-semibold`}
          >
            +7 988 688 0777
          </span>
        </div>
        <div className="hidden lg:h-2/5 lg:flex flex-col text-lg font-semibold">
          {pages.map((el) => (
            <Link
              key={el.id}
              href={el.path}
              className="mx-3 my-2 hover:text-[#E3E36A] hover:underline underline-offset-8 "
            >
              <div className="flex items-center">
                <div className="lg: pr-2">
                  <el.icon />
                </div>
                {openSideHeader ? <div>{el.title}</div> : <div></div>}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:block lg:h-1/5">
          <Info />
        </div>

        <div className="absolute right-5 lg:hidden">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default SideHeaderBig;
