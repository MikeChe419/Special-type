import { useParams } from "react-router-dom";
import "./SingleNews.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";

export const SingleNews = ({newsData}) => {
  let { id } = useParams();

  const news = newsData.find((item) => item.id == id);

  return (
    <section className="singleNews">
      <GoBackButton />
      <div className="singleNews__card" key={news.header}>
        <div className="singleNews__text-block">
          <p className="singleNews__create-date">{news.date}</p>
          <h3 className="singleNews__title">{news.header}</h3>
          <p className="singleNews__text">{news.news_full_text}</p>
          {/* {news.video ?
          <iframe className="singleNews__video"
          src={news.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          : ''} */}
          </div>
        <div className="singleNews__img-block">
          <img className="singleNews__img" alt="" src={news.news_images} />
        </div>
        
      </div>
    </section>
  );
};
