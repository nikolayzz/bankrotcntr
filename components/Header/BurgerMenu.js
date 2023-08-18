import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, List, ListItem, SwipeableDrawer } from '@mui/material';
import { pages } from '../Header/NavPanel';
import Socials from '../Contacts/Socials';
import Phone from './Phone';
import Info from './Info';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (key) => {
    setOpen(key);
  };

  return (
    <>
      <button onClick={() => toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </button>

      <SwipeableDrawer
        PaperProps={{
          sx: {
            width: '70%',
            backgroundColor: '#4e0110',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            color: '#fafafa',
            fontWeight: 'bold',
          },
        }}
        anchor="right"
        open={open}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        <div className="h-full" onClick={() => toggleDrawer(false)}>
          <div className="py-5 bg-[#fafafa] flex justify-center items-center">
            <Image
              src="/images/mini-logo1.svg"
              height={80}
              width={80}
              alt="logo"
            />

            <div
              className="text-[#4e0110] absolute top-9 right-4"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon fontSize="large" viewBox="0 0 20 20" />
            </div>
          </div>

          <List>
            {/* <Divider /> */}
            {pages.map((el) => (
              <div key={el.id} className="py-2">
                <ListItem>
                  <Link className="w-full text-xl text-center" href={el.path}>
                    {el.title}
                  </Link>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>

          <div className="mt-10 pt-10">
            <div className="flex flex-col justify-center items-center text-xs text-center">
              <Phone />
              <div className="py-3">
                Республика Калмыкия, город Элиста, ул. Братьев Алехиных, д. 29
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <Socials fill={'#ffffff'} />
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
