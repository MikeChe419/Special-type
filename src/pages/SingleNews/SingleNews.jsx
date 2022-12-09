import { useParams } from "react-router-dom";
import "./SingleNews.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import plugNews from "../../assets/images/plugs/plugNews.png";

export const SingleNews = ({ newsData }) => {
  let { id } = useParams();

  const news = newsData.find((item) => item.id == id);

  return (
    <>
      <GoBackButton label="Вернуться к списку новостей" />
      <section className="singleNews">
        {news ? (
          <div className="singleNews__card" key={news.id}>
            <div className="singleNews__text-block">
              <p className="singleNews__create-date">
              {news.date ? news.date.slice(0, 10).replace(/-/g, ".") : ''}
              </p>
              <h3 className="singleNews__title">{news.name}</h3>
              <p className="singleNews__text">{news.description}</p>
              {news.video ? (
                <iframe
                  className="singleNews__video"
                  src={news.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                ""
              )}
            </div>
            <div className="singleNews__img-block">
              {news.images.length === 0 ? (
                <img className="singleNews__img" alt="" src={plugNews} />
              ) : (
                news.images.map((el) => (
                  <img className="singleNews__img" alt="" src={el.image} />
                ))
              )}
              <img className="singleNews__img" alt="" src={news.images} />
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
