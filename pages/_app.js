import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
  return (
    <ThemeProvider theme={theme}>
      <div className={`${montserrat.className} text-[#fafafa]`}>
        <Header />
        <div className="mt-10">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
