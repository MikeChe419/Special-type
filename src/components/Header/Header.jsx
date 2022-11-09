import './Header.sass';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {

  return(
    <header className='header'>
      <div className='header__info-block'>
        <div className='header__logo'></div>
        <nav className="header__nav-menu">
          <NavLink to='' className='header__nav-link'>Расписание</NavLink>
          <NavLink className='header__nav-link'>Афиша</NavLink>
          <NavLink className='header__nav-link'>Новости</NavLink>
          <NavLink className='header__nav-link'>Друзья</NavLink>
          <NavLink className='header__nav-link'>Контакты</NavLink>
          <Button title='Помочь' width='147px' />
        </nav>
      </div>
    </header>
  )

}

export default Header;