import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{movie?.title}</h5>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    movie_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
