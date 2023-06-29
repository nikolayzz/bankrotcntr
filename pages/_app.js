import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["cyrillic"],
});

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: {
      main: "#4A0A09",
    },
    bgButton: "#fafafa",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container className={montserrat.className}>
        <div className="text-[#4A0A09]">
          <Header />
          <div className="mt-28">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  );
}
