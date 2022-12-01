import { useParams } from "react-router-dom";
import dataNews from "../../TEMP_NEWS";
import "./SingleNews.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";

export const SingleNews = () => {
  let { id } = useParams();

  const news = dataNews.find((item) => item.id == id);

  return (
    <section className="singleNews">
      <GoBackButton />
      <div className="singleNews__card" key={news.id}>
        <div className="singleNews__text-block">
          <p className="singleNews__create-date">{news.createDate}</p>
          <h3 className="singleNews__title">{news.name}</h3>
          <p className="singleNews__text">{news.text}</p>
          {/* {news.video ?
          <iframe className="singleNews__video"
          src={news.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          : ''} */}
          </div>
        <div className="singleNews__img-block">
          <img className="singleNews__img" alt="" src={news.image} />
        </div>
        
      </div>
    </section>
  );
};
