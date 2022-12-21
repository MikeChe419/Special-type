import { useEffect } from "react";
import { useState } from "react";
import { mainApi } from "../../utils/api/mainApi";
import { useLocation } from 'react-router-dom';
import "./Captcha.sass";

const Captcha = () => {
  const [captcha, setCaptcha] = useState({});
  const {pathname} = useLocation();
  const [style, setStyle] = useState({});
  console.log(pathname)

  const getCaptcha = () =>
    mainApi
      .postCaptcha()
      .then((res) => setCaptcha(res))
      .catch((err) => console.log(err));

  useEffect(() => {
    getCaptcha();
  }, []);

  useEffect(() => {
    if (!pathname) return;
    if (pathname === '/help/volunteering') setStyle({
      maxWidth: '100%'
    })
  }, [pathname])

  console.log(captcha);

  return (
    <div className="captcha" style={style}>
      <div className="captcha__container">
        <div
          className="captcha__img"
          style={{
            backgroundImage: `url('data:image/png;base64,${captcha?.captcha_image}')`,
          }}
        />
        <button className="captcha__btn" onClick={() => getCaptcha()}>
          Обновить <div className='captcha__btn-icon'/>
        </button>
      </div>
      <input
        className="captcha__input"
        placeholder="Введите код с картинки"
      />
    </div>
  );
};

export default Captcha;
