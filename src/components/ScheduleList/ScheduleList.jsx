import './ScheduleList.sass';
import ScheduleItem from '../ScheduleItem/ScheduleItem';

const ScheduleList = () => {
  return  (
    <ul className="schedule__list">
      <ScheduleItem  />
      <ScheduleItem  />
      <ScheduleItem  />
      <ScheduleItem  />
    </ul>
  )
}

export default ScheduleList
