import React from "react";
import "./FilmModal.css";

const FilmModal = ({ setViewFilm, currentFilm }) => {
  return (
    <div className="modal__container">
      <div className="escape__container">
        <button onClick={() => setViewFilm(false)} className="escape_button">
          X
        </button>
      </div>
      <div className="poster__container">
        <img src={currentFilm.cover} className="poster" alt="film poster"></img>
      </div>
      <div className="film_info__container">
        <div className="genre__container">
          <div className="genre">{currentFilm.genre}</div>
        </div>
        <div className="title__container">
          <div className="title_modal">{currentFilm.title}</div>
          <div className="year">({currentFilm.year})</div>
        </div>
        <div className="people__container">
          <div className="actors">
            <span style={{ fontWeight: "bold" }}>Actors:</span>{" "}
            {currentFilm.actors}
          </div>
          <div className="directors">
            <span style={{ fontWeight: "bold" }}>Director:</span>{" "}
            {currentFilm.director}
          </div>
        </div>

        <div className="description__container">
          <div className="description">
            {currentFilm.description.length < 1000
              ? currentFilm.description
              : currentFilm.description.slice(0, 1000) + "..."}
          </div>
        </div>
      </div>
      <div className="rating__container">
        <div className="full_rating">
          <div
            className="unachieved_rating"
            style={{
              width: String((1 - Number(currentFilm.rating) / 10) * 30) + "vw"
            }}
          >
            {currentFilm.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
