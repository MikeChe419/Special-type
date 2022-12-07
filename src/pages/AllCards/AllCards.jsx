import "./AllCards.sass";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Search/Search";
import { useLocation } from "react-router-dom";
import ScheduleList from "../../components/ScheduleList/ScheduleList";
import Poster from "../../components/Poster/Poster";
import { useState, useEffect } from "react";
import Pagination from "../../components//Pagination/Pagination";

export const AllCards = ({
  cardsData,
  handleSearch,
  title = "",
  setItemForRegistration,
}) => {
  let location = useLocation();
  let eventsList = cardsData;
 
  const [currentEvent, setCurrentEvent] = useState(1);
  const [currentEventsPage, setCurrentEventPage] = useState([])
  let eventsCount = 10;

  // console.log(currentEventsPage)
  useEffect(() => {
    
    if(eventsList !== undefined){
    let lastEventIndex = currentEvent * eventsCount;
    let firstEventIndex = lastEventIndex - eventsCount;
    let pages = eventsList.slice(firstEventIndex, lastEventIndex);
    console.log(pages, 'test')
    setCurrentEventPage(pages)}
  }, [cardsData, currentEvent]);

  const paginate = pageNumber => setCurrentEvent(pageNumber);
  const nextPage = () => setCurrentEvent((pageNumber) => pageNumber + 1);
  const prevPage = () => setCurrentEvent((pageNumber) => pageNumber - 1);

  return (
    <section className="allCards">
      <div className="allCards__head">
        <h1 className="allCards__title">{title}</h1>
        <Search handleSearch={handleSearch} />
      </div>
      <ul className="allCards__content">
        {location.pathname === "/schedule" ? (
          <ScheduleList
            setItemForRegistration={setItemForRegistration}
            scheduleData={cardsData}
          />
        ) : (
          ""
        )}
        {location.pathname === "/news" ? <NewsCard newsData={currentEventsPage} /> : ""}
        {location.pathname === "/posters" ? (
          <Poster
            postersData={cardsData}
            setItemForRegistration={setItemForRegistration}
          />
        ) : (
          ""
        )}
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
