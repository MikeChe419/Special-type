import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Schedule.sass';
import ScheduleList from '../../components/ScheduleList/ScheduleList';
import SchedulePag from '../../components/SchedulePag/SchedulePag';

const Schedule = () => {
  return (
    <div className='schedule__container'>
      <section className = 'schedule'>
        <h1 className='schedule__head'>РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ</h1>
        <ScheduleList/>
        <SchedulePag/>
    </section>
    </div>

  )


}

export default Schedule;
