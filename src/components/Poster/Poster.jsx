import './Poster.sass';
import getMask from '../../utils/getMask/getMask';

const Poster = ({ poster }) => {
  const { title, image, startTime, price, address } = poster;
  return(
    <li className='poster'>
      <div className='poster__image-container'>
         <img src={image} alt="title" className="poster__image" />
      </div>
      <h3 className='poster__title'>{title}</h3>
      <h5 className='poster__subtitle'>Начало:</h5>
      <span className='poster__span'>{startTime}</span>
      <h5 className='poster__subtitle'>Цена билета:</h5>
      <span className='poster__span_red'>{`${price}р`}</span>
      <h5 className='poster__subtitle'>Адрес проведения:</h5>
      <address className='poster__span'>{address}</address>

      {
        getMask('poster')
      }
    </li>
  )
}

export default Poster;
