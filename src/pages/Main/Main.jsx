import "./Main.sass";
import About from "../../components/About/About";
import NewsCard from "../../components/NewsCard/NewsCard";
import Review from "../../components/Review/Review";

const Main = ({ newsData, dataReviews }) => {
  return (
    <div className="main">
      <About />
      <section className="news">
        <h2 className="news__title">новости</h2>
        <div className="main__content">
          <NewsCard newsData={newsData} />
        </div>
      </section>
      <h2 className="news__title">отзывы</h2>
      <div className="main__content">
        <Review dataReviews={dataReviews} />
      </div>
    </div>
  );
};

export default Main;
