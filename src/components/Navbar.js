import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark  ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">
            Blogs Mania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  aria-current="page"
                  to="/"
                  className="nav-link active text-light"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link text-light">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link text-light">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link text-light">
                  Technology
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/admin" className="nav-link text-light">
                  Admin Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="d-flex navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item me-2 mb-md-2">
                <Link to="/login" className="btn btn-outline-success">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="btn btn-outline-success">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
