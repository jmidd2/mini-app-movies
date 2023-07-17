import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="collapse navbar-collapse">
      <div className="navbar-nav me-auto">
        <Link
          className="nav-link active"
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav-link"
          to="add-movie"
        >
          Add Movie
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
