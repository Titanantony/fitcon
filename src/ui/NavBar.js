import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href='#top'>
          <img src={logo} alt="Athleticon Logo" className="logo-image" />
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {/* You can replace this div with an icon or SVG */}
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#exercise">Exercise</a></li>
        <li><a href="#features">Features</a></li>
        <li className="dropdown">
          <a href="#services">Services ▼</a>
          <ul className="dropdown-content">
            <li><a href="#service1">Service 1</a></li>
            <li><a href="#service2">Service 2</a></li>
          </ul>
        </li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
