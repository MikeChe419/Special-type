import "./Form.sass";
import { useForm } from "react-hook-form";

const Form = ({ itemForRegistration }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const { name } = itemForRegistration;

  // Меня последнюю букву в названии формы для переиспользования в subtitle
  const changeEnding = () => {
    if (itemForRegistration.price) {
      return "мероприятие";
    } else {
      return "репетицию";
    }
    //   if (title.toLocaleLowerCase().slice(- 1) === 'я') {
    //     return `${title.toLocaleLowerCase().slice(0, title.length - 1)}ю`;
    //  } else {
    //   return title.toLocaleLowerCase();
    //  }
  };

  console.log(errors);

  const subtitle = changeEnding();

  const onSubmit = (data) => {
    const registrationData = {
      ...data,
      ...itemForRegistration,
    };
    alert(JSON.stringify(registrationData));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">{name}</h2>
      <p className="form__subtitle">{`Регистрация на ${subtitle}`}</p>
      <p className="form__required-field">
        <span className="form__asterisk">&#x2a;</span> - обязательные к
        заполнению поля
      </p>
      <div className="form__inputs-block">
        <label className="form__input-lable">
          Имя
          <input
            className="form__input-field"
            placeholder="Введите"
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Обязательное поле",
              maxLength: {
                value: 30,
                message: "Не более 30 символов",
              },
              pattern: {
                value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                message: "Допустимы только русские или английские буквы",
              },
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName && (
            <p role="alert" className="form__error-text">
              {errors.firstName?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Фамилия
          <input
            className="form__input-field"
            placeholder="Введите"
            type="text"
            name="secondName"
            {...register("secondName", {
              required: "Обязательное поле",
              maxLength: {
                value: 30,
                message: "Не более 30 символов",
              },
              pattern: {
                value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                message: "Допустимы только русские или английские буквы",
              },
            })}
            aria-invalid={errors.secondName ? "true" : "false"}
          />
          {errors.secondName && (
            <p role="alert" className="form__error-text">
              {errors.secondName?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Телефон
          <input
            className="form__input-field"
            placeholder="+7 (ххх) ххх-хх-хх"
            type="tel"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: "Обязательное поле",
              maxLength: {
                value: 12,
                message: "Не более 12 символов",
              },
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: "Введите корректный номер телефона",
              },
            })}
          />
          {errors.phoneNumber && (
            <p role="alert" className="form__error-text">
              {errors.phoneNumber?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Электронная почта
          <input
            className="form__input-field"
            placeholder="example@mail.ru"
            type="email"
            name="email"
            {...register("email", {
              required: "Обязательное поле",
              maxLength: {
                value: 50,
                message: "Не более 50 символов",
              },
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: "Введите корректный адрес электронной почты",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="form__error-text">
              {errors.email?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Комментарий
          <input
            className="form__input-field"
            placeholder="Начните печатать..."
            type="text"
            name="comments"
            {...register("comments", {
              required: false,
              maxLength: {
                value: 200,
                message: "Не более 200 символов",
              },
              pattern: {
                value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                message: "Допустимы только русские или английские буквы",
              },
            })}
          />
          {errors.comments && (
            <p role="alert" className="form__error-text">
              {errors.comments?.message}
            </p>
          )}
        </label>
      </div>

      <div className="form__agreement">
        <input
          className="form__agreement-checkbox"
          type="checkbox"
          name="form-checkbox"
          id="form-checkbox"
          required
          {...register("checked")}
        />
        <label htmlFor="form-checkbox" className="form__agreement-lable">
          Нажимая кнопку, я принимаю условия{" "}
          <a className="form__agreement-link" href="!#">
            Пользовательского соглашения
          </a>{" "}
          и даю своё согласие на обработку моих персональных данных, в
          соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
          персональных данных».
        </label>
      </div>

      <button
        type="submit"
        className={`form__button ${!isValid && "form__button_disabled"}`}
        disabled={!isValid && "disabled"}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Form;
