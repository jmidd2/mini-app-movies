import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const searchInput = useRef(null);

  /**
   *
   * @param {Event} e
   */
  const handleSearch = e => {
    e.preventDefault();
    navigate(`search?q=${searchInput.current.value}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="d-flex"
    >
      <input
        ref={searchInput}
        className="form-control me-2"
        placeholder="Search for a movie..."
        type="text"
      />
      <button
        className="btn btn-outline-light"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
