import React from 'react';
import { Link } from 'react-router-dom';

const MovieResults = ({ movies }) => {
  return (
    <div>
      <h2>Movie Search Results</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/details/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;