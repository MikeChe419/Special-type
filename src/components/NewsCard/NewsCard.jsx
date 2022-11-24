import './NewsCard.sass'
import dataNews from '../../TEMP_NEWS'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
const News = () => {
  const [newsCount, setNewsCount] = useState(3)
  const [newsList, setNewsList] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setNewsCount(3)
    } else if (pathname === '/news') {
      setNewsCount(10)
    } else setNewsCount(1)
  }, [pathname])

  useEffect(() => {
    setNewsList(dataNews.slice(0, newsCount));
  }, [setNewsList, newsCount])

  return (
    <>
      {newsList.map(news => (<div className="news-card" key={news.id}>
        <p className='news-card__create-date'>{news.createDate}</p>
        <h3 className='news-card__title'>{news.name}</h3>
        <p className='news-card__text'>{news.text}</p>
        <NavLink to={'/singlenews/' + news.id} className='news-card__button' id={news.id}>читать дальше</NavLink>

        <img className='news-card__img' alt=''></img>
      </div>))}
    </>


  )
}

export default News