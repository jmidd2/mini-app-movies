import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          Movie List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <NavBar />
        <SearchBar />
      </div>
    </nav>
  );
}

export default Nav;
