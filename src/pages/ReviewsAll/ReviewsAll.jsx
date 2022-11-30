import "./ReviewsAll.sass";
import Review from "../../components/Review/Review";
import data from "../../TEMP_REVIEWS";

const ReviewsAll = () => {
  return (
    <section className="reviews-all">
      <h2 className="reviews-all__title">ОТЗЫВЫ</h2>
      <ul className="reviews-all__container">
        {data.map((item) => (
          <Review item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default ReviewsAll;
