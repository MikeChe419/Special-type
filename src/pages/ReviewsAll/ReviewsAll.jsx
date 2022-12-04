import "./ReviewsAll.sass";
import Review from "../../components/Review/Review";
import data from "../../TEMP_REVIEWS";
import { useNavigate } from 'react-router-dom';

const ReviewsAll = () => {
  const navigate = useNavigate();


  return (
    <section className="reviews-all">
      <h2 className="reviews-all__title">ОТЗЫВЫ</h2>
      <ul className="reviews-all__container">
        {data.map((item) => (
          <Review item={item} key={item.id} />
        ))}
      </ul>
      <button className='reviews-all__add-review' onClick={() => navigate('/reviews/add-review')}>Добавить отзыв</button>
    </section>
  );
};

export default ReviewsAll;
