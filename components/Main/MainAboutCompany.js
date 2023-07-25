import Image from 'next/image';

const MainAboutCompany = () => {
  return (
    <div className="m-auto flex flex-col pt-3">
      <div className="lg:flex m-auto items-center">
        <div className="lg:w-1/2">
          <div className="text-lg md:text-xl">
            <div>
              <span className="font-semibold">Центр Банкротства</span> - это
              юридическая фирма, оказывающая услуги по сопровождению дел о
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
            src="/images/book-and-hammer.svg"
            width={500}
            height={500}
            alt="book-and-hammer"
          />
        </div>
      </div>
    </div>
  );
};

export default MainAboutCompany;
