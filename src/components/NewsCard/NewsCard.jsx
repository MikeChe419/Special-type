import './NewsCard.sass'
import dataNews from '../../TEMP_NEWS'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const News = () => {
  const history = useNavigate();
  const [newsCount, setNewsCount] = useState(3)
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    if (history === '/') {
      setNewsCount(3)
    }
    else if (history === '/news') {
      setNewsCount(6)
    }

  }, [history])

  useEffect(() => {
    setNewsList(dataNews.slice(0, newsCount));
  }, [setNewsList, newsCount])

  return (
    <>
      {newsList.map(news => (<div className="news-card" key={news.id}>
        <p className='news-card__create-date'>{news.createDate}</p>
        <h3 className='news-card__title'>{news.name}</h3>
        <p className='news-card__text'>{news.text}</p>
        <button className='news-card__button'>читать дальше </button>
        <img className='news-card__img' alt=''></img>
      </div>))}
    </>


  )
}

export default News