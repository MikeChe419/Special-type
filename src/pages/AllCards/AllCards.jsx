import "./AllCards.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";
import { useLocation } from "react-router-dom";
import Poster from "../../components/Poster/Poster";
import { useState, useEffect } from "react";
import Pagination from "../../components//Pagination/Pagination";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import { FriendsList } from "../../components/FriendsList/FriendsList";

export const AllCards = ({
  cardsData,
  handleSearch,
  title = "",
  setItemForRegistration,
}) => {
  let location = useLocation();
  let eventsList = cardsData;

  const [currentEventsPage, setCurrentEventPage] = useState([])
  const [currentEvent, setCurrentEvent] = useState(1);
  const paginate = pageNumber => setCurrentEvent(pageNumber);
  const nextPage = () => setCurrentEvent((pageNumber) => pageNumber + 1);
  const prevPage = () => setCurrentEvent((pageNumber) => pageNumber - 1);

  useEffect(() => {
    if(eventsList !== undefined){
    let lastEventIndex = currentEvent * eventsCount;
    let firstEventIndex = lastEventIndex - eventsCount;
    let pages = eventsList.slice(firstEventIndex, lastEventIndex);
    setCurrentEventPage(pages)}
  }, [cardsData, currentEvent, location.pathname]);


  let eventsCount = 10;

  return (
    <section className="allCards">
      <div className="allCards__head">
        <h1 className="allCards__title">{title}</h1>
        {location.pathname == '/companies' ?? '/people' ? '' : <Search handleSearch={handleSearch} />}
        
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
        {location.pathname === "/news" ? <NewsCard newsData={currentEventsPage} /> : ""}
        {location.pathname === "/posters" ? (
          <Poster
            postersData={currentEventsPage}
            setItemForRegistration={setItemForRegistration}
          />
        ) : (
          ""
        )}
        {location.pathname === "/companies" ? <FriendsList friendsData={currentEventsPage}/> : ""}
        {location.pathname === "/people" ? <FriendsList friendsData={currentEventsPage} /> : ""}
      </ul>
      <Pagination
        eventsCount={eventsCount}
        totlalEvents={eventsList ? eventsList.length : 0}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentEventsPage={currentEventsPage}
      />
    </section>
  );
};
