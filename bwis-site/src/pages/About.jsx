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
            <img src="/images/aboutus.png" alt="British Way International School – Nittambuwa campus" />
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="grid-3">
          <div>
            <h3>Our Vision</h3>
            <p>Enabling the students to become well-disciplined and equipped citizens who can face the future global world.</p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>Providing opportunities and exposure through a process of activities in English to help students to face future challenges by developing their competencies.</p>
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
            <h2>Chairman&apos;s Message</h2>
            <p>Dear Students,</p>
            <p>
              As we begin another exciting month, I encourage you to embrace innovation, set clear future goals, and focus on effective execution. Innovation starts with creative thinking, so don’t be afraid to explore new ideas in your studies and activities.
            </p>
            <p>
              Setting meaningful goals will give you direction and motivation, while turning those goals into action requires dedication, perseverance, and a positive mindset.
            </p>
            <p>
              Remember, every great journey begins with a single step. Let’s move forward together, supporting one another and striving for success.
            </p>
            <p>
              Wishing you a month filled with creativity, determination, and achievement.
            </p>
            <p className="principal-signature">
              Warm regards,<br />
              Dr. Shantha Geethadewa.<br />
              Chairman<br />
              British Way Holdings (PVT) LTD.
            </p>
          </div>
          <div>
            <div className="image-placeholder">Chairman Photo</div>
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
