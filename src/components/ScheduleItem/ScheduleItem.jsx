import "../../styles/@global.sass";
import "../../styles/@mixins.sass";
import "./ScheduleItem.sass";
import ScheduleImg from "../../assets/images/ScheduleImg.png";
//import {ScheduleImg} from ;

const ScheduleItem = () => {
  return (
    <li className="scedule__item">
      <img src={ScheduleImg} alt="" />
      <h3 className="schedule__schedule-item">
        Читаем, поём и танцуем все вместе
      </h3>
      <h5 className="schedule__item-address-head">Адрес проведения</h5>
      <address className="schedule_item-address">
        г. Бердск, ул. Боровая, 111А, медицинский центр «Святитель Лука»
      </address>
      <h5 className="schedule__item-time-head">Время проведения</h5>
      <span className="schedule__item-time">31.10.2022 в 11–00</span>
    </li>
  );
};

export default ScheduleItem;
