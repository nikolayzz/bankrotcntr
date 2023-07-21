import ServicesList from "../Services/ServicesList";
import Image from "next/image";
import HomeTabs from "./HomeTabs";
import HomeText from "./HomeText";
import ContactForm from "./ContactForm";

const MainHome = () => {
  return (
    // стартовый экран
    <div>
      <section className="bg-dots-red text-[#fafafa] m-auto">
        <div className="max-w-7xl m-auto p-2">
          <div className=" lg:flex lg:items-center m-auto">
            <div className="lg:w-1/2 h-full">
              <h1 className="text-2xl sm:text-3xl md:text-5xl animated-text">
                <span className="text-[#E3E36A]">Центр Банкротства</span> -
                помогаем избавиться от долгов
              </h1>
            </div>

            <div className=" lg:w-1/2  flex justify-center">
              <Image
                src="/images/home-logo.svg"
                width={500}
                height={500}
                alt="home-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* баннер и услуги */}
      <section className="text-[#4e0110] m-auto">
        <div className="max-w-7xl m-auto p-2 ">
          <div className="m-auto flex flex-col pt-3">
            <div className="lg:flex m-auto justify-center items-center">
              <div className="hidden lg:block pt-5">
                <Image
                  src="/images/book-and-hammer.svg"
                  width={500}
                  height={500}
                  alt="book-and-hammer"
                />
              </div>
              <div className="lg:w-1/2 lg:ml-5 ">
                <h2 className="font-semibold text-lg md:text-xl lg:text-3xl ">
                  Мы можем решить Вашу проблему
                </h2>
                <div className="text-lg md:text-xl">
                  <div>
                    <span className="">Центр Банкротства</span> - это
                    юридическая фирма, оказывающая услуги по сопровождению дел о
                    банкротстве как граждан, так и юридических лиц.
                  </div>

                  <div>
                    Благодаря узкой специализации нашей фирмы и большому
                    практическому опыту нашей команды, мы гарантируем
                    предоставление качественных юридических услуг по
                    сопровождению дел о банкротстве.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dots-red m-auto">
        <div className="max-w-7xl m-auto p-2 ">
          <ServicesList />
        </div>
      </section>

      <section className="text-[#4e0110]  pt-5 m-auto">
        <div className="max-w-7xl m-auto py-5 p-2 ">
          <h1 className="text-2xl md:text-4xl animated-text">
            Что дает банкротство гражданина?
          </h1>

          <div className="lg:flex lg:items-center m-auto">
            <div className="">
              <Image
                src="/images/question.svg"
                width={500}
                height={500}
                className="rounded-sm pt-5"
                alt="question"
              />
            </div>
            <div className="lg:w-2/3 lg:pl-10">
              <div className="pb-5">
                <h2 className="text-xl font-semibold">Свобода от долгов</h2>
                <p>
                  Больше не надо думать о платежах по кредитам. Суд спишет долги
                  по займам, распискам, ЖКХ, штрафам. Неустойки, штраф и пени
                  будут списаны в полном объеме.
                </p>
                <p>
                  Нельзя списать долги по алиментам, причинению ущерба, долги по
                  субсидиарной ответственности.
                </p>
              </div>
              <div className="pb-5">
                <h2 className="text-xl font-semibold">
                  Прекращение звонков из банков и от коллекторов
                </h2>
                <p>
                  После подачи заявления на банкротство в Арбитражный суд, вас
                  перестанут беспокоить кредиторы и судебные приставы. При
                  банкротстве, МФО, банки и коллекторы общаются только с
                  финансовым управляющим.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Снятие ограничений</h2>
                <p>
                  После процедуры банкротства с должника снимаются аресты на
                  имущество и выезд за границу. Вы сможете выезжать поехать в
                  отпуск, продать или подарить любое принадлежащее вам имущество
                  и свободно распоряжаться поступающими денежными средствами.
                </p>
                <p>
                  После прохождения банкротства кредиторы не смогут списывать с
                  ваших счетов средства в счет погашения списанной
                  задолженности. Такие действия незаконны и могут быть
                  обжалованы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dots-red m-auto ">
        <div className="max-w-7xl m-auto p-10">
          <HomeText />
        </div>
      </section>

      {/* миссия и текст */}
      <section className="m-auto ">
        <div className="max-w-7xl m-auto p-10">
          <div className="text-[#4e0110] ">
            <div className="border-l-4 border-[#4e0110] pl-5">
              <h2 className="uppercase text-lg md:text-xl lg:text-3xl ">
                Наша главная цель
              </h2>
              <span className="text-lg md:text-xl">
                — дать возможность гражданам, которые столкнулись с финансовыми
                проблемами, воспользоваться своим ЗАКОННЫМ ПРАВОМ на списание
                долгов.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dots-red text-[#fafafa] lg:h-[412px] m-auto">
        <div className="max-w-7xl m-auto p-10">
          <HomeTabs />
        </div>
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default MainHome;
