import { useEffect } from "react";
import { useState } from "react";
import { mainApi } from "../../utils/api/mainApi";
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import "./Captcha.sass";

const Captcha = () => {
  const [captcha, setCaptcha] = useState({});
  const {pathname} = useLocation();
  const [style, setStyle] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null)

  // Функция загрузки капчи с сервера
  const getCaptcha = () =>
    mainApi
      .postCaptcha()
      .then((res) => setCaptcha(res))
      .catch((err) => console.log(err));

  // Получаем значение input с введенными пользователем данными
  const handleChange = (e) => {
    setCaptchaValue(e.target.value)
  }

  // Запускаем функцию запроса капчи при загрузке элемента
  useEffect(() => {
    getCaptcha();
  }, []);

  // Проверяем адрес страницы на которой отрисовывается элемент и меняем стиль
  // Если страница с формой Помощь, то макс ширина компонента 100%
  useEffect(() => {
    if (!pathname) return;
    if (pathname === '/help/volunteering') setStyle({
      maxWidth: '100%'
    })
  }, [pathname])

  return (
    <div className="captcha" style={style}>
      <div className="captcha__container">
        <div
          className="captcha__img"
          style={{
            backgroundImage: `url('data:image/png;base64,${captcha?.captcha_image}')`,
          }}
        />
        <button type='button' className="captcha__btn" onClick={() => getCaptcha()}>
          Обновить <div className='captcha__btn-icon'/>
        </button>
      </div>
      <input
        type='text'
        name='captchaValue'
        className="captcha__input"
        placeholder="Введите код с картинки"
        onChange={handleChange}
        required
        maxLength='4'
        minLength='4'
      />
    </div>
  );
};

export default Captcha;
