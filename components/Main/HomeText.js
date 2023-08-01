import Image from "next/image";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

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

const WhyUs = () => {
  return (
    <div>
      <div className="bg-dots-red p-10 rounded-3xl shadow-xl">
        <div className="pl-5  text-[#E3E36A] border-l-4 border-[#E3E36A]/80 ">
          <h2 className="uppercase text-lg md:text-xl lg:text-3xl ">
            Наша главная цель
          </h2>
          <span className="text-lg md:text-xl text-white">
            — дать возможность гражданам, которые столкнулись с финансовыми
            проблемами, воспользоваться своим ЗАКОННЫМ ПРАВОМ на списание
            долгов.
          </span>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center my-5">
        <div className="lg:w-1/2">
          <Image
            src="/images/book-and-hammer.svg"
            width={500}
            height={500}
            alt="book-and-hammer"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="text-[#4e0110] lg:text-3xl mb-5">
            Почему для списания долгов обращаются к нам?
          </div>
          <div>
            {text.map((el) => (
              <div key={el.id} className="sm:text-lg lg:text-xl p-1">
                <VerifiedOutlinedIcon className="mr-4" />
                {el.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

// old color form #4A0A09
