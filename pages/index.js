import MainHome from "@/components/Main/MainHome";
import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.body.style.opacity = "1";
  }, []);
  return (
    <motion.div>
      <Head>
        <title>Центр Банкротства</title>
      </Head>
      <MainHome />
    </motion.div>
  );
};

export default Home;
