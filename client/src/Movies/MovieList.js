import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

/*  Refactored code 

REMOVED FROM MOVIE LISTS
const [movies, setMovies] = useState([]);
useEffect(() => {
  const getMovies = () => {
    axios
    .get("http://localhost:5000/api/movies")
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.error("Server Error", error);
    });
  };
  
  getMovies();
}, []);

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
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
  );
}
*/
