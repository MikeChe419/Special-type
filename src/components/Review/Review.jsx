import "./Review.sass";
import getMask from '../../utils/getMask/getMask';
import { NavLink } from 'react-router-dom';

const Review = ({ item }) => {
  return (
    <li className="review__card" key={item.id}>
      <p className="review__create-date">{item.date}</p>
      <h3 className="review__card-title">{item.user}</h3>
      <p className="review__text">{item.review}</p>
      <NavLink to={`/reviews/${item.id}`} className="review__button">читать дальше </NavLink>
      <div className="review__image-container">
        <img className="review__card-img" src={item.image} alt={item.user} />
      </div>
      {getMask("review")}
    </li>
  );
}; 

export default Review;
