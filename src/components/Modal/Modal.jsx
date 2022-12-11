import "./Modal.sass";
import Slider from "../Slider/Slider";
import { useState } from 'react';
import { slides } from '../../utils/constants';

const Modal = ({ isOpened, handleClickOpenModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickClose = () => {
    handleClickOpenModal();
  };

  const handleClickNext = () => {
    if (activeIndex >= slides.length - 1) {
      return;
    }
    setActiveIndex(activeIndex + 1)
  }

  const handleClickPrev = () => {
    if (activeIndex === 0) {
      return;
    }
    setActiveIndex(activeIndex - 1)
  }

  return (
    <div className={`modal ${isOpened && "modal_status_opened"}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClickClose} />
        <div className="modal__slider-container">
          <button className="modal__prev-img" onClick={handleClickPrev} />
          <Slider activeIndex={activeIndex} img={slides} />
          <button className="modal__next-img" onClick={handleClickNext} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
