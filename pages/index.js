import MainHome from '@/components/Main/MainHome';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = () => {
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
