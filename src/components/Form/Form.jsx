import './Form.sass'
import Button from '../Button/Button'

const Form = ({ itemForRegistration }) => {

  const { name } = itemForRegistration;

  // Меня последнюю букву в названии формы для переиспользования в subtitle
  const changeEnding = () => {
    if (itemForRegistration.price) {
      return "мероприятие"
    } else {
      return "репетицию"
    }
  //   if (title.toLocaleLowerCase().slice(- 1) === 'я') {
  //     return `${title.toLocaleLowerCase().slice(0, title.length - 1)}ю`;
  //  } else {
  //   return title.toLocaleLowerCase();
  //  }
  }

 const subtitle = changeEnding()

  return (
    <form className='form'>
      <h2 className="form__title">{name}</h2>
      <p className="form__subtitle">{`Регистрация на ${subtitle}`}</p>
      <p className="form__required-field"><span className='form__asterisk'>&#x2a;</span> - обязательные к заполнению поля</p>
      <div className='form__inputs-block'>
        <label className='form__input-lable'>
          Имя
          <input className='form__input-field' placeholder='Введите' type="text" />
        </label>
        <label className='form__input-lable'>
          Фамилия
          <input className='form__input-field' placeholder='Введите' type="text" />
        </label>
        <label className='form__input-lable'>
          Телефон
          <input className='form__input-field' placeholder='+7 (ххх) ххх-хх-хх' type=""/>
        </label>
        <label className='form__input-lable'>
          Электронная почта
          <input className='form__input-field' placeholder='example@mail.ru' type="email" />
        </label>
        <label className='form__input-lable'>
          Комментарий
          <input className='form__input-field' placeholder='Начните печатать...' type="text" />
        </label>
      </div>

      <div className='form__agreement'>
        <input className='form__agreement-checkbox' type="checkbox" name="form-checkbox" id="form-checkbox" required />
        <label for="form-checkbox" className='form__agreement-lable'>Нажимая кнопку, я принимаю условия <a className='form__agreement-link' href="!#">Пользовательского соглашения</a> и даю своё согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных».</label>
      </div>

      <Button title="Зарегистрироваться" width="281px" />
    </form>
  )
}

export default Form;
