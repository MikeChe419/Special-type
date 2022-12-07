import "./AllCards.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";
import { useLocation } from "react-router-dom";
import Poster from "../../components/Poster/Poster";
import { useState, useEffect } from "react";
import Pagination from "../../components//Pagination/Pagination";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import { FriendsList } from "../../components/FriendsList/FriendsList";
import Review from "../../components/Review/Review";

export const AllCards = ({
  cardsData,
  handleSearch,
  title = "",
  setItemForRegistration,
  search,
}) => {
  let location = useLocation();

  const [currentEventsPage, setCurrentEventPage] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(1);

  useEffect(() => {
    if (cardsData !== undefined) {
      let lastEventIndex = currentEvent * 10;
      let firstEventIndex = lastEventIndex - 10;
      let pages = cardsData.slice(firstEventIndex, lastEventIndex);
      setCurrentEventPage(pages);
    }
  }, [cardsData, currentEvent]);

  return (
    <section className="allCards">
      <div className="allCards__head">
        <h1 className="allCards__title">{title}</h1>
        {!search ? "" : <Search handleSearch={handleSearch} />}
      </div>
      <ul className="allCards__content">
        {location.pathname === "/schedule" ? (
          <ScheduleItem
            setItemForRegistration={setItemForRegistration}
            scheduleData={currentEventsPage}
          />
        ) : (
          ""
        )}
        {location.pathname === "/news" ? (
          <NewsCard newsData={currentEventsPage} />
        ) : (
          ""
        )}
        {location.pathname === "/posters" ? (
          <Poster
            postersData={currentEventsPage}
            setItemForRegistration={setItemForRegistration}
          />
        ) : (
          ""
        )}
        {location.pathname === "/companies" ? (
          <FriendsList friendsData={currentEventsPage} />
        ) : (
          ""
        )}
        {location.pathname === "/people" ? (
          <FriendsList friendsData={currentEventsPage} />
        ) : (
          ""
        )}
        {location.pathname === "/reviews" ? (
          <Review dataReviews={currentEventsPage} />
        ) : (
          ""
        )}
      </ul>
      <Pagination
        totlalEvents={cardsData ? cardsData.length : 0}
        setCurrentEvent={setCurrentEvent}
      />
    </section>
  );
};
