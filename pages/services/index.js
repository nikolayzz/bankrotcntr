import ServicesList from "@/components/Services/ServicesList";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="bg-dots-red font-geometria">
      <div className="max-w-7xl m-auto p-2">
        <h1 className=" text-3xl text-center">Услуги</h1>
        <h2 className="my-4 text-center  text-xl">
          Получите квалифицированную юридическую помощь в нашей компании.
        </h2>
        <ServicesList />
      </div>
    </motion.div>
  );
};

export default Services;
