import React, { useRef } from 'react';

function AddMovie() {
  const movieTitleInput = useRef(null);

  /**
   *
   * @param {Event} e
   */
  const handleFormSubmit = async e => {
    e.preventDefault();
    if (movieTitleInput.current.value) {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: encodeURIComponent(movieTitleInput.current.value) }),
      });
      if (!response.ok) {
        console.error(`There was an error ${response.statusText}`);
        return;
      }

      movieTitleInput.current.value = '';
      // eslint-disable-next-line no-alert
      alert('Movie Added');
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter a title first. O.o');
    }
  };

  return (
    <>
      <div className="row">
        <h1>Add Movie Form</h1>
      </div>
      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="movieTitle"
              className="form-label"
            >
              Title
            </label>
            <input
              ref={movieTitleInput}
              id="movieTitle"
              name="movieTitle"
              type="text"
              placeholder="Movie Title"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
          >
            Add Movie
          </button>
        </form>
      </div>
    </>
  ); //
}

export default AddMovie;
