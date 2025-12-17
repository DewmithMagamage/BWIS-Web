import React from 'react';

const About = () => {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <h1>About British Way International School – Nittambuwa</h1>
        <p>A trusted international school in Nittambuwa with a clear vision for your child&apos;s future.</p>
      </section>

      <section className="section">
        <div className="two-column">
          <div>
            <h2>School Overview &amp; History</h2>
            <p>
              British Way International School – Nittambuwa was established to provide high-quality, English-medium
              education rooted in strong values. Over the years, the school has grown into a vibrant learning
              community, trusted by families for its commitment to academic excellence and character development.
            </p>
            <p>
              We combine modern teaching methods with a warm, student-centered environment where every child can
              discover their strengths and passions.
            </p>
          </div>
          <div>
            {/* TODO: Add real photo of school campus or students here */}
            {/* <img src="/images/about-campus.jpg" alt="British Way International School – Nittambuwa campus" /> */}
            <div className="image-placeholder">School / Campus Image</div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="grid-3">
          <div>
            <h3>Our Vision</h3>
            <p>
              To nurture confident, compassionate, and globally-minded citizens who are prepared to excel in an
              ever-changing world.
            </p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
              To provide an inspiring, inclusive, and safe learning environment where students achieve academic
              excellence and develop strong moral values.
            </p>
          </div>
          <div>
            <h3>Our Values</h3>
            <p>Respect, integrity, responsibility, curiosity, and service form the core of school life at BWIS.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="two-column">
          <div>
            <h2>Principal&apos;s Message</h2>
            <p>
              “At British Way International School – Nittambuwa, we believe every child is unique. Our role is to guide
              them, challenge them, and support them as they discover who they are and who they can become.”
            </p>
            <p>
              “We are committed to maintaining high academic standards while ensuring that students feel happy, safe,
              and motivated to learn every day.”
            </p>
            <p className="principal-signature">Principal, BWIS Nittambuwa</p>
          </div>
          <div>
            {/* TODO: Add professional portrait of Principal */}
            {/* <img src="/images/principal.jpg" alt="Principal of British Way International School – Nittambuwa" /> */}
            <div className="image-placeholder">Principal Photo</div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Leadership Team</h2>
        <div className="grid-3">
          <div className="profile-card">
            {/* TODO: Add real leadership photos */}
            <div className="avatar-placeholder">Photo</div>
            <h3>Head of Primary</h3>
            <p>Leading teaching and learning from Playgroup to Grade 5 with a focus on foundational skills.</p>
          </div>
          <div className="profile-card">
            <div className="avatar-placeholder">Photo</div>
            <h3>Head of Secondary</h3>
            <p>Guiding students through Grades 6–11 with strong academic and career preparation.</p>
          </div>
          <div className="profile-card">
            <div className="avatar-placeholder">Photo</div>
            <h3>Coordinator – Student Affairs</h3>
            <p>Ensuring student wellbeing, discipline, and positive engagement across school life.</p>
          </div>
        </div>
      </section>

      <section className="section achievements">
        <h2>Achievements &amp; Recognitions</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Academic Excellence</h3>
            <p>High pass rates and top performers in national and international examinations.</p>
          </div>
          <div className="card">
            <h3>Co-curricular Success</h3>
            <p>Medals and awards in sports, debating, drama, and club activities.</p>
          </div>
          <div className="card">
            <h3>Community Impact</h3>
            <p>Active participation in community outreach and social responsibility projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
