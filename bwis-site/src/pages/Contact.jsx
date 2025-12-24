import React, { useState } from 'react';
import { saveContactMessage } from '../utils/storage.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContactMessage(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page contact-page">
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We are here to assist you with admissions, enquiries, and visits.</p>
      </section>

      <section className="section">
        <div className="two-column">
          <div>
            <h2>Nittambuwa Campus</h2>
            <p>British Way International School – Nittambuwa</p>
            <p>5, Kandy Road, Nittambuwa, Sri Lanka</p>
            <p>
              Phone: <a href="tel:+94715500900">071 550 0900</a>
            </p>
            <p>
              Email: <a href="mailto:bwinternationalschool@gmail.com">bwinternationalschool@gmail.com</a>
            </p>
            <p>Office Hours: Monday – Friday, 8.00 a.m. to 4.00 p.m.</p>

            <h3>Social Media</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <img src="/images/Facebook.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com/britishway_international" aria-label="Instagram">
                <img src="/images/Instergram.png" alt="Instagram" />
              </a>
              <a href="https://youtube.com/%40bwinternationalschool" aria-label="YouTube">
                <img src="/images/Youtube.png" alt="YouTube" />
              </a>
              <a href="#" aria-label="TikTok">
                <img src="/images/Tiktok.png" alt="TikTok" />
              </a>
            </div>
          </div>
          <div>
            <h2>Send Us a Message</h2>
            {submitted && (
              <div style={{ background: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                Thank you! Your message has been sent. We will get back to you soon.
              </div>
            )}
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contactEmail">Email</label>
                <input
                  id="contactEmail"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div className="form-field full-width">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  rows="4"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Find Us on the Map</h2>
        <p>Locate British Way International School – Nittambuwa on Google Maps.</p>
        <div className="map-wrapper">
          {/* TODO: Replace src with real Google Maps embed for the Nittambuwa campus */}
          <iframe
            title="British Way International School – Nittambuwa Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.817!2d79.9!3d7.1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
