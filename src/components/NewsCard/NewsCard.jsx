import "./NewsCard.sass";
import dataNews from "../../TEMP_NEWS";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import newsPlug from '../../assets/images/news-plug.png'

const News = ({newsData}) => {
  const [newsCount, setNewsCount] = useState(3);
  const [newsList, setNewsList] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setNewsCount(3);
    } else if (pathname === "/news") {
      setNewsCount(10);
    } else setNewsCount(1);
  }, [pathname]);

  useEffect(() => {
    setNewsList(newsData.slice(0, newsCount));
  }, [setNewsList, newsCount]);

  return (
    <>
      {newsList.map((news) => (
        <div className="news-card" key={news.header}>
          <p className="news-card__create-date">{news.date}</p>
          <h3 className="news-card__title">{news.header}</h3>
          <p className="news-card__text">{news.news_full_text}</p>
          <NavLink to={`/singlenews/${news.id}`} className="news-card__button">
            читать дальше
          </NavLink>

          <img className="news-card__img" alt="" src={news.news_images ? news.news_images : newsPlug}></img>
        </div>
      ))}
    </>
  );
};

export default News;
