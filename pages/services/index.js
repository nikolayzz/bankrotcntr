import ServicesList from '@/components/Services/ServicesList';

const Services = () => {
  return (
    <div className="text-[#4E0110] max-w-7xl m-auto">
      <h1 className="font-bold text-3xl text-center">Услуги</h1>
      <h2 className="my-4 text-center font-semibold text-xl">
        Получите квалифицированную юридическую помощь в нашей компании.
      </h2>
      <ServicesList />
    </div>
  );
};

export default Services;
