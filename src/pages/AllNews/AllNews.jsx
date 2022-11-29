import "./AllNews.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";

const AllNews = () => {
  return (
    <section className="AllNews">
      <div className="allNews__head">
      <h2 className="AllNews__title">НОВОСТИ</h2>
      <Search />
      </div>
      <div className="AllNews__content">
        <NewsCard />
      </div>
    </section>
  );
};

export default AllNews;
