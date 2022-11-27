import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Schedule.sass';
import ScheduleList from '../../components/ScheduleList/ScheduleList'

const Schedule = ({ setItemForRegistration }) => {
  return (
      <section className = 'schedule'>
        <h1 className='schedule__head'>РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ</h1>
        <ScheduleList setItemForRegistration={setItemForRegistration} />
    </section>
  );
};

export default Schedule;
