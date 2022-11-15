import { NavLink } from 'react-router-dom';
import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Pagination.sass';

const Pagination = ({ eventsCount, totlalEvents, paginate, nextPage, prevPage, currentEventsPage}) => {
  const pageNumbers= []
  for (let i=1; i <= Math.ceil(totlalEvents/eventsCount); i++) {
    pageNumbers.push(`${i}`)
  }

  return (
    <nav className='schedule__nav'>
      <div className='schedule__page-conntainer'>
          <NavLink className='schedule__pag-btn schedule__reverse-btn' onClick={prevPage}></NavLink>
          <ul className='schedule__pages-list'> {
            pageNumbers.map((number) => (
              <li className='schedule__pages-item' key={number}>

                <NavLink className={({isActive}) => isActive ? "schedule__pages schedule__pages_active" : "schedule__pages"}
                //  className='schedule__pages'
                 onClick={() => paginate(number)}>{number}</NavLink>
              </li>
              ))
            }
          </ul>
          <button className='schedule__pag-btn schedule__forward-btn' onClick={nextPage}></button>
      </div>
    </nav>
  )
}

export default Pagination
