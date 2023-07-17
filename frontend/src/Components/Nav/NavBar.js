import React from 'react';

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
        >
          Movie List
        </a>
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

        <div className="collapse navbar-collapse">
          <div className="navbar-nav me-auto">
            <a
              className="nav-link active"
              href="/"
            >
              Home
            </a>
            <a
              className="nav-link"
              href="about"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
