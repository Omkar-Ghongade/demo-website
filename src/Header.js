import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./imgs/logo.png";
import Menu from "./imgs/Menu.png";

const Header = () => {
  const [showHeader, setHeader] = useState(false);

  const handleShowHeader = () => {
    setHeader(!showHeader);
  };

  const closeMenu = () => {
    setHeader(false);
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleShowHeader}>
        <img src={Menu} className="menu-icon" alt="menu" />
      </div>
      <div className={`nav-elements  ${showHeader && "active"}`}>
        <nav className="nav-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/events" onClick={closeMenu}>
            Events
          </Link>
          <Link to="/team" onClick={closeMenu}>
            Team
          </Link>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
