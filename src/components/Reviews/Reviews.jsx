import "./Reviews.sass";
import data from "../../TEMP_REVIEWS";
import { useLocation } from "react-router-dom";
import Review from "../Review/Review";

const Reviews = () => {
  let reviews = data;
  const { pathname } = useLocation();

  // Сокращаем массив отзывов до 3 если мы на главной странице
  if (pathname === "/") {
    reviews = data.slice(0, 3);
  }

  return (
    <section className="reviews">
      <h2 className="reviews__title">отзывы</h2>
      <div className="reviews__container">
        {reviews.map((item) => (
          <Review item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
