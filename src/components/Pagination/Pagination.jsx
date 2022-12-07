import { NavLink } from "react-router-dom";
import "../../styles/@global.sass";
import "../../styles/@mixins.sass";
import "./Pagination.sass";

const Pagination = ({
  eventsCount,
  totlalEvents,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totlalEvents / eventsCount); i++) {
    pageNumbers.push(`${i}`);
  }
  return (
    <nav className="pagination__nav">
      <div className="pagination__page-conntainer">
        <NavLink
          className="pagination__pag-btn pagination__reverse-btn"
          onClick={prevPage}
        ></NavLink>
        <ul className="pagination__pages-list">
          {" "}
          {pageNumbers.map((number) => (
            <li className="pagination__pages-item" key={number}>
              <NavLink
                onClick={() => paginate(number)}
                className={({ isActive }) =>
                  isActive
                    ? "pagination__pages pagination__pages_active"
                    : "pagination__pages"
                }
              >
                {number * 10 - 9 + "-" + number * 10}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="pagination__pag-btn pagination__forward-btn"
          onClick={nextPage}
        ></button>
      </div>
    </nav>
  );
};

export default Pagination;
