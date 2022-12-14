import { NavLink, useLocation } from "react-router-dom";
import { AddReviewButton } from "../AddReviewButton/AddReviewButton";
import "./Pagination.sass";

const Pagination = ({
  totlalEvents,
  setCurrentEvent
}) => {
  let location = useLocation()
  const pageNumbers = [];
  const paginate = (pageNumber) => setCurrentEvent(pageNumber);
  const nextPage = () => setCurrentEvent((pageNumber) => pageNumber + 1);
  const prevPage = () => setCurrentEvent((pageNumber) => pageNumber - 1);

  for (let i = 1; i <= Math.ceil(totlalEvents / 10); i++) {
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
      {location.pathname === "/reviews" ? <AddReviewButton /> : "" }
    </nav>
  );
};

export default Pagination;
