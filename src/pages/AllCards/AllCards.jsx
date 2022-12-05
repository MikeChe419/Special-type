import "./AllCards.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";
import { useLocation } from "react-router-dom";
import ScheduleList from "../../components/ScheduleList/ScheduleList";
import Poster from "../../components/Poster/Poster";

export const AllCards = ({
  cardsData,
  handleSearch,
  title = "",
  setItemForRegistration,
}) => {
  let location = useLocation();

  return (
    <section className="allCards">
      <div className="allCards__head">
        <h1 className="allCards__title">{title}</h1>
        <Search handleSearch={handleSearch} />
      </div>
      <ul className="allCards__content">
        {location.pathname === "/schedule" ? (
          <ScheduleList setItemForRegistration={setItemForRegistration} scheduleData={cardsData} />
        ) : (
          ""
        )}
        {location.pathname === "/news" ? <NewsCard newsData={cardsData} /> : ""}
        {location.pathname === "/posters" ? <Poster postersData={cardsData}/> : ''}
      </ul>
    </section>
  );
};
