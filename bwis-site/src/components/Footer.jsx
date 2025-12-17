import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* Footer logo - ensure this file is in public/images/footer logo.png (or rename to avoid spaces) */}
          <img src="/images/footer logo.png" alt="British Way International School – Nittambuwa" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Quick Links</h4>
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
            <h4>Resources</h4>
            <ul>
              <li><Link to="/parent-handbook">Parent Handbook</Link></li>
              <li><Link to="/policies">Policies</Link></li>
              <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>British Way International School – Nittambuwa</p>
            <p>Nittambuwa, Sri Lanka</p>
            <p>Phone: <a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a></p>
            <p>Email: <a href="mailto:info@bwisnittambuwa.lk">info@bwisnittambuwa.lk</a></p>
            <div className="footer-social">
              {/* Social media icons without image files */}
              <a href="#" aria-label="Facebook" className="social-icon">
                F
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                Ig
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} British Way International School – Nittambuwa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
