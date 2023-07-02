import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, List, ListItem, SwipeableDrawer } from '@mui/material';
import { pages } from '../Header/NavPanel';
import NavMobile from './NavMobile';

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
            width: '100%',
            backgroundColor: '#843332',
            color: '#fafafa',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        }}
        anchor="right"
        open={open}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        <Box onClick={() => toggleDrawer(false)}>
          <div className="bg-[#fafafa]">
            <Image
              src="/images/m-logo.png"
              height={100}
              width={100}
              className="h-auto w-auto m-auto"
              alt="logo"
              priority
            />

            <div
              className="absolute top-9 right-5"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon
                fontSize="large"
                color="primary"
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
                  <Link className="w-full text-2xl" href={el.path}>
                    {el.title}
                  </Link>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
