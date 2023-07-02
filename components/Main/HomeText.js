const text = [
  {
    id: 1,
    text: 'Гарантируем полное списание долга.',
  },
  {
    id: 2,
    text: 'Бесплатно проводим анализ и оцениваем шансы.',
  },
  {
    id: 3,
    text: 'Фиксируем цену. Цена услуг не меняется.',
  },
  {
    id: 4,
    text: 'Даем рассрочку. Платите по этапам процедуры.',
  },
  {
    id: 5,
    text: 'Делаем всю работу "под ключ".',
  },
  {
    id: 6,
    text: 'Сохраняем конфиденциальность.',
  },
];

const HomeText = () => {
  return (
    <div>
      <div className="w-full text-[#E3E36A] text-base lg:text-xl font-bold text-center uppercase">
        почему для списания долгов обращаются к нам
      </div>
      <div>
        {text.map((el) => (
          <div
            key={el.id}
            className="sm:text-lg lg:text-xl text-center md:text-left"
          >
            {el.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeText;

// old color form #4A0A09
