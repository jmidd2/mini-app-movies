import React from 'react';
import MovieCard from './MovieCard/MovieCard';

function MovieList() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  return (
    <div>
      <h1>The Movie List</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map(movie => (
          <div className="col">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
