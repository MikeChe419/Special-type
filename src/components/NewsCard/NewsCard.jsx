import "./NewsCard.sass";
import { NavLink, useLocation } from "react-router-dom";
import newsPlug from '../../assets/images/news-plug.png'

const News = ({newsData}) => {
  const { pathname } = useLocation();
  let news = newsData
  if (pathname === "/") {
    news = newsData.slice(0, 3)
  } else if (pathname === "/news") {
    news = newsData.slice(0, 10);
  } else news = newsData.slice(0, 1);

  return (
    <>
      {news.map((newsData) => (
        <li className="news-card" key={newsData.header}>
          <p className="news-card__create-date">{newsData.date.slice(0, 10).replace(/-/g, '.')}</p>
          <h3 className="news-card__title">{newsData.header}</h3>
          <p className="news-card__text">{newsData.news_full_text}</p>
          <NavLink to={`/singlenews/${newsData.id}`} className="news-card__button">
            читать дальше
          </NavLink>

{
  newsData.news_images.length === 0 ? <img className="news-card__img" alt="" src={newsPlug}/>
  : <img className="news-card__img" alt="" src={newsData.news_images[0].image}/>
  
}
        </li>
      ))}
    </>
  );
};

export default News;


