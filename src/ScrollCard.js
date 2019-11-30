import React from "react";
import "./ScrollCard.css";

const ScrollCard = ({ film, seeFilmDetails }) => {
  return (
    <div
      className="film_card__container"
      onClick={() => seeFilmDetails(film.imdbID)}
    >
      <div className="film_title__container">
        <span className="title">{film.Title}</span>
        <span className="year">({film.Year})</span>
      </div>
      <div className="film_poster__container">
        <img
          src={film.Poster}
          className="film_poster"
          alt={`${film.Title}`}
        ></img>
      </div>
    </div>
  );
};

export default ScrollCard;
