import ServicesList from '../Services/ServicesList';
import HomeTabs from './HomeTabs';
import ContactForm from './ContactForm';
import MainStart from './MainStart';
import MainAboutCompany from './MainAboutCompany';
import MainAboutBankruptcy from './MainAboutBankruptcy';
import WhyUs from './HomeText';
import Anketa from './Anketa';
import Test from './Test';

const MainHome = (props) => {
  return (
    <main>
      {/* Приветствие */}
      <MainStart />

      {/* О компании */}
      {/* <MainAboutCompany /> */}

      {/* Что такое банкротство */}
      <MainAboutBankruptcy />

      {/* Почему наша компания */}
      <WhyUs />

      {/* Услуги */}
      <ServicesList />

      {/* tabs */}
      <HomeTabs />

      {/* Анкета */}
      <Anketa />

      {/* Форма */}
      <ContactForm />

      {/* Test */}
      {/* <Test /> */}
    </main>
  );
};

export default MainHome;
