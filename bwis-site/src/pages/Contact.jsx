import React from 'react';

const Contact = () => {
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
            <p>Nittambuwa, Sri Lanka</p>
            <p>
              Phone: <a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a>
            </p>
            <p>
              Email: <a href="mailto:info@bwisnittambuwa.lk">info@bwisnittambuwa.lk</a>
            </p>
            <p>Office Hours: Monday – Friday, 8.00 a.m. to 4.00 p.m.</p>

            <h3>Social Media</h3>
            <p>
              {/* TODO: Replace # with real social links */}
              <a href="#">Facebook</a> · <a href="#">Instagram</a> · <a href="#">YouTube</a>
            </p>
          </div>
          <div>
            <h2>Send Us a Message</h2>
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="contactEmail">Email</label>
                <input id="contactEmail" type="email" placeholder="Your email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="How can we help you?" required />
              </div>
              <div className="form-field full-width">
                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" rows="4" placeholder="Write your message here" required />
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
