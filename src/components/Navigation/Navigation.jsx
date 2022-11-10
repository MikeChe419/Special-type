import "./Navigation.sass";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation__container">
      <NavLink to="" className="header__nav-link">
        Расписание
      </NavLink>
      <NavLink className="header__nav-link">Афиша</NavLink>
      <NavLink className="header__nav-link">Новости</NavLink>
      <NavLink className="header__nav-link">Друзья</NavLink>
      <NavLink className="header__nav-link">Контакты</NavLink>
    </div>
  );
};

export default Navigation;
