import Image from 'next/image';

const MainAboutCompany = () => {
  return (
    <section className="max-w-7xl m-auto flex flex-col pt-3">
      <h1 className="text-2xl md:text-4xl animated-text text-[#E3E36A]">
        Кто мы?
      </h1>
      <div className="lg:flex m-auto items-center">
        <div className="lg:w-1/2"></div>
        <div className="hidden lg:block pt-5">
          <Image
            src="/images/lawyer1.svg"
            width={400}
            height={400}
            alt="lawyer1"
          />
        </div>
      </div>
    </section>
  );
};

export default MainAboutCompany;
