import { useForm } from "react-hook-form";

export default function Anketa() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-4 border-[#4e0110]/[0.6] rounded-3xl flex flex-col lg:w-1/2 p-5 m-auto "
      >
        <h1 className="text-center text-xl">
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
            Размер задолженности (в том числе по кредитам, займам, коммунальным
            платежам, налогам):
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
                className="border rounded-md p-1 ml-3 w-64 "
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
            Совершались ли сделки с имуществом (купля-продажа, дарение и т.д.) ?
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
              <span className="font-semibold">
                Опишите совершенные сделки с имуществом (имущество, дата сделки)
              </span>
              <textarea {...register("propertyDealList")} />
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
          <span className="font-semibold">Имеются несовершеннолетние дети</span>
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

        {/* Доходы супруга */}
        <div>
          {watch("isMarried") === "yes" ? (
            <div>
              <span className="font-semibold">
                Официальные доходы (зарплата, пенсия, иные выплаты)
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
                  <input {...register("spouseIncomesSize")} type="number" />
                </label>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Имущество супруга */}
        <div>
          {watch("isMarried") === "yes" ? (
            <div>
              <span className="font-semibold">
                Совместно нажитое имущество (недвижимость, транспортные средства
                и т.д.)
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
                  <span className="font-semibold">
                    Перечислите имеющееся имущество
                  </span>
                  <input {...register("commonPropertyList")} type="text" />
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

        <div className="m-auto text-center">
          <p className="mb-2">
            {isValid
              ? "Нажмите кнопку ниже для отправки сведений"
              : "Пожалуйста заполните все поля"}
          </p>
          <input
            type="submit"
            disabled={!isValid}
            className={`${
              !isValid
                ? "text-slate-400 bg-[#4e0110]/80"
                : "text-white bg-[#4e0110]/80 animate-pulse"
            } rounded-lg w-52 p-1`}
          />
        </div>
      </form>
    </div>
  );
}
