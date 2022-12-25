import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AddReviewButton } from "../AddReviewButton/AddReviewButton";
import "./Pagination.sass";

const Pagination = ({
  totlalEvents,
  setCurrentEvent,
  currentEvent,
  dataCount,
}) => {
  let location = useLocation();
  const pageNumbers = [];
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const paginate = (pageNumber) => setCurrentEvent(pageNumber);
  const nextPage = () => {
    if (currentEvent < pageNumbers[pageNumbers.length - 1])
      setCurrentEvent((pageNumber) => +pageNumber + 1);
  };
  const prevPage = () => {
    if (currentEvent > +pageNumbers[0])
      setCurrentEvent((pageNumber) => +pageNumber - 1);
  };

  for (let i = 1; i <= Math.ceil(totlalEvents / dataCount); i++) {
    pageNumbers.push(`${i}`);
  }

  useEffect(() => {
    if (pageNumbers.length === 0) return;
    currentEvent == 1 ? setIsDisabledPrev(true) : setIsDisabledPrev(false);
    currentEvent == pageNumbers[pageNumbers.length - 1]
      ? setIsDisabledNext(true)
      : setIsDisabledNext(false);
  }, [currentEvent, pageNumbers]);

  return (
    <nav className="pagination__nav">
      <div className="pagination__page-conntainer">
        <button
          className={`pagination__pag-btn pagination__reverse-btn ${
            isDisabledPrev && "pagination__reverse-btn_disabled"
          }`}
          onClick={prevPage}
          disabled={isDisabledPrev}
        ></button>
        <ul className="pagination__pages-list">
          {" "}
          {pageNumbers.map((number) => (
            <li className="pagination__pages-item" key={number}>
              <button
                onClick={() => paginate(number)}
                className={
                  currentEvent == number
                    ? "pagination__pages pagination__pages_active"
                    : "pagination__pages"
                }
              >
                {number * dataCount - dataCount + 1 + "-" + number * dataCount}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`pagination__pag-btn pagination__forward-btn ${
            isDisabledNext && "pagination__forward-btn_disabled"
          }`}
          onClick={nextPage}
          disabled={isDisabledNext}
        ></button>
      </div>
      {location.pathname === "/reviews" ? <AddReviewButton /> : ""}
    </nav>
  );
};

export default Pagination;
