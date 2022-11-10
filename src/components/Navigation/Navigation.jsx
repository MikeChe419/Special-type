import "./Navigation.sass";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <NavLink to="" className="header__nav-link">
        Расписание
      </NavLink>
      <NavLink className="header__nav-link">Афиша</NavLink>
      <NavLink className="header__nav-link">Новости</NavLink>
      <NavLink className="header__nav-link">Друзья</NavLink>
      <NavLink className="header__nav-link">Контакты</NavLink>
    </>
  );
};

export default Navigation;
