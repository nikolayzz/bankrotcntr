import Image from "next/image";
import Link from "next/link";

const MainStart = () => {
  return (
    <section className="m-auto py-10 text-[#4e0110]/80">
      <div className="max-w-7xl m-auto p-2">
        <div className="my-5 text-[#4e0110] text-3xl sm:text-7xl tracking-tight font-bold">
          Центр Банкротства
          <div>Помогаем избавиться от долгов</div>
        </div>

        <div className="md:flex md:gap-x-10 m-auto">
          <div className="my-5 pt-5 text-lg sm:text-xl md:w-1/2 ">
            <div>
              <p className="mb-2">
                Юридическое сопровождение процедуры банкротства от сбора
                документов до полного списания задолженности.
              </p>
              <p>Гарантия результата: спишем долг или вернем деньги.</p>
            </div>

            <Link
              href="#consult"
              className="text-lg p-3 w-72 h-16 lg:my-20 border border-[#4e0110]/80 bg-[#4e0110]/80 text-white rounded-lg flex justify-center items-center"
            >
              Записаться на консультацию
            </Link>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/images/moneyup.svg"
              width={1000}
              height={1000}
              alt="moneyup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainStart;
