import React from "react";
import "./PageToggler.css";

const PageToggler = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="pages__container">
      {currentPage === 1 ? (
        <React.Fragment>
          <button className="btn" disabled>
            {currentPage}
          </button>
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            {currentPage + 2}
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
          <button className="btn" disabled>
            {currentPage}
          </button>
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default PageToggler;
