import './Reviews.sass';
import reviewImgOne from './review-img-1.png';
import reviewImgTwo from './review-img-2.png';
import reviewImgThree from './review-img-3.png';


const Reviews = () => {

  // Временный объект с обзорами пользователей для написания логики
  const reviews = [
    {
      date: '08.10.2022',
      user: 'Елена Романова',
      review: 'Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...',
      image: reviewImgOne,
    },
    {
      date: '27.09.2022',
      user: 'Вероника Кудрявцева',
      review: 'После прочтения захотелось укутаться в плед, заварить тёплый чай и смотреть на то, как падает листва. Очень по-уютному. Вы молодцы, ребята!...',
      image: reviewImgTwo,
    },
    {
      date: '12.09.2022',
      user: 'Данила Тостиашвили',
      review: 'Мне панравились с вами работать паэтому я ещё с вами надолго останусь вы талантливы и крутые ребята вы мне стали как радные люди...',
      image: reviewImgThree,
    }
  ]


  return (
    <section className='reviews'>
      <h2 className='reviews__title'>отзывы</h2>

      <div className="reviews__container">
        {
          reviews.map(item => (
            <div className="reviews__card">
              <p className='reviews__create-date'>{item.date}</p>
              <h3 className='reviews__card-title'>{item.user}</h3>
              <p className='reviews__text'>{item.review}</p>
              <button className='reviews__button'>читать дальше </button>
              <img className='reviews__card-img' src={item.image} alt={item.user}></img>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Reviews;
