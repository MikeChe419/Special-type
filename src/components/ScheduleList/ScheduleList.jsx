import "./ScheduleList.sass";
import {useState, useEffect} from "react";
import dataEvent from "../../TEMP_EVENT";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import Pagination from "../Pagination/Pagination";

const ScheduleList = () => {
  const [eventsList, setEventsList] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(1)
  const [eventsCount] = useState(10)

  useEffect(() => {
    setEventsList(dataEvent);
  }, [setEventsList, eventsCount]);


  const lastEventIndex = currentEvent * eventsCount;
  const firstEventIndex = lastEventIndex - eventsCount;
  const currentEventsPage = eventsList.slice(firstEventIndex, lastEventIndex);
  const paginate = pageNumber => setCurrentEvent(pageNumber);
  const nextPage = () => setCurrentEvent (pageNumber => pageNumber + 1)
  const prevPage = () => setCurrentEvent (pageNumber => pageNumber - 1)
  return (
  <>
    <ul className="schedule__list">
      <ScheduleItem events={currentEventsPage}/>
    </ul>
    <Pagination
      eventsCount={eventsCount}
      totlalEvents={eventsList.length}
      paginate={paginate}
      nextPage={nextPage}
      prevPage={prevPage}
      currentEventsPage={currentEventsPage}
    />
  </>
  );

}



export default ScheduleList;
