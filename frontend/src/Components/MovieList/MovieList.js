import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard/MovieCard';

function MovieList() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    let ignore = false;

    const getMovies = async () => {
      const response = await fetch('http://localhost:3001/');
      const movies = await response.json();
      if (!ignore) {
        setMovieList(movies);
      }
    };

    getMovies();

    // eslint-disable-next-line no-return-assign
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>The Movie List</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movieList?.length > 0 ? (
          movieList?.map(movie => (
            <div className="col">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </div>
  );
}

export default MovieList;
