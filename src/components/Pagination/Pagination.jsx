import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Pagination.sass';

const Pagination = () => {
  return (
    <nav className='schedule__nav'>
      <div className='schedule__page-conntainer'>
          <button className='schedule__pag-btn schedule__reverse-btn'></button>
          <ul className='schedule__pages-list'>
            <li className='schedule__pages-item'>
              <span className='schedule__pages'>1-10</span>
            </li>
            <li className='schedule__pages-item'>
              <span className='schedule__pages'>11-20</span>
            </li>
            <li className='schedule__pages-item'>
            <span className='schedule__pages'>21-30</span>
            </li>
            <li className='schedule__pages-item'>
            <span className='schedule__pages'>31-34</span>
            </li>
          </ul>
          <button className='schedule__pag-btn schedule__forward-btn'></button>
      </div>
    </nav>
  )
}

export default Pagination
