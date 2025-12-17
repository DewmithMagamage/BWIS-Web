import React from 'react';
import { useNavigate } from 'react-router-dom';

const Overview = ({ stats }) => {
  const navigate = useNavigate();

  return (
    <div className="admin-section">
      <h2>Quick Stats</h2>
      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>New Enquiries</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb', margin: '0.5rem 0' }}>
            {stats.enquiries}
          </p>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => navigate('/admin/dashboard?section=enquiries')}
          >
            View All
          </button>
        </div>
        <div className="card">
          <h3>Total Events</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb', margin: '0.5rem 0' }}>
            {stats.events}
          </p>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => navigate('/admin/dashboard?section=news')}
          >
            Manage
          </button>
        </div>
        <div className="card">
          <h3>New Messages</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb', margin: '0.5rem 0' }}>
            {stats.messages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
