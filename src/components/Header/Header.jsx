import './Header.sass';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

const Header = () => {

  return(
    <header className='header'>
      <div className='header__info-block'>
        <div className='header__logo'></div>
        <nav className="header__nav-menu">
          <Navigation />
          <Button title='Помочь' width='147px' />
        </nav>
      </div>
    </header>
  )

}

export default Header;