import "./Registration.sass";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const Registration = ({ itemForRegistration }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };

  const createProperAnkor = () => {
    if (itemForRegistration.price) {
      return "Афиша / Мероприятие / Регистрация";
    }
    return "Расписание занятий и репетиций / Репетиция / Регистрация";
  };

  const ankor = createProperAnkor();

  return (
    <section className="registration">
      <nav className="registration__go-back" onClick={handleOnClick}>
        <div className="registration__arrow" />
        <p className="registration__text">{ankor}</p>
      </nav>
      <Form itemForRegistration={itemForRegistration} />
    </section>
  );
};

export default Registration;
