import Socials from "@/components/Contacts/Socials";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { motion } from "framer-motion";
import Head from "next/head";

const Contacts = () => {
  return (
    <motion.div className="bg-dots-red p-2">
      <Head>
        <title>Контакты</title>
      </Head>
      <div className="max-w-7xl m-auto">
        <h1 className=" font-bold text-3xl text-center">Контакты</h1>
        <div className="my-5">
          <div>
            <h3 className="font-semibold text-xl">Адрес:</h3>
            <p>Наш офис расположен в центральной части города.</p>
            <p>
              Республика Калмыкия, город Элиста, ул. Братьев Алехиных, д. 29
            </p>
          </div>
          <div className="my-5">
            <h3 className="font-semibold text-xl">Время работы:</h3>
            <p>Ежедневно с 09:00 до 18:00</p>
          </div>
          <YMaps>
            <div>
              <Map
                width={"100%"}
                defaultState={{ center: [46.310264, 44.264486], zoom: 17 }}
              >
                <Placemark geometry={[46.310264, 44.264486]} />
              </Map>
            </div>
          </YMaps>

          <div className="my-5">
            <h3 className="font-semibold text-xl">Телефон:</h3>
            <p>+7 988 688 0777</p>
          </div>
          <div className="my-5">
            <h3 className="font-semibold text-xl mb-1">Социальные сети:</h3>
            <div>
              <Socials fill="white" />
            </div>
          </div>
          <div className="my-5">
            <h3 className="font-semibold text-xl">E-mail:</h3>
            <p>bankrot.cntr@gmail.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
