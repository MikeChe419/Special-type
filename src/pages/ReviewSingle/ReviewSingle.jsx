import './ReviewSingle.sass';
import { useParams } from 'react-router-dom';
import data from '../../TEMP_REVIEWS';
import getMask from '../../utils/getMask/getMask';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';

const ReviewSingle = () => {
  const { id } = useParams();
  const review = data.find(item => item.id == id);

  return(
    <section className='review-single'>
      <GoBackButton label='Отзывы / Подробный отзыв' />
      <div className='review-single__block'>
        <div className='review-single__review-block'>
          <h2 className="review-single__date">{review.date}</h2>
          <h3 className='review-single__user'>{review.user.toLocaleUpperCase()}</h3>
          <p className='review-single__text'>{review.review}</p>
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