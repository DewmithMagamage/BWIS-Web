import React, { useEffect, useState } from 'react';
import { getNewsEvents } from '../utils/storage.js';

const NewsEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getNewsEvents());
  }, []);

  return (
    <div className="page">
      <section className="page-hero">
        <h1>News &amp; Events</h1>
        <p>Latest updates and happenings at British Way International School – Nittambuwa.</p>
      </section>
      <section className="section">
        {events.length === 0 ? (
          <p>No events posted yet. Check back soon for updates!</p>
        ) : (
          <div className="grid-3">
            {events.map((event) => (
              <article key={event.id} className="news-card">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span className="news-meta">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default NewsEvents;
