import Image from "next/image";

const MainAboutCompany = () => {
  return (
    <section className="max-w-7xl m-auto flex flex-col pt-3">
      <h1 className="text-2xl md:text-4xl animated-text text-[#E3E36A]">
        Кто мы?
      </h1>
      <div className="lg:flex m-auto items-center">
        <div className="lg:w-1/2">
          <div className="text-lg md:text-xl">
            <div>
              <span className="font-semibold text-[#E3E36A]">
                Центр Банкротства
              </span>{" "}
              - это юридическая фирма, оказывающая услуги по сопровождению дел о
              банкротстве как граждан, так и юридических лиц.
            </div>
            <br />
            <div>
              Благодаря узкой специализации нашей фирмы и большому практическому
              опыту нашей команды, мы гарантируем предоставление качественных
              юридических услуг по сопровождению дел о банкротстве.
            </div>
          </div>
        </div>
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
