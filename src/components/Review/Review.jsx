import "./Review.sass";
import { NavLink } from "react-router-dom";
import ImageMasked from "../ImageMasked/ImageMasked";

const Review = ({ dataReviews }) => {
  return (
    <>
      {dataReviews.map((item) => (
        <li className="review__card" key={item.id}>
          <p className="review__create-date">{item.date}</p>
          <h3 className="review__card-title">{item.user}</h3>
          <p className="review__text">{item.review}</p>
          <NavLink to={`/reviews/${item.id}`} className="review__button">
            читать дальше{" "}
          </NavLink>
          <ImageMasked item={item} />
        </li>
      ))}
    </>
  );
};

export default Review;
