import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import logo from './imgs/logo.png';
import Menu from './imgs/Menu.png';

const Header = () => {
  const [showHeader, setHeader] = useState(false)

  const handleShowHeader = () => {
    setHeader(!showHeader)
  }

  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleShowHeader}>
        <img src={Menu} className='menu-icon' alt="menu" />
      </div>
      <div className={`nav-elements  ${showHeader && 'active'}`}>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/team">Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="http://www.google.com" target="_blank" rel="noopener noreferrer">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;