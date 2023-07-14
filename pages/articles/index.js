import Head from "next/head";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <motion.div className="bg-dots-red font-geometria p-2">
      <Head>
        <title>Статьи по банкротству</title>
      </Head>
      <div className="max-w-7xl m-auto">
        <h1>Статьи по банкротству</h1>
      </div>
    </motion.div>
  );
};

export default Articles;
