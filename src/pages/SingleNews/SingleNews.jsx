import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dataNews from '../../TEMP_NEWS'
import './SingleNews.sass'
import tempFoto from "./tempFoto.jpeg";

export const SingleNews = () => {
  let { id } = useParams()
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    setNewsList(dataNews.filter(el => el.id === id));
  }, [setNewsList, id])

  return (
    <section className='singleNews'>
      <div className='singleNews__navigation'>
        <div className='singleNews__goBack-button_type_img'></div>
        <button className='singleNews__goBack-button' onClick={() => navigate(-1)}>&larr; Вернуться назад</button>
      </div>
      {newsList.map(news => (<div className="singleNews__card" key={news.id}>
        <div className="singleNews__text-block">
          <p className='singleNews__create-date'>{news.createDate}</p>
          <h3 className='singleNews__title'>{news.name}</h3>
          <p className='singleNews__text'>{news.text}</p>
        </div>
        <div className="singleNews__img-block">
          <img className='singleNews__img' alt='' src={tempFoto} />
        </div>

      </div>))}
    </section>

  )
}