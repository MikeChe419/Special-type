import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Schedule.sass';
import ScheduleList from '../../components/ScheduleList/ScheduleList';
import Pagination from '../../components/Pagination/Pagination';


const Schedule = () => {
  return (
      <section className = 'schedule'>
        <h1 className='schedule__head'>РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ</h1>
        <ScheduleList/>
        <Pagination/>
    </section>
  );
};

export default Schedule;
