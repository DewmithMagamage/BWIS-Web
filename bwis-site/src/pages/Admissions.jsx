import React, { useState } from 'react';
import { saveAdmissionsEnquiry } from '../utils/storage.js';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    gradeApplying: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAdmissionsEnquiry(formData);
    setSubmitted(true);
    setFormData({
      parentName: '',
      studentName: '',
      gradeApplying: '',
      phone: '',
      email: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page admissions-page">
      <section className="page-hero">
        <h1>Admissions</h1>
        <p>We look forward to welcoming your child to British Way International School – Nittambuwa.</p>
      </section>

      <section className="section">
        <h2>Admission Process</h2>
        <ol className="steps-list">
          <li>Submit an online enquiry or visit the school office.</li>
          <li>Attend a campus visit or open day (optional but recommended).</li>
          <li>Complete and submit the application form with required documents.</li>
          <li>Student assessment and / or interview (where applicable).</li>
          <li>Offer of admission and fee payment to confirm the place.</li>
        </ol>
      </section>

      <section className="section light-section">
        <div className="two-column">
          <div>
            <h2>Entry Requirements &amp; Age Criteria</h2>
            <p>Entry is based on age, readiness, and available places in the requested grade.</p>
            <table className="age-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Approximate Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Playgroup</td>
                  <td>2.5 – 3.5 years</td>
                </tr>
                <tr>
                  <td>LKG</td>
                  <td>3.5 – 4.5 years</td>
                </tr>
                <tr>
                  <td>UKG</td>
                  <td>4.5 – 5.5 years</td>
                </tr>
                <tr>
                  <td>Grade 1</td>
                  <td>5.5 – 6.5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>Downloads</h2>
            <p>
              Download the latest admission application form and other relevant documents.
            </p>
            {/* TODO: Replace # with actual PDF path once uploaded */}
            <a href="#" className="btn btn-outline">
              Download Application Form (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="visit">
        <h2>Admission Enquiry Form</h2>
        <p>Please fill in the form below and our admissions team will contact you.</p>
        {submitted && (
          <div style={{ background: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            Thank you! Your enquiry has been submitted. We will contact you soon.
          </div>
        )}
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="parentName">Parent / Guardian Name</label>
            <input
              id="parentName"
              type="text"
              placeholder="Enter full name"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              placeholder="Enter student name"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="gradeApplying">Grade Applying For</label>
            <select
              id="gradeApplying"
              value={formData.gradeApplying}
              onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
              required
            >
              <option value="">Select grade</option>
              <option>Playgroup</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="phone">Contact Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-field full-width">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us more about your child or questions you have"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Submit Enquiry
            </button>
          </div>
        </form>
      </section>

      <section className="section light-section" aria-label="Campus visit booking">
        <h2>Book a Campus Visit / Open Day</h2>
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field">
            <label htmlFor="visitName">Name</label>
            <input id="visitName" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="visitDate">Preferred Date</label>
            <input id="visitDate" type="date" required />
          </div>
          <div className="form-field">
            <label htmlFor="visitTime">Preferred Time</label>
            <input id="visitTime" type="time" />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-outline">
              Request Visit
            </button>
          </div>
        </form>
      </section>

      <section className="section faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>When does the academic year start?</h3>
          <p>The academic year typically begins in January. Exact dates are shared in the school calendar.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a placement test?</h3>
          <p>
            For certain grades, a short assessment may be required to understand the child&apos;s current level and
            needs.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is transport available?</h3>
          <p>School transport options may be available on selected routes. Please enquire with the office.</p>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
