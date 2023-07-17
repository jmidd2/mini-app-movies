import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import MovieCard from './MovieCard/MovieCard';

function MovieList({ isSearch }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = useRef(searchParams.get('q'));

  useEffect(() => {
    let ignore = false;

    const getMovies = async () => {
      const response = await fetch('http://localhost:3001/');
      if (response.ok) {
        const movies = await response.json();
        if (!ignore) {
          setMovieList(movies);
          setIsLoading(false);
        }
      } else {
        console.error(`There was an error: ${response.statusCode}\n${response.body}`);
      }
    };

    const getMovieSearch = async () => {
      const query = encodeURIComponent(searchParams.get('q'));
      searchQuery.current = searchParams.get('q');
      const response = await fetch(`http://localhost:3001/search?q=${query}`);
      if (response.ok) {
        const movies = await response.json();
        if (!ignore) {
          setMovieList(movies);
          if (movies.error) {
            console.error(`There was an error: ${movies.error}`);
          }
          setIsLoading(false);
        }
      } else {
        console.error(`There was an error: ${response.statusCode}\n${response.body}`);
      }
    };
    setIsLoading(true);
    if (!isSearch) {
      getMovies();
    } else if (isSearch) {
      setMovieList([]);
      getMovieSearch();
    }

    // eslint-disable-next-line no-return-assign
    return () => {
      ignore = true;
    };
  }, [isSearch, searchParams]);

  return (
    <div>
      <h1>The Movie List</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {isSearch && <h2>Search results for: {searchQuery.current}</h2>}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {isLoading && <h2>Loading...</h2>}
        {movieList?.length > 0 &&
          movieList?.map(movie => (
            <div
              key={movie.movie_id}
              className="col"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        {!movieList?.error && movieList?.length === 0 && <p>No movies found.</p>}
        {movieList?.error && <p>{movieList?.error}</p>}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  isSearch: PropTypes.bool,
};

MovieList.defaultProps = {
  isSearch: false,
};

export default MovieList;
