import { useEffect } from "react";
import { useState } from "react";
import { mainApi } from "../../utils/api/mainApi";
import "./Captcha.sass";

const Captcha = () => {
  const [captcha, setCaptcha] = useState({});

  const getCaptcha = () =>
    mainApi
      .postCaptcha()
      .then((res) => setCaptcha(res))
      .catch((err) => console.log(err));

  useEffect(() => {
    getCaptcha();
  }, []);

  console.log(captcha);

  return (
    <div className="captcha">
      <div className="captcha__container">
        <div
          className="captcha__img"
          style={{
            backgroundImage: `url('data:image/png;base64,${captcha?.captcha_image}')`,
          }}
        />
        <button className="captcha__btn" onClick={() => getCaptcha()}>
          Обновить
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
