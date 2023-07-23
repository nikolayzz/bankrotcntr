import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, List, ListItem, SwipeableDrawer } from '@mui/material';
import { pages } from '../Header/NavPanel';
import Socials from '../Contacts/Socials';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (key) => {
    setOpen(key);
  };

  return (
    <>
      <button onClick={() => toggleDrawer(true)} className="text-[#4e0110] ">
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
        <Box onClick={() => toggleDrawer(false)}>
          <div className="bg-[#fafafa] py-5 flex justify-center items-center">
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
              <CloseIcon
                fontSize="large"
                viewBox="0 0 20 20"
                // sx={{ position: 'absolute', top: '35px', right: '20px' }}
              />
            </div>
          </div>

          <List sx={{ paddingTop: '30px' }}>
            {/* <Divider /> */}
            {pages.map((el) => (
              <div key={el.id}>
                <ListItem sx={{ paddingBottom: '30px' }}>
                  <Link className="w-full text-xl text-center" href={el.path}>
                    {el.title}
                  </Link>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>

          <div className="bg-[#fafafa] h-28 flex justify-center items-center absolute bottom-0 right-0 left-0 ">
            <Socials fill={'#4A0A09'} />
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
