import { useParams } from "react-router-dom";
import "./SingleNews.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import plugNews from "../../assets/images/plugs/plugNews.png";
import { NotFound } from "../../components/NotFound/NotFound";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

export const SingleNews = ({ newsData, handleClickOpenModal }) => {
  let { id } = useParams();

  const news = newsData.find((item) => item.id == id);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <GoBackButton label="Вернуться к списку новостей" />
      <section className="singleNews">
        {news ? (
          <div className="singleNews__card" key={news.id}>
            <div className="singleNews__text-block">
              {!isMobile ? (
                <>
                  {" "}
                  <p className="singleNews__create-date">
                    {news.date ? news.date.slice(0, 10).replace(/-/g, ".") : ""}
                  </p>
                  <h1 className="singleNews__title">{news.name}</h1>{" "}
                </>
              ) : (
                ""
              )}

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
            <div className="singleNews__img-block" >
              {news.images.length === 0 ? (
                <img className="singleNews__img" alt="" src={plugNews} />
              ) : (
                news.images.map((el) => (
                  <img
                    className="singleNews__img"
                    alt=""
                    src={`http://135.181.198.180:8080${el.image.slice(
                      22,
                      2000
                    )}`}
                  />
                ))
              )}
              <img className="singleNews__img" alt="" src={news.images} />
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </section>
    </>
  );
};
