import './Header.sass';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import useMediaQuery from "../../utils/hooks/useMediaQuery";
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx"

const Header = () => {

  const navigate = useNavigate();

  const isDesktop = useMediaQuery('(min-width: 1000px)');


  return (
    <header className='header'>
      <div className='header__info-block'>
        <div className='header__logo' onClick={() => navigate('/')}></div>
        <nav className="header__nav-menu">
          {isDesktop ? <><Navigation />
            <Button title='Помочь' width='147px' route ='/help'/> </> : <> <Button title='Помочь' width='147px' route ='/help'/> <BurgerMenu /> </>}

          </nav>
      </div>
    </header>
  )

}

export default Header;