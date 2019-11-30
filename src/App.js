import randomWords from "random-words";
import React from "react";
import { useState, useEffect } from "react";

import Axios from "axios";

import "./App.css";

import Header from "./Header";
import SideScroll from "./SideScroll";
import Search from "./Search";
import Backdrop from "./Backdrop";
import FilmModal from "./FilmModal";

const App = () => {
  const [currentFilm, setCurrentFilm] = useState({
    title: "",
    description: "",
    actors: "",
    cover: "",
    genre: "",
    year: "",
    director: "",
    rating: 0
  });
  const [viewFilm, setViewFilm] = useState(false);
  const [scrollFilms, setScrollFilms] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?apikey=8bbf8d2&type=movie&s=${randomWords()}`
    )
      .then(response => {
        setScrollFilms(response.data.Search);
      })
      .catch(err => console.log(err));
  }, []);

  const seeFilmDetails = filmID => {
    Axios.get(`https://www.omdbapi.com/?apikey=8bbf8d2&type=movie&i=${filmID}`)
      .then(response => {
        //console.log(response);
        const film = {
          title: response.data.Title,
          description: response.data.Plot,
          actors: response.data.Actors,
          cover: response.data.Poster,
          genre: response.data.Genre,
          year: response.data.Year,
          director: response.data.Director,
          rating: response.data.imdbRating
        };
        setViewFilm(true);
        setCurrentFilm(film);
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main__container">
        <div className="side__container">
          <SideScroll
            scrollFilms={scrollFilms}
            seeFilmDetails={seeFilmDetails}
          />
        </div>
        <div className="search__container">
          <Search seeFilmDetails={seeFilmDetails} />
        </div>
      </div>

      {viewFilm && <Backdrop />}
      {viewFilm && (
        <FilmModal setViewFilm={setViewFilm} currentFilm={currentFilm} />
      )}
    </React.Fragment>
  );
};

export default App;
