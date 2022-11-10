import './Footer.sass'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__info-block">
        <div className="footer__logo"></div>
        <div className="footer__first-block">
          <p className="footer__first-block-title">«Особенный ТИП»</p>
          <p className="footer__first-block-subtitle">Первый инклюзивный театральный проект в Новосибирске</p>
          <ul className="footer__first-block-icons">
            <li className="footer__first-block-vk footer__info-block-element">
              <a href='https://vk.com/osobenny_tip_nsk' target='_blank' rel="noreferrer"></a>
            </li>
            <li className="footer__first-block-tm footer__info-block-element"></li>
            <li className="footer__first-block-ws footer__info-block-element"></li>
          </ul>
        </div>
        <ul className="footer__second-block">
          <li className="footer__info-block-element">
            <a className='footer__second-block-item' href="https://yandex.ru/maps/-/CCUbMNAJ0D" target='_blank' rel="noreferrer">
              <div className='footer__second-block-address-icon'></div>
              <p className='footer__second-block-address-text'>Россия, 633009, Новосибирская область, <br /> г. Бердск, ул. Боровая, 111А, медицинский центр "Святитель Лука"</p>
            </a>
          </li>
          <li className="footer__info-block-element">
            <a className='footer__second-block-item' href="tel:+79612188417">
              <div className='footer__second-block-phone-icon'></div>
              <p className='footer__second-block-phone-text'>+7 961 218 84 17</p>
            </a>

          </li>
          <li className="footer__info-block-element">
            <a href="mailto:ostvolova@mail.ru" className="footer__second-block-item">
              <div className='footer__second-block-mail-icon'></div>
              <p className='footer__second-block-mail-text'>ostvolova@mail.ru</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__law-block">
        <p className="footer__law-block-text">{`© ${new Date().getFullYear()}, Особенный ТИП, все права защищены`}</p>
        <p className="footer__law-block-text">Политика конфиденциальности</p>
      </div>
    </footer>
  )
}

export default Footer;