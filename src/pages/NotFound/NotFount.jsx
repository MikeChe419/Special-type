import './NotFound.sass'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='nonFound'>
      <h2 className='notFound__title'>404</h2>
      <p className='notFound__description'>Страница не найдена</p>
      <button className='notFound__button' onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>)
}