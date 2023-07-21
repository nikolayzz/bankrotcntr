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
    <section id="consult" className="m-auto text-[#4e0110]">
      <div className="max-w-7xl m-auto p-10">
        <div className="border-4 rounded-3xl border-[#4e0110]/[0.6] bg-lines lg:p-10 lg:min-h-[600px] md:w-[700px] lg:w-[1000px] m-auto relative">
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

          <form
            encType="multipart/form-data"
            method="post"
            id="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:pl-24 xl:px-44 lg:pr-24 p-2"
          >
            <label>name</label>
            <input
              {...register("name")}
              defaultValue="test"
              className="border rounded-md my-3 p-3"
            />

            <label>phone</label>
            <input
              {...register("phone", { required: true, maxLength: 10 })}
              className="border rounded-md my-3 p-3"
            />
            {errors.phone && <p>Это поле обязательно</p>}
            <br />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="border  rounded-md w-48 bg-[#4e0110] m-auto lg:m-0 text-[#fafafa] p-2"
              >
                Кнопка
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;