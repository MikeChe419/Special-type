import "../../styles/@global.sass";
import "../../styles/@mixins.sass";
import "./ScheduleItem.sass";
import ScheduleImg from "../../assets/images/ScheduleImg.png";
//import {ScheduleImg} from ;

const ScheduleItem = ({events}) => {
  for (let i=0; i<events.length; i++) {
    return (
      <>
      {events.map(event => (<li className="scedule__item" key={event.id}>
        <img src={ScheduleImg} alt="" />
        <h3 className="schedule__schedule-item">
          {event.name}
        </h3>
        <h5 className="schedule__item-address-head">Адрес проведения</h5>
        <address className="schedule_item-address">
         {event.address}
        </address>
        <h5 className="schedule__item-time-head">Время проведения</h5>
        <span className="schedule__item-time">{event.time}</span>
        </li>))}
        </>
    );
  }

};

export default ScheduleItem;
