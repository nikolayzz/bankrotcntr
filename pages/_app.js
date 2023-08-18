import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { createContext, useState } from 'react';
import { AnimatePresence, easeOut } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const Context = createContext('');

const montserrat = Montserrat({
  weight: '400',
  subsets: ['cyrillic'],
});

const theme = createTheme({
  typography: {
    fontFamily: [
      "'Montserrat', sans-serif",
      "'Roboto Condensed', sans-serif",
    ].join(','),
  },
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#E3E36A',
    },
  },
});

export default function App({ Component, pageProps }) {
  const [openSideHeader, setOpenSideHeader] = useState(true);

  const router = useRouter();

  return (
    <Context.Provider value={{ openSideHeader, setOpenSideHeader }}>
      <ThemeProvider theme={theme}>
        <div className="font-geometria text-[#fafafa]">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.75,
                ease: easeOut,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {},
              }}
            >
              <Header />
              <div>
                <Component {...pageProps} />
              </div>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}
