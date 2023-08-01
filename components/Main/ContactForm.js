import Image from "next/image";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = (data, event) => {
    fetch(event.target.action, {
      method: "post",
      body: new FormData(event.target),
    });

    if (data.name && data.phone) {
      alert(JSON.stringify(data));
    }
  };

  return (
    <div id="consult" className="m-auto max-w-7xl text-[#4e0110]">
      <div className="m-auto max-w-4xl p-10 mt-20 lg:mt-0">
        <h1 className="text-3xl text-center font-semibold mb-32 lg:mb-10">
          Либо запишитесь на бесплатную консультацию прямо сейчас!
        </h1>
        <div className="border-4 rounded-3xl border-[#4e0110]/[0.6] bg-lines lg:p-10  m-auto relative">
          <div className="absolute left-1/2 lg:top-1/2 lg:left-0 -translate-y-1/2 -translate-x-1/2 border-4 border-[#4e0110]/[0.6] rounded-full h-52 w-52">
            <Image
              src="/images/chat.svg"
              width={250}
              height={250}
              className="rounded-full"
              alt="chat"
            />
          </div>
          <h1 className="text-2xl text-center lg:text-left md:text-4xl animated-text pl-2 pt-28 lg:pt-0 lg:pl-24 xl:px-44 my-3">
            Бесплатная юридическая консультация по банкротству
          </h1>
          <p className="text-center text-lg">Запишитесь прямо сейчас</p>

          <form
            encType="multipart/form-data"
            method="post"
            id="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:pl-24 xl:px-44 lg:pr-24 p-2"
          >
            <label>Имя</label>
            <input
              {...register("name")}
              defaultValue="test"
              className="border rounded-md my-3 p-3"
            />

            <label>Телефон</label>
            <input
              {...register("phone", { required: true, maxLength: 10 })}
              className="border rounded-md my-3 p-3"
            />
            {errors.phone && <p>Это поле обязательно</p>}
            <br />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="border rounded-lg w-52 p-1 bg-[#4e0110] m-auto lg:m-0 text-[#fafafa]"
              >
                Кнопка
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
