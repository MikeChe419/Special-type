import "./AllNews.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";
import { useState } from "react";

const AllNews = ({newsData, handleSearch}) => {

  return (
    <section className="AllNews">
      <div className="allNews__head">
      <h2 className="AllNews__title">НОВОСТИ</h2>
      <Search handleSearch={handleSearch}/>
      </div>
      <div className="AllNews__content">
        <NewsCard newsData={newsData} />
      </div>
    </section>
  );
};

export default AllNews;
