import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Schedule.sass'
import Header from '../../components/Header/Header';
import NavigationBlock from '../../components/NavigationBlock/NavigationBlock';
import Footer from '../../components/Footer/Footer';
import ScheduleList from '../../components/ScheduleList/ScheduleList';
import ScheduleNav from '../../components/ScheduleNav/ScheduleNav';

const Schedule = () => {
  return (
    <div className='schedule__container'>
      <section className = 'schedule'>
        <h1 className='schedule__head'>РАСПИСАНИЕ ЗАНЯТИЙ И РЕПЕТИЦИЙ</h1>
        <ScheduleList/>
        <ScheduleNav/>
    </section>
    </div>

  )


}

export default Schedule;
