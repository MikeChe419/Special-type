import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Schedule.sass';
import ScheduleList from '../../components/ScheduleList/ScheduleList'
import { Search } from '../../components/Search/Search';

const Schedule = ({ setItemForRegistration }) => {
  return (
      <section className = 'schedule'>
        <div className='schedule__head'>
        <h1 className='schedule__title'>РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ</h1>
        <Search />
        </div>
        <ScheduleList setItemForRegistration={setItemForRegistration} />
    </section>
  );
};

export default Schedule;
