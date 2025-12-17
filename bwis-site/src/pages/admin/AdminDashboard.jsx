import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">BWIS Admin</div>
        <nav>
          <ul>
            <li>Overview</li>
            <li>News &amp; Events</li>
            <li>Gallery</li>
            <li>Downloads</li>
            <li>Admissions Enquiries</li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Manage website content for British Way International School – Nittambuwa.</p>
        </header>
        <section className="admin-section">
          <h2>Quick Stats (Static placeholders)</h2>
          <div className="grid-3">
            <div className="card">
              <h3>New Enquiries</h3>
              <p>12 this week</p>
            </div>
            <div className="card">
              <h3>Upcoming Events</h3>
              <p>3 scheduled</p>
            </div>
            <div className="card">
              <h3>Pending Updates</h3>
              <p>5 items</p>
            </div>
          </div>
        </section>
        <section className="admin-section">
          <h2>Manage News &amp; Events</h2>
          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="form-field full-width">
              <label htmlFor="eventTitle">Title</label>
              <input id="eventTitle" type="text" placeholder="Event title" />
            </div>
            <div className="form-field">
              <label htmlFor="eventDate">Date</label>
              <input id="eventDate" type="date" />
            </div>
            <div className="form-field full-width">
              <label htmlFor="eventSummary">Short Description</label>
              <textarea id="eventSummary" rows="3" placeholder="Event summary" />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Save Event</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
