import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroImages = [
    // TODO: Replace these paths with real campus / student photos.
    // Example (after you copy images into public/images):
    // '/images/hero-1.jpg',
    // '/images/hero-2.jpg',
    // '/images/hero-3.jpg',
    '/images/hero-1.png',
    '/images/hero-2.png',
    '/images/hero-3.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-page">
      <section
        className="hero hero-full"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(11, 37, 69, 0.82), rgba(11, 37, 69, 0.35)), url(${heroImages[currentSlide]})`,
        }}
      >
        <div className="hero-content">
          <h1>British Way International School – Nittambuwa</h1>
          <p>
            A modern international school in Nittambuwa offering a student-centered education, strong values, and
            world-class learning experiences.
          </p>
          <div className="hero-actions hero-cta-row">
            <Link to="/admissions" className="btn btn-primary">
              Apply Now
            </Link>
            <Link to="/admissions#visit" className="btn btn-outline">
              Book a Campus Visit
            </Link>
          </div>
        </div>
        <div className="hero-dots hero-dots-overlay">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="page">
        <section className="section hero-highlights-section">
          <div className="grid-3">
            <div className="highlight-card">
              <h3>International Curriculum</h3>
              <p>Blending local and international standards to prepare students for a global future.</p>
            </div>
            <div className="highlight-card">
              <h3>Qualified Teachers</h3>
              <p>Experienced, trained, and caring educators focused on every child&apos;s growth.</p>
            </div>
            <div className="highlight-card">
              <h3>Modern Facilities</h3>
              <p>Safe, technology-enabled classrooms, labs, and activity spaces.</p>
            </div>
          </div>
        </section>

        <section className="section why-british-way">
          <div className="section-header">
            <h2>Why British Way?</h2>
            <p>Discover what makes British Way International School – Nittambuwa uniquely trusted by parents.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>International Standards</h3>
              <p>
                Our programmes are benchmarked against global best practices, ensuring students are prepared for
                opportunities in Sri Lanka and abroad.
              </p>
            </div>
            <div className="card">
              <h3>Holistic Development</h3>
              <p>
                Equal focus on academics, character, leadership, sports, and creativity for a well-rounded student
                profile.
              </p>
            </div>
            <div className="card">
              <h3>Caring Community</h3>
              <p>
                A warm, inclusive environment where every child is known, supported, and encouraged to thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="section news-preview">
          <div className="section-header">
            <h2>Latest News &amp; Events</h2>
            <p>Stay updated with what&apos;s happening on campus.</p>
          </div>
          <div className="grid-3">
            <article className="news-card">
              {/* TODO: Add real event image here */}
              {/* <img src="/images/event-1.jpg" alt="Sports Day 2025" /> */}
              <h3>Annual Sports Meet 2025</h3>
              <p>Students showcased team spirit, talent, and sportsmanship at the annual sports meet.</p>
              <span className="news-meta">March 2025</span>
            </article>
            <article className="news-card">
              {/* TODO: Add real event image here */}
              <h3>STEAM Innovation Fair</h3>
              <p>Young innovators presented creative projects in science, technology, engineering, arts, and maths.</p>
              <span className="news-meta">February 2025</span>
            </article>
            <article className="news-card">
              {/* TODO: Add real event image here */}
              <h3>Cultural Diversity Day</h3>
              <p>A colourful celebration of cultures, languages, and traditions from around the world.</p>
              <span className="news-meta">January 2025</span>
            </article>
          </div>
          <div className="section-cta-center">
            <Link to="/news-events" className="link-arrow">
              View all news &amp; events
            </Link>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-header">
            <h2>What Parents &amp; Students Say</h2>
          </div>
          <div className="testimonial-slider">
            {/* Simple static slider-style layout; can be upgraded later */}
            <div className="testimonial-card">
              <p>
                “British Way International School – Nittambuwa has given my child confidence, fluency in English, and a
                genuine love for learning.”
              </p>
              <span className="testimonial-author">Parent of Grade 5 student</span>
            </div>
            <div className="testimonial-card">
              <p>
                “I love the activities, clubs, and friendly teachers. School feels like a second home.”
              </p>
              <span className="testimonial-author">Grade 7 student</span>
            </div>
            <div className="testimonial-card">
              <p>
                “The balance between academics and extracurriculars is excellent. The school truly focuses on the whole
                child.”
              </p>
              <span className="testimonial-author">Parent of Grade 9 student</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
