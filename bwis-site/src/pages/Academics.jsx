import React from 'react';

const Academics = () => {
  return (
    <div className="page academics-page">
      <section className="page-hero">
        <h1>Academics</h1>
        <p>High-quality, English-medium education from Playgroup to Grade 11.</p>
      </section>

      <section className="section">
        <h2>Curriculum Overview</h2>
        <p>
          British Way International School – Nittambuwa offers a structured pathway from early years to lower
          secondary, with a strong focus on English, mathematics, science, and 21st-century skills.
        </p>
        <div className="grid-4 curriculum-grid">
          <div className="card">
            <h3>Playgroup</h3>
            <p>Play-based learning that develops curiosity, language, and social skills.</p>
          </div>
          <div className="card">
            <h3>LKG</h3>
            <p>Early literacy, numeracy, and motor skills in a caring environment.</p>
          </div>
          <div className="card">
            <h3>UKG</h3>
            <p>Strong preparation for primary grades with structured, engaging activities.</p>
          </div>
          <div className="card">
            <h3>Grades 1–11</h3>
            <p>Progressive curriculum building conceptual understanding and exam readiness.</p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Local &amp; Cambridge / English-Medium Programmes</h2>
        <div className="two-column">
          <div>
            <h3>Local Curriculum (English Medium)</h3>
            <p>
              Students follow the national curriculum delivered in English, ensuring strong subject knowledge while
              maintaining local relevance.
            </p>
          </div>
          <div>
            <h3>Cambridge / International Pathway</h3>
            <p>
              Selected grades may follow international syllabi to prepare for globally recognised examinations and
              future overseas study.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Teaching Methodology</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Student-Centred</h3>
            <p>Interactive lessons, group work, and projects that keep students actively involved.</p>
          </div>
          <div className="card">
            <h3>Technology-Enabled</h3>
            <p>Use of digital tools, multimedia, and modern resources to enhance learning.</p>
          </div>
          <div className="card">
            <h3>Values-Based</h3>
            <p>Lessons intentionally promote respect, responsibility, and ethical decision-making.</p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Faculty Excellence</h2>
        <p>
          Our teachers are carefully selected for their subject expertise, classroom experience, and passion for
          working with young people. Ongoing professional development ensures they remain up-to-date with best
          practices in education.
        </p>
      </section>

      <section className="section">
        <h2>Assessment &amp; Student Support</h2>
        <div className="two-column">
          <div>
            <ul className="bullet-list">
              <li>Regular class tests, assignments, and term examinations.</li>
              <li>Constructive feedback for students and parents.</li>
              <li>Extra support classes where needed.</li>
              <li>Guidance for exam preparation and subject selection.</li>
            </ul>
          </div>
          <div>
            {/* TODO: Add classroom / academic activity image */}
            {/* <img src="/images/academics-classroom.jpg" alt="Students in classroom" /> */}
            <div className="image-placeholder">Classroom / Learning Image</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
