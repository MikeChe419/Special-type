import "./ScheduleList.sass";
import {useState, useEffect} from "react";
import dataEvent from "../../TEMP_EVENT";
import ScheduleItem from "../ScheduleItem/ScheduleItem";

const ScheduleList = () => {
  const [eventsList, setEventsList] = useState([]);
  // const [currentEvents, setCurrentEvents] = useState(1)
  const [eventsCount] = useState(10)

  useEffect(() => {
    setEventsList(dataEvent.slice(0, eventsCount));
  }, [setEventsList, eventsCount]);

  console.log(eventsList)

  return (
    <ul className="schedule__list">
      <ScheduleItem events={eventsList}/>
    </ul>
  );
}



export default ScheduleList;
