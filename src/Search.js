import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import "./Search.css";
import SearchCard from "./SearchCard";
import PageToggler from "./PageToggler";

const Search = ({ seeFilmDetails }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchPhrase !== "" && searchPhrase !== undefined) {
      let srcPhr = searchPhrase.split(" ").join("+");
      Axios.get(
        `https://www.omdbapi.com/?apikey=8bbf8d2&type=movie&s=${srcPhr}&page=${currentPage}`
      )
        .then(response => {
          setSearchResult(response.data.Search);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onClickSearch = () => {
    let srcPhr = searchPhrase.split(" ").join("+");
    Axios.get(
      `https://www.omdbapi.com/?apikey=8bbf8d2&type=movie&s=${srcPhr}&page=${currentPage}`
    )
      .then(response => {
        setSearchResult(response.data.Search);
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setSearchPhrase(e.target.value);
  };
  return (
    <div className="search__container">
      <div className="search_form">
        <form
          onSubmit={e => {
            e.preventDefault();
            onClickSearch(searchPhrase);
          }}
        >
          <input
            onChange={handleChange}
            value={searchPhrase}
            placeholder="Type film title"
            className="search_input"
          ></input>
        </form>
      </div>
      {searchResult === undefined || searchResult.length === 0 ? null : (
        <React.Fragment>
          <PageToggler
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className="search_result__container">
            {searchResult.map((obj, i) => {
              return (
                <SearchCard
                  currentFilm={obj}
                  seeFilmDetails={seeFilmDetails}
                  key={i}
                />
              );
            })}
          </div>
          <PageToggler
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Search;
