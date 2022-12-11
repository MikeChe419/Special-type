import "./AddReview.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { useForm } from "react-hook-form";
import UpLoad from "../../components/UpLoad/UpLoad";

const AddReview = () => {
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
    <>
      <GoBackButton label="Отзывы / Добавить отзыв" />
      <section className="add-review">
        <form className="add-review__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="add-review__title">ДОБАВИТЬ ОТЗЫВ</h2>
          <div className="add-review__form-block">
            <label className="add-review__form-lable">
              ФИО
              <input
                className="add-review__input-name"
                placeholder="Введите"
                type="text"
                {...register("name", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 50,
                    message: "Не более 50 символов",
                  },
                  pattern: {
                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                    message: "Допустимы только русские или английские буквы",
                  },
                })}
              />
              {errors.name ? (
                <p role="alert" className="add-review__error-text">
                  {errors.name?.message}
                </p>
              ) : (
                <p role="alert" className="add-review__error-text_hidden">
                  1
                </p>
              )}
            </label>
            <label className="add-review__form-lable">
              Описание
              <textarea
                className="add-review__input-review"
                placeholder="Начните вводить..."
                {...register("text", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 500,
                    message: "Не более 500 символов",
                  },
                  pattern: {
                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                    message: "Допустимы только русские или английские буквы",
                  },
                })}
              />
              {errors.text ? (
                <p role="alert" className="add-review__error-text">
                  {errors.text?.message}
                </p>
              ) : (
                <p role="alert" className="add-review__error-text_hidden">
                  1
                </p>
              )}
            </label>
            <UpLoad />
          </div>
          <button
            className={`add-review__form-submit ${
              !isValid && "add-review__form-submit_disabled"
            }`}
            type="submit"
            disabled={!isValid}
          >
            Отправить
          </button>
        </form>
      </section>
    </>
  );
};

export default AddReview;
