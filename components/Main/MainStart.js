import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const texts = ['избавиться от долгов'];

const MainStart = () => {
  const nextpublicapihost = process.env.NEXT_PUBLIC_API_HOST;
  const apihost = process.env.API_HOST;

  const ref = useRef(null);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let textContainer = ref.current;

    const typeText = () => {
      const text = texts[textIndex];

      textContainer.textContent = text.slice(0, charIndex++);

      if (charIndex <= text.length) {
        setTimeout(typeText, 100);
      }

      // else {
      //   setTimeout(eraseText, 1500);
      // }
    };

    function eraseText() {
      const text = texts[textIndex];
      textContainer.textContent = text.slice(0, charIndex--);

      if (charIndex >= 0) {
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeText, 1500);
      }
    }

    typeText();
  }, []);

  return (
    <section className="m-auto sm:py-10 text-[#4e0110]">
      <div className="max-w-7xl m-auto p-2">
        <div className="md:flex justify-between m-auto">
          <div className="my-5 sm:pt-5 text-lg sm:text-xl">
            <div className="text-center sm:text-left">
              <div className="mb-5">
                <h1 className=" text-3xl sm:text-7xl tracking-tight font-bold">
                  Центр Банкротства
                </h1>
              </div>
              <div className="m-auto sm:m-0 text-3xl sm:text-5xl w-72 h-24 sm:h-40 font-bold">
                <span>Помогаем </span>
                <span ref={ref} className="printed-text"></span>
              </div>
            </div>

            <Link
              href="#consult"
              className="hidden sm:flex text-lg p-3 w-72 h-16 lg:my-20 border border-[#4e0110]/80 bg-dots-red text-white rounded-lg  justify-center items-center"
            >
              Записаться на консультацию
            </Link>
            <div>
              <div>Это NEXT_PUBLIC_API_HOST {nextpublicapihost}</div>
              <div>Это API_HOST {apihost}</div>
            </div>
          </div>

          <div>
            <Image
              src="/images/moneyup.svg"
              width={500}
              height={500}
              alt="moneyup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainStart;
