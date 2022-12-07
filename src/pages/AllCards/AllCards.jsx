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

  const [currentEventsPage, setCurrentEventPage] = useState(cardsData);
  const [currentEvent, setCurrentEvent] = useState(1);
  const paginate = (pageNumber) => setCurrentEvent(pageNumber);
  const nextPage = () => setCurrentEvent((pageNumber) => pageNumber + 1);
  const prevPage = () => setCurrentEvent((pageNumber) => pageNumber - 1);
  let eventsCount = 10;

  useEffect(() => {
    if (cardsData !== undefined) {
      let lastEventIndex = currentEvent * eventsCount;
      let firstEventIndex = lastEventIndex - eventsCount;
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
        eventsCount={eventsCount}
        totlalEvents={cardsData ? cardsData.length : 0}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentEventsPage={currentEventsPage}
      />
    </section>
  );
};
