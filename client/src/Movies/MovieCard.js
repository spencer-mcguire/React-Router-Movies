import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${props.movie.id}`}>
          <h2>{title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div onClick={props.saveMovie} className="save-button">
        Save
      </div>
    </div>
  );
};

export default MovieCard;
