import Image from 'next/image';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ContactForm = (props) => {
  const url = props.props.props.url;
  const [step, setStep] = useState(0);

  // форма
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  // слушатель формы
  const onSubmit = async (data, event) => {
    try {
      setStep(2);
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/consult/`, {
        data,
      });
      // console.log(`${process.env.API_HOST}`);
      setStep(3);
      alert('Отправлено!');
      reset();
    } catch (error) {
      setStep(4);
      console.log(error);
    }
  };

  // модалка
  function OpenModal({ action, step, close }) {
    if (step === 1) {
      return (
        <>
          <button onClick={close}>Закрыть</button>
          <button onClick={action}>Отправить</button>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <button onClick={close}>Закрыть</button>
          <p>Идет отправка</p>
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <button onClick={close}>Закрыть</button>
          <p>Заявка отправлена</p>
        </>
      );
    } else if (step === 4) {
      return (
        <>
          <button onClick={close}>Закрыть</button>
          <p>Произошла ошибка</p>
        </>
      );
    } else {
      return null;
    }
  }

  function closeModal() {
    setStep(0);
  }

  return (
    <section>
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
                {...register('name')}
                defaultValue="test"
                className="border rounded-md my-3 p-3"
              />

              <label>Телефон</label>
              <input
                {...register('phone', { required: true, maxLength: 11 })}
                className="border rounded-md my-3 p-3"
              />
              {errors.phone && <p>Это поле обязательно</p>}
              <br />
              <div className="flex items-center justify-center">
                {/* <button
                  type="submit"
                  className="border rounded-lg w-52 p-1 bg-[#4e0110] m-auto lg:m-0 text-[#fafafa]"
                >
                  Кнопка
                </button> */}
                {step === 0 && (
                  <button onClick={() => setStep(1)}>Отправить</button>
                )}
                <Modal
                  isOpen={step !== 0}
                  onRequestClose={closeModal}
                  style={customStyles}
                  ariaHideApp={false}
                >
                  <OpenModal
                    action={handleSubmit(onSubmit)}
                    step={step}
                    close={() => setStep(0)}
                  />
                </Modal>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
