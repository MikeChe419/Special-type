import { useState, useEffect } from "react";
import Navigation from '../Navigation/Navigation';
import './BurgerMenu.sass'
const BurgerMenu = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleOpenBurger() {
    if (!isBurgerOpen) {
      setBurgerOpen(true)
    } else if (isBurgerOpen) {
      setBurgerOpen(false)
    }
  }

  function handleCloseBurger() {
    setBurgerOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleCloseBurger)

  }, [])

  return (
    <>
      <button className="BurgerButton" onClick={handleOpenBurger}></button>
      <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
        <div className="burger__container">

<Navigation />
        </div>
      </div>
    </>)
};

export default BurgerMenu;
