import "./Poster.sass";
import getMask from "../../utils/getMask/getMask";
import { useNavigate } from "react-router-dom";


const Poster = ({ 
  postersData,
  setItemForRegistration = Function.prototype }) => {
  const navigate = useNavigate();
  const handleOnClick = (poster) => {
    setItemForRegistration(poster);
    navigate(`/registration/${poster.id}`);
  };

  return (
    <>
      {postersData.map((el) => 
 (
        <li className="poster" key={el.id} onClick={() => handleOnClick(el)}>
          <div className="poster__image-container" >
            <img src={el.image} alt="title" className="poster__image" />
          </div>
          <h3 className="poster__title">{el.name}</h3>
          <h5 className="poster__subtitle">Начало:</h5>
          <span className="poster__span">{el.startTime}</span>
          <h5 className="poster__subtitle">Цена билета:</h5>
          <span className="poster__span_red">{`${el.price}р`}</span>
          <h5 className="poster__subtitle">Адрес проведения:</h5>
          <address className="poster__span">{el.address}</address>
        </li>
      ))}
    </>
  );
};

export default Poster;
