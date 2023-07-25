import Image from 'next/image';
import Link from 'next/link';

const MainStart = () => {
  return (
    <section className="m-auto py-10">
      <div className="max-w-7xl m-auto p-2">
        <div className="my-5 text-[#4e0110]  text-5xl sm:text-8xl tracking-tight font-bold">
          Центр Банкротства
        </div>
        <div className="my-5 pt-5  text-[#4e0110]/80 text-3xl">
          помогаем избавиться от долгов
        </div>

        <div className="md:flex md:gap-x-10">
          <div className="py-10 flex gap-5 justify-center1 items-center1">
            <button className="border border-[#4e0110]/80 hover:bg-[#4e0110]/80 hover:text-[#fafafa] text-[#4e0110]/80 rounded-lg w-60 text-xl h-16">
              Узнать подробнее
            </button>
            <Link
              href="#consult"
              className="border border-[#4e0110]/80 hover:bg-[#4e0110]/80 hover:text-[#fafafa] text-[#4e0110]/80 rounded-lg w-60 text-xl h-16"
            >
              <span className="flex justify-center items-center text-center">
                Записаться на консультацию
              </span>
            </Link>
          </div>

          <div>
            <Image
              src="/images/book-and-hammer.svg"
              width={500}
              height={500}
              alt="book-and-hammer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainStart;
