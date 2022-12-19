import "./FormVolunteering.sass";
import { useForm } from "react-hook-form";
import { nameRegExp, descriptionRegExp, emailRegExp, phoneRegExp } from '../../utils/regExp';

const FormVolunteering = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="form-volunteering" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-volunteering__title">Заполни анкету чтобы помочь проекту</h2>
      <p className="form-volunteering__subtitle">Анкета волонтера:</p>
      <p className="form-volunteering__required-field">
        <span className="form-volunteering__asterisk">&#x2a;</span> - обязательные к
        заполнению поля
      </p>
      <div className="form-volunteering__inputs-block">
        <label className="form-volunteering__input-lable">
          Имя
          <input
            className="form-volunteering__input-field"
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
                value: nameRegExp,
                message: "Допустимы только русские или английские буквы",
              },
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName && (
            <p role="alert" className="form-volunteering__error-text">
              {errors.firstName?.message}
            </p>
          )}
        </label>

        <label className="form-volunteering__input-lable">
          Фамилия
          <input
            className="form-volunteering__input-field"
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
                value: nameRegExp,
                message: "Допустимы только русские или английские буквы",
              },
            })}
            aria-invalid={errors.secondName ? "true" : "false"}
          />
          {errors.secondName && (
            <p role="alert" className="form-volunteering__error-text">
              {errors.secondName?.message}
            </p>
          )}
        </label>

        <label className="form-volunteering__input-lable">
          Телефон
          <input
            className="form-volunteering__input-field"
            placeholder="+7 (ххх) ххх-хх-хх"
            type="number"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: "Обязательное поле",
              maxLength: {
                value: 12,
                message: "Не более 12 символов",
              },
              pattern: {
                value: phoneRegExp,
                message: "Введите корректный номер телефона",
              },
            })}
          />
          {errors.phoneNumber && (
            <p role="alert" className="form-volunteering__error-text">
              {errors.phoneNumber?.message}
            </p>
          )}
        </label>

        <label className="form-volunteering__input-lable">
          Электронная почта
          <input
            className="form-volunteering__input-field"
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
                value: emailRegExp,
                message: "Введите корректный адрес электронной почты",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="form-volunteering__error-text">
              {errors.email?.message}
            </p>
          )}
        </label>

        <label className="form-volunteering__input-lable">
          Комментарий
          <input
            className="form-volunteering__input-field"
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
                value: descriptionRegExp,
                message: "Допустимы только русские или английские буквы",
              },
            })}
          />
          {errors.comments && (
            <p role="alert" className="form-volunteering__error-text">
              {errors.comments?.message}
            </p>
          )}
        </label>
      </div>

      <div className="form-volunteering__agreement">
        <input
          className="form-volunteering__agreement-checkbox"
          type="checkbox"
          name="form-volunteering-checkbox"
          id="form-volunteering-checkbox"
          required
          {...register("checked", {
            required: true,
          })}
        />
        <label htmlFor="form-volunteering-checkbox" className="form-volunteering__agreement-lable">
          Нажимая кнопку, я принимаю условия{" "}
          <a className="form-volunteering__agreement-link" href="/agreement">
            Пользовательского соглашения
          </a>{" "}
          и даю своё согласие на обработку моих персональных данных, в
          соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
          персональных данных».
        </label>
      </div>

      <button
        type="submit"
        className={`form-volunteering__button ${!isValid && "form-volunteering__button_disabled"}`}
        disabled={!isValid && "disabled"}
      >
        Стать волонтером
      </button>
    </form>
  );
};

export default FormVolunteering;
