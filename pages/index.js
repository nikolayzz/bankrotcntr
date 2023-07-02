import MainHome from '@/components/Main/MainHome';
import Head from 'next/head';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);
  return (
    <>
      <Head>
        <title>Банкротство граждан</title>
      </Head>
      <MainHome />
    </>
  );
};

export default Home;
