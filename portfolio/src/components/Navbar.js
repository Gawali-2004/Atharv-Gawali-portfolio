// src/components/Navbar.js
import React from 'react';

function NavigationBar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">My Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item d-flex align-items-center ms-3">
              <div className="form-check form-switch text-light m-0">
                
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
