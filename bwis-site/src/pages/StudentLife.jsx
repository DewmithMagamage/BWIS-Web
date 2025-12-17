import React from 'react';

const StudentLife = () => {
  return (
    <div className="page student-life-page">
      <section className="page-hero">
        <h1>Student Life</h1>
        <p>Beyond the classroom – sports, activities, friendships, and memories.</p>
      </section>

      <section className="section">
        <h2>Sports &amp; Extracurricular Activities</h2>
        <div className="two-column">
          <div>
            <p>
              Students at British Way International School – Nittambuwa participate in a wide range of sports and
              extracurricular activities designed to build teamwork, discipline, and confidence.
            </p>
            <ul className="bullet-list">
              <li>Cricket, athletics, football, badminton, and more.</li>
              <li>Music, drama, dance, and art activities.</li>
              <li>Leadership programmes and student councils.</li>
            </ul>
          </div>
          <div>
            {/* TODO: Add action photos from sports / activities */}
            {/* <img src="/images/student-sports.jpg" alt="Students in sports activities" /> */}
            <div className="image-placeholder">Sports &amp; Activities Image</div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Clubs &amp; Societies</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Science &amp; Technology Club</h3>
            <p>Hands-on experiments, robotics, and coding for curious minds.</p>
          </div>
          <div className="card">
            <h3>English Literary Association</h3>
            <p>Debates, public speaking, and creative writing opportunities.</p>
          </div>
          <div className="card">
            <h3>Cultural &amp; Performing Arts</h3>
            <p>Music, dance, and drama that celebrate creativity and culture.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Events &amp; Celebrations</h2>
        <p>
          The school calendar is filled with events that bring our community together – from concerts and exhibitions
          to charity drives and national celebrations.
        </p>
        <div className="grid-3 gallery-grid">
          <div className="gallery-item">
            {/* TODO: Add real event photo */}
            <div className="image-placeholder small">Concert / Talent Show</div>
          </div>
          <div className="gallery-item">
            <div className="image-placeholder small">Cultural Day</div>
          </div>
          <div className="gallery-item">
            <div className="image-placeholder small">Educational Trip</div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <h2>Photo &amp; Video Gallery</h2>
        <p>
          A snapshot of life at BWIS Nittambuwa. This gallery can be expanded into a dedicated page with albums and
          video highlights.
        </p>
        <div className="grid-4 gallery-grid">
          <div className="image-placeholder small">Classroom</div>
          <div className="image-placeholder small">Library</div>
          <div className="image-placeholder small">Play Area</div>
          <div className="image-placeholder small">Laboratory</div>
        </div>
      </section>

      <section className="section achievements">
        <h2>Student Achievements</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Academic Awards</h3>
            <p>High performers in national and international competitions and examinations.</p>
          </div>
          <div className="card">
            <h3>Sports Trophies</h3>
            <p>Medal-winning teams representing the school at zonal and provincial levels.</p>
          </div>
          <div className="card">
            <h3>Leadership &amp; Service</h3>
            <p>Student leaders recognised for their contribution to school and community projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
