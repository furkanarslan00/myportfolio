import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faImage, faGamepad, faBriefcase, faFingerprint, faBars } from '@fortawesome/free-solid-svg-icons';
import furkanImage from './furkanarslan.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-left ${showMenu ? 'hide' : ''}`}>
          <NavLink to="/myportfolio" onClick={closeMenu}>
            <img src={furkanImage} alt="Furkan Arslan" className="furkan-img" />
          </NavLink>
          <div className="navbar-leftt">
            <NavLink to="/myportfolio" onClick={closeMenu}>
              <span className={`navbar-leftt ${showMenu ? 'show' : ''}`}>𝓕𝓾𝓻𝓴𝓪𝓷 𝓐𝓻𝓼𝓵𝓪𝓷</span>
            </NavLink>
          </div>
        </div>

        <button className="toggle-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
          <li className="navbar-item">
            <NavLink to="/myportfolio" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faHome} size="lg" className="menu-icon" />
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Music" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faMusic} size="lg" className="menu-icon" />
              Music
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Picture" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faImage} size="lg" className="menu-icon" />
              Picture
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Game" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faGamepad} size="lg" className="menu-icon" />
              Game
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Project" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faBriefcase} size="lg" className="menu-icon" />
              Project
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/CV" activeClassName="active" onClick={closeMenu}>
              <FontAwesomeIcon icon={faFingerprint} size="lg" className="menu-icon" />
              CV
            </NavLink>
          </li>
          <form className={`search-form ${showMenu ? 'show' : ''}`} action="https://www.google.com/search" method="GET" target="_blank">
            <input type="text" name="q" placeholder="Search on Google" className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
