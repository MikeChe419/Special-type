import './Header.sass';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import useMediaQuery from "../../utils/hooks/useMediaQuery";



import { useState } from 'react';

import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx"

const Header = () => {

  const isDesktop = useMediaQuery('(min-width: 1000px)');


  return (
    <header className='header'>
      <div className='header__info-block'>
        <div className='header__logo'></div>
        <nav className="header__nav-menu">
          {isDesktop ? <><Navigation />
            <Button title='Помочь' width='147px' /> </> : <> <Button title='Помочь' width='147px'/> <BurgerMenu /> </>}

          </nav>
      </div>
    </header>
  )

}

export default Header;