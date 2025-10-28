import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Limkokwing Feedback</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`navbar-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🏠</span>
            Home
          </Link>
          <Link
            to="/feedback"
            className={`navbar-link ${isActive("/feedback") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📝</span>
            Submit Feedback
          </Link>
          <Link
            to="/dashboard"
            className={`navbar-link ${isActive("/dashboard") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📊</span>
            Dashboard
          </Link>
        </div>

        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}