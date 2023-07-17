import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';
import { AppContext } from '../../../App';

function MovieCard({ movie }) {
  const { setMovieList, setReloadMovies, reloadMovies } = useContext(AppContext);
  const [watchedStatus, setWatchedStatus] = useState(movie.watched);
  const handleDelete = async ({ movie_id: movieId, title }) => {
    const userConfirm = window.confirm(`Do you want to delete: ${title}?`);

    if (userConfirm) {
      const response = await fetch(`http://localhost:3001/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        setMovieList([]);
        // eslint-disable-next-line no-plusplus
        setReloadMovies(reloadMovies + 1);
      }
    }
  };

  const handleUpdate = async (e, { movie_id: movieId, watched }) => {
    const newStatus = !watchedStatus;
    setWatchedStatus(newStatus);
    const response = await fetch(`http://localhost:3001/${movieId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie: { movie_id: movieId, watched: newStatus } }),
    });
    const data = response.json();
    console.log(response);
    console.log(data);
    setReloadMovies(reloadMovies + 1);
  };
  return (
    <div className="card h-100">
      <h5 className="card-header">{movie?.title}</h5>
      <div className="card-body">
        <div className="card-text">Some details</div>
      </div>
      <div className="card-footer d-flex justify-content-between align-middle">
        <div className="form-check align-middle py-2">
          <input
            onChange={e => handleUpdate(e, movie)}
            type="checkbox"
            key={movie?.movie_id}
            name={`watched-${movie?.movie_id}`}
            id={`watched-${movie?.movie_id}`}
            className="form-check-input"
            checked={watchedStatus ?? 'checked'}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={`watched-${movie?.movie_id}`}
            className="form-check-label"
          >
            Watched
          </label>
        </div>
        <button
          className="btn btn-outline-danger ms-auto"
          onClick={() => handleDelete(movie)} //
          type="button"
        >
          Delete
          <i className="bi bi-trash-fill ms-2" />
        </button>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    movie_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user_created: PropTypes.bool.isRequired,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;
