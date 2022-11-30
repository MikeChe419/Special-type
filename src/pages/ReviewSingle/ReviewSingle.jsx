import './ReviewSingle.sass';
import { useParams } from 'react-router-dom';
import data from '../../TEMP_REVIEWS';
import getMask from '../../utils/getMask/getMask';
import { useNavigate } from 'react-router-dom';

const ReviewSingle = () => {
  const { id } = useParams();
  const review = data.find(item => item.id == id);

  const navigate = useNavigate();

  return(
    <section className='review-single'>
      <div className='review-single__navigation' onClick={() => navigate('/reviews')}>
        <div className='review-single__goBack-button_type_img' />
        <button className='review-single__goBack-button'>Вернуться к списку отзывов</button>
      </div>
      <div className='review-single__block'>
        <div className='review-single__review-block'>
          <h2 className="review-single__date">{review.date}</h2>
          <p className='review-single__text'>{review.review}</p>
          <p className='review-single__user'>{review.user}</p>
        </div>
        <div className="review-single__image-container">
          <img className="review-single__card-img" src={review.image} alt={review.user} />
        </div>
      </div>

      {getMask("review")}
    </section>
  )
}

export default ReviewSingle;