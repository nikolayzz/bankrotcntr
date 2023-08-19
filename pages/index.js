import MainHome from '@/components/Main/MainHome';
import Head from 'next/head';
import { motion } from 'framer-motion';

// export const getStaticProps = async () => {
//   const url = process.env.NEXT_PUBLIC_API_HOST;
//   const email = process.env.EMAIL;
//   const test = 'test';

//   return {
//     props: { url },
//   };
// };

// export const getServerSideProps = () => {
//   console.log(process.env.PASSWORD);
//   return {
//     props: {},
//   };
// };

const Home = (props) => {
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
