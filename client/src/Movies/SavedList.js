import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  const routeToHome = () => {
    props.history.push("/");
  };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <button onClick={routeToHome} className="home-button">
        Home
      </button>
    </div>
  );
};

export default SavedList;
