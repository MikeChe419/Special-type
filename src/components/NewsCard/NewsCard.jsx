import "./NewsCard.sass";
import { NavLink, useLocation } from "react-router-dom";
import plugNews from "../../assets/images/plugs/plugNews.png";
import ImageMasked from '../ImageMasked/ImageMasked';

const News = ({ newsData }) => {
  const { pathname } = useLocation();
  let news;
  if (pathname === "/") {
    news = newsData.slice(0, 3);
  } else if (pathname === "/news") {
    news = newsData.slice(0, 10);
  } else news = newsData.slice(0, 1);
  for (let i = 0; i < news.length; i++) {
    return (
      <>
        {news.map((newsData) => (
          <li className="news-card" key={newsData.id}>
            <p className="news-card__create-date">
              {newsData.date.slice(0, 10).replace(/-/g, ".")}
            </p>
            <h3 className="news-card__title">{newsData.header}</h3>
            <p className="news-card__text">{newsData.news_full_text}</p>
            <NavLink
              to={`/singlenews/${newsData.id}`}
              className="news-card__button"
            >
              читать дальше
            </NavLink>
            <ImageMasked item={newsData} />
          </li>
        ))}
      </>
    );
  }
};
export default News;
