import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieResults from './movieResults.js';
import MovieDetails from './moviesDetail.js';

const MovieSearchApp = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const inputChange = (event) => {
    setSearch(event.target.value);
  };

  const movieSearch = async () => {
    const apiKey = 'b90cd4a98fc411d1865ad0e425b144f6';
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
      setResults(response.data.results);
      // Use navigate to update the URL
      navigate('/movie/results');
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <input type="text" value={search} onChange={inputChange} />
      <button onClick={movieSearch}>Search</button>

      <Routes>
        <Route
          path="/results"
          element={<MovieResults movies={results} />}
        />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default MovieSearchApp;