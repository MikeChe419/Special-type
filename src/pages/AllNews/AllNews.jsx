import "./AllNews.sass";
import NewsCard from "../../components/NewsCard/NewsCard";

const AllNews = () => {
  return (
    <section className="AllNews">
      <h2 className="AllNews__title">НОВОСТИ</h2>
      <div className="AllNews__content">
        <NewsCard />
      </div>
    </section>
  );
};

export default AllNews;
