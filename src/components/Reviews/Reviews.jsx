import getMask from '../../utils/getMask/getMask';
import './Reviews.sass';
import tempFoto from './tempFoto.jpeg'

const Reviews = () => {

  // Временный объект с обзорами пользователей для написания логики
  const reviews = [
    {
      date: '08.10.2022',
      user: 'Елена Романова',
      review: 'Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...',
      image: tempFoto,
      id: 1,
    },
    {
      date: '27.09.2022',
      user: 'Вероника Кудрявцева',
      review: 'После прочтения захотелось укутаться в плед, заварить тёплый чай и смотреть на то, как падает листва. Очень по-уютному. Вы молодцы, ребята!...',
      image: tempFoto,
      id: 2,
    },
    {
      date: '12.09.2022',
      user: 'Данила Тостиашвили',
      review: 'Мне панравились с вами работать паэтому я ещё с вами надолго останусь вы талантливы и крутые ребята вы мне стали как радные люди...',
      image: tempFoto,
      id: 3,
    }
  ]

  return (
    <section className='reviews'>
      <h2 className='reviews__title'>отзывы</h2>

      <div className="reviews__container">
        {
          reviews.map(item => (
            <div className="reviews__card" key={item.id}>
              <p className='reviews__create-date'>{item.date}</p>
              <h3 className='reviews__card-title'>{item.user}</h3>
              <p className='reviews__text'>{item.review}</p>
              <button className='reviews__button'>читать дальше </button>
              <div className='reviews__image-container'>
                <img className='reviews__card-img' src={item.image} alt={item.user} />
              </div>

              {
                getMask('review')
              }
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Reviews;
