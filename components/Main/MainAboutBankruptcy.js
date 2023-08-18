import Image from 'next/image';

const MainAboutBankruptcy = () => {
  return (
    <section className="bg-dots-red  pt-5 m-auto">
      <div className="max-w-7xl m-auto py-5 p-2 ">
        <h1 className="text-2xl md:text-4xl animated-text text-[#E3E36A]">
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
              <h2 className="text-xl font-semibold text-[#E3E36A]">
                Свобода от долгов
              </h2>
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
              <h2 className="text-xl font-semibold text-[#E3E36A]">
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
              <h2 className="text-xl font-semibold text-[#E3E36A]">
                Снятие ограничений
              </h2>
              <p>
                После процедуры банкротства с должника снимаются аресты на
                имущество и выезд за границу. Вы сможете выезжать поехать в
                отпуск, продать или подарить любое принадлежащее вам имущество и
                свободно распоряжаться поступающими денежными средствами.
              </p>
              <p>
                После прохождения банкротства кредиторы не смогут списывать с
                ваших счетов средства в счет погашения списанной задолженности.
                Такие действия незаконны и могут быть обжалованы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAboutBankruptcy;
