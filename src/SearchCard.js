import React from "react";
import "./SearchCard.css";

const SearchCard = ({ currentFilm, seeFilmDetails }) => {
  return (
    <div
      className="card__container"
      onClick={() => seeFilmDetails(currentFilm.imdbID)}
    >
      <div className="search_title__container">
        <span className="search_title">{currentFilm.Title}</span>
        <span className="search_year">({currentFilm.Year})</span>
      </div>

      <div className="poster__container">
        <img
          src={currentFilm.Poster}
          alt="film poster"
          className="search_poster"
        ></img>
      </div>
    </div>
  );
};

export default SearchCard;
