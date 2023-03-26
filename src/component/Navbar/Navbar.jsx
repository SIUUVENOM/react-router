import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default function Navbar() {
  return (
    <>
      <nav
        className={`${style.bgColor}  navbar navbar-expand-lg bg-body-tertiary`}
      >
        <div className="container">
          <Link
            className="navbar-brand text-white text-uppercase fw-bolder"
            to="home"
          >
            start react
          </Link>
          <button
            className={`${style.menuColor} navbar-toggler px-3 py-2 rounded`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-uppercase">menu</span>
            <i className="fa-solid fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className={`${style.navItem} nav-item`}>
                <Link
                  className="nav-link text-white fw-bolder"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link
                  className="nav-link text-white fw-bolder"
                  aria-current="page"
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link className="nav-link text-white fw-bolder" to="about">
                  About
                </Link>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <Link className="nav-link text-white fw-bolder" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
