import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top section: Logo + Email subscription */}
      <div className="footer-top-section">
        <div className="footer-top-inner">
          <div className="footer-brand">
            {/* Footer logo - ensure this file is in public/images/footer logo.png */}
            <img src="/images/footer logo.png" alt="British Way International School – Nittambuwa" />
          </div>
          <div className="footer-newsletter">
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle section: Three columns */}
      <div className="footer-middle-section">
        <div className="footer-middle-inner">
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link to="/news-events">News &amp; Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/alumni">Alumni</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/school-calendar">School Calendar</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>EXPLORE MORE</h4>
            <ul>
              <li><Link to="/parent-handbook">Parent Handbook</Link></li>
              <li><Link to="/policies">Policies</Link></li>
              <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-location">
              <h4>Location</h4>
              <p>British Way International School – Nittambuwa<br />5, Kandy Road, Nittambuwa, Sri Lanka</p>
              <p>Phone: <a href="tel:+94715500900">071 550 0900</a></p>
              <p>Email: <a href="mailto:bwinternationalschool@gmail.com">bwinternationalschool@gmail.com</a></p>
            </div>
            <div className="footer-join-us">
              <h4>Join Us</h4>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-icon">
                  <img src="/images/Facebook.png" alt="Facebook" />
                </a>
                <a href="https://instagram.com/britishway_international" aria-label="Instagram" className="social-icon">
                  <img src="/images/Instergram.png" alt="Instagram" />
                </a>
                <a href="https://youtube.com/%40bwinternationalschool" aria-label="YouTube" className="social-icon">
                  <img src="/images/Youtube.png" alt="YouTube" />
                </a>
                <a href="#" aria-label="TikTok" className="social-icon">
                  <img src="/images/Tiktok.png" alt="TikTok" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: Copyright + Nav links */}
      <div className="footer-bottom-section">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            British Way International School – Nittambuwa © {new Date().getFullYear()}. All rights reserved.
          </p>
          <nav className="footer-bottom-nav">
            <Link to="/">Home</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
