import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Anketa() {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  // слушатель формы
  const onSubmit = async (data) => {
    try {
      setStep(2);
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/anketa`, {
        data,
      });
      setStep(3);
      alert("Отправлено!");
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
      <div className="max-w-7xl m-auto p-10 text-[#4e0110]/80">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-4 border-[#4e0110]/[0.6] rounded-3xl flex flex-col lg:w-1/2 p-5 m-auto "
        >
          <h1 className="text-center text-xl font-semibold">
            Заполните анкету и узнайте свои шансы на освобождение от долгов
          </h1>
          <div className="my-5">
            {/* Имя */}
            <div className="flex flex-col justify-center items-center md:block text-center md:text-left mb-5">
              <span className="font-semibold">Имя:</span>
              <input
                type="text"
                placeholder="Имя"
                {...register("name", { required: true })}
                className="border rounded-md p-1 md:ml-3 w-full md:w-2/3"
              />
            </div>

            {/* Телефон */}
            <div className="flex flex-col justify-center items-center md:block text-center md:text-left">
              <span className="font-semibold">Телефон:</span>
              <input
                type="tel"
                placeholder="Телефон"
                {...register("phone", {
                  required: true,
                })}
                className="border rounded-md p-1 md:ml-3 w-full md:w-64"
              />
            </div>
          </div>

          <hr />

          {/* Долги */}
          <div className="mt-3 mb-5 relative">
            <p className="text-center">Сведения о долгах</p>
            <div className="hidden lg:absolute -left-1/2 -translate-y-1/3 border rounded-3xl p-3 text-justify w-52 text-xs">
              <p>
                По общему правилу для подачи заявления о банкротстве необходимо
                наличие задолженности в размере не менее 500 т.р.
              </p>
            </div>
            <span className="font-semibold">
              Размер задолженности (в том числе по кредитам, займам,
              коммунальным платежам, налогам):
            </span>
            <input
              type="number"
              {...register("debt", { required: true })}
              className="border rounded-md p-1 w-64"
              placeholder="500 000 руб."
            />
          </div>

          <hr />

          {/* Доходы */}
          <div className="mt-3 mb-5">
            <p className="text-center">Сведения о доходах</p>
            <span className="font-semibold">
              Официальные доходы (зарплата, пенсия, иные выплаты):
            </span>
            <div>
              <input
                {...register("incomes")}
                type="radio"
                value="yes"
                className="accent-[#4e0110]"
              />
              Да
            </div>
            <div>
              <input
                {...register("incomes")}
                type="radio"
                value="no"
                className="accent-[#4e0110]"
              />
              Нет
            </div>
            {watch("incomes") === "yes" ? (
              <div>
                <span className="font-semibold">Размер дохода:</span>
                <input
                  {...register("incomeSize")}
                  type="number"
                  className="border rounded-md p-1 ml-3 w-64"
                  placeholder="Укажите размер доходов"
                />
              </div>
            ) : (
              ""
            )}
          </div>

          <hr />

          {/* Имущество */}
          <div className="mt-3 mb-5">
            <p className="text-center">Сведения об имущественном положении</p>
            <span className="font-semibold">
              Имущество в собственности (недвижимость, транспортные средства и
              т.д.):
            </span>
            <div>
              <input
                {...register("property")}
                type="radio"
                value="yes"
                className="accent-[#4e0110]"
              />
              Да
            </div>
            <div>
              <input
                {...register("property")}
                type="radio"
                value="no"
                className="accent-[#4e0110]"
              />
              Нет
            </div>
            {watch("property") === "yes" ? (
              <label>
                <div className="font-semibold">
                  Перечислите имеющееся имущество:
                </div>
                <textarea
                  {...register("propertyList")}
                  type="text"
                  className="border rounded-md p-1 ml-3 w-64"
                />
              </label>
            ) : (
              ""
            )}
          </div>

          <hr />

          {/* Сделки с имуществом */}
          <div className="mt-3 mb-5">
            <span className="font-semibold">
              Совершались ли сделки с имуществом (купля-продажа, дарение и т.д.)
              ?
            </span>
            <div>
              <input
                {...register("propertyDeal", { required: true })}
                type="radio"
                value="yes"
                className="accent-[#4e0110]"
              />
              Да
            </div>
            <div>
              <input
                {...register("propertyDeal", { required: true })}
                type="radio"
                value="no"
                className="accent-[#4e0110]"
              />
              Нет
            </div>
            {watch("propertyDeal") === "yes" ? (
              <label>
                <div className="font-semibold">
                  Опишите совершенные сделки с имуществом (имущество, дата
                  сделки)
                </div>
                <textarea
                  {...register("propertyDealList")}
                  className="border rounded-md p-1 ml-3 w-64"
                />
              </label>
            ) : (
              ""
            )}
          </div>

          <hr />

          {/* Залог */}
          <div className="mt-3 mb-5">
            <span className="font-semibold">
              Имущество в залоге у банков (имелось ли когда-либо)
            </span>
            <div>
              <input
                {...register("zalog", { required: true })}
                type="radio"
                value="yes"
                className="accent-[#4e0110]"
              />
              Да
            </div>
            <div>
              <input
                {...register("zalog", { required: true })}
                type="radio"
                value="no"
                className="accent-[#4e0110]"
              />
              Нет
            </div>
          </div>

          <hr />

          {/* Статус ИП */}
          <div className="mt-3 mb-5">
            <span className="font-semibold">
              Осуществлял предпринимательскую деятельность
            </span>
            <label>
              <div>
                <input
                  {...register("kommersant")}
                  type="radio"
                  value="yes"
                  className="accent-[#4e0110]"
                />
                Да
              </div>
            </label>
            <label>
              <div>
                <input
                  {...register("kommersant")}
                  type="radio"
                  value="no"
                  className="accent-[#4e0110]"
                />
                Нет
              </div>
            </label>
          </div>

          <hr />

          {/* Дети */}
          <div className="mt-3 mb-5">
            <p className="text-center">Личные сведения</p>
            <span className="font-semibold">
              Имеются несовершеннолетние дети
            </span>
            <label>
              <div>
                <input
                  {...register("haveChildren")}
                  type="radio"
                  value="yes"
                  className="accent-[#4e0110]"
                />
                Да
              </div>
            </label>
            <label>
              <div>
                <input
                  {...register("haveChildren")}
                  type="radio"
                  value="no"
                  className="accent-[#4e0110]"
                />
                Нет
              </div>
            </label>
          </div>

          <hr />

          {/* Брак */}
          <div className="mt-3 mb-5">
            <span className="font-semibold">
              Состою (состоял за 3 года) в браке
            </span>
            <label>
              <div>
                <input
                  {...register("isMarried", {
                    required: true,
                  })}
                  type="radio"
                  value="yes"
                  className="accent-[#4e0110]"
                />
                Да
              </div>
            </label>
            <label>
              <div>
                <input
                  {...register("isMarried", {
                    required: true,
                  })}
                  type="radio"
                  value="no"
                  className="accent-[#4e0110]"
                />
                Нет
              </div>
            </label>
          </div>

          <hr />

          {/* Доходы супруга */}
          <div>
            {watch("isMarried") === "yes" ? (
              <div className="mt-3 mb-5">
                <p className="text-center">Имущественное положение супруга</p>
                <span className="font-semibold">
                  Официальные доходы супруга (зарплата, пенсия, иные выплаты)
                </span>
                <div>
                  <input
                    {...register("spouseIncomes")}
                    type="radio"
                    value="yes"
                    className="accent-[#4e0110]"
                  />
                  Да
                </div>
                <div>
                  <input
                    {...register("spouseIncomes")}
                    type="radio"
                    value="no"
                    className="accent-[#4e0110]"
                  />
                  Нет
                </div>
                {watch("spouseIncomes") === "yes" ? (
                  <label>
                    <span className="font-semibold">Размер дохода</span>
                    <input
                      {...register("spouseIncomesSize")}
                      type="number"
                      className="border rounded-md p-1 ml-3 w-64"
                    />
                  </label>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <hr />

          {/* Имущество супруга */}
          <div>
            {watch("isMarried") === "yes" ? (
              <div className="mt-3 mb-5">
                <span className="font-semibold">
                  Совместно нажитое имущество (недвижимость, транспортные
                  средства и т.д.)
                </span>
                <div>
                  <input
                    {...register("commonProperty")}
                    type="radio"
                    value="yes"
                    className="accent-[#4e0110]"
                  />
                  Да
                </div>
                <div>
                  <input
                    {...register("commonProperty")}
                    type="radio"
                    value="no"
                    className="accent-[#4e0110]"
                  />
                  Нет
                </div>
                {watch("commonProperty") === "yes" ? (
                  <label>
                    <div className="font-semibold">
                      Перечислите имеющееся имущество
                    </div>
                    <textarea
                      {...register("commonPropertyList")}
                      type="text"
                      className="border rounded-md p-1 ml-3 w-64"
                    />
                  </label>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Кнопка */}

          <div className="m-auto text-center mt-3 font-semibold">
            {isValid ? (
              <input
                type="submit"
                disabled={!isValid}
                className="text-white bg-[#4e0110]/80 rounded-lg w-52 p-1"
                onClick={() => setStep(1)}
              />
            ) : (
              "Пожалуйста заполните все поля"
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
    </section>
  );
}
