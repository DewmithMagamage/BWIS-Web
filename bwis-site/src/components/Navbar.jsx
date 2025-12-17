import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => navigate('/')}> 
          {/* Navigation logo – copy your 'navigation logo.png' into public/ and keep this path */} 
          <img
            src="/images/footer logo.png"
            alt="British Way International School – Nittambuwa"
            className="navbar-logo"
          />
        </div>
        <button
          className="navbar-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/academics" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Academics
          </NavLink>
          <NavLink to="/admissions" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Admissions
          </NavLink>
          <NavLink to="/student-life" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Student Life
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
