import React from "react";
import "./SideScroll.css";
import ScrollCard from "./ScrollCard";

const SideScroll = ({ scrollFilms, seeFilmDetails }) => {
  if (scrollFilms !== [] && scrollFilms !== undefined) {
    return (
      <React.Fragment>
        {scrollFilms.map((obj, i) => {
          return (
            <ScrollCard film={obj} seeFilmDetails={seeFilmDetails} key={i} />
          );
        })}
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default SideScroll;
