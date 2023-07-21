import Image from "next/image";

const text = [
  {
    id: 1,
    text: "Гарантируем полное списание долга.",
  },
  {
    id: 2,
    text: "Бесплатно проводим анализ и оцениваем шансы.",
  },
  {
    id: 3,
    text: "Фиксируем цену. Цена услуг не меняется.",
  },
  {
    id: 4,
    text: "Даем рассрочку. Платите по этапам процедуры.",
  },
  {
    id: 5,
    text: 'Делаем всю работу "под ключ".',
  },
  {
    id: 6,
    text: "Сохраняем конфиденциальность.",
  },
];

const HomeText = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-1/2">
        <Image src="/images/backgr.png" width={500} height={500} alt="backgr" />
      </div>
      <div className="lg:w-1/2">
        <div className="text-[#E3E36A]  lg:text-3xl ">
          Почему для списания долгов обращаются к нам?
        </div>
        <div>
          {text.map((el) => (
            <div key={el.id} className="sm:text-lg lg:text-xl">
              {el.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeText;

// old color form #4A0A09
