import ServicesList from "../Services/ServicesList";
import HomeTabs from "./HomeTabs";
import ContactForm from "./ContactForm";
import MainStart from "./MainStart";
import MainAboutCompany from "./MainAboutCompany";
import MainAboutBankruptcy from "./MainAboutBankruptcy";
import WhyUs from "./HomeText";
import Anketa from "./Anketa";

const MainHome = () => {
  return (
    <main>
      {/* Приветствие */}
      <MainStart />

      {/* О компании
      <MainAboutCompany /> */}

      {/* Что такое банкротство */}
      <MainAboutBankruptcy />

      {/* Почему наша компания */}
      <section className="m-auto ">
        <div className="max-w-7xl m-auto p-10 text-[#4e0110]/80">
          <WhyUs />
        </div>
      </section>

      {/* Услуги */}
      <section className="m-auto">
        <div className="max-w-7xl m-auto p-2 ">
          <ServicesList />
        </div>
      </section>

      {/* tabs */}
      <section className="text-[#fafafa] lg:h-[412px] m-auto ">
        <div className="max-w-7xl m-auto p-10  ">
          <div className="bg-dots-red rounded-3xl lg:py-5">
            <HomeTabs />
          </div>
        </div>
      </section>

      <section className="m-auto ">
        <div className="max-w-7xl m-auto p-10 text-[#4e0110]/80">
          <Anketa />
        </div>
      </section>

      <section>
        <ContactForm />
      </section>
    </main>
  );
};

export default MainHome;
