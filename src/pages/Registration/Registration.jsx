import './Registration.sass';
import Form from "../../components/Form/Form";
import { useNavigate } from 'react-router-dom';

const Registration = ({ itemForRegistration }) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(-1);
  }
  return (
    <section className='registration'>
      <nav className='registration__go-back' onClick={handleOnClick}>
        <div className='registration__arrow'></div>
        <p className='registration__text'>Афиша / Мероприятие / Регистрация</p>
      </nav>
      <Form itemForRegistration={itemForRegistration} />
    </section>
  );
};

export default Registration;
