import React, { useState, useEffect } from 'react';
import {
  getAdmissionsEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from '../../../utils/storage.js';

const EnquiriesManage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filter, setFilter] = useState('all'); // all, new, read, archived

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = () => {
    setEnquiries(getAdmissionsEnquiries());
  };

  const handleStatusChange = (id, newStatus) => {
    updateEnquiryStatus(id, newStatus);
    loadEnquiries();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      deleteEnquiry(id);
      loadEnquiries();
    }
  };

  const filteredEnquiries =
    filter === 'all'
      ? enquiries
      : enquiries.filter((e) => e.status === filter);

  return (
    <div>
      <div className="admin-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0 }}>Admissions Enquiries ({filteredEnquiries.length})</h2>
          <div>
            <button
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('all')}
              style={{ marginRight: '0.5rem' }}
            >
              All
            </button>
            <button
              className={`btn btn-sm ${filter === 'new' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('new')}
              style={{ marginRight: '0.5rem' }}
            >
              New
            </button>
            <button
              className={`btn btn-sm ${filter === 'read' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('read')}
              style={{ marginRight: '0.5rem' }}
            >
              Read
            </button>
            <button
              className={`btn btn-sm ${filter === 'archived' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('archived')}
            >
              Archived
            </button>
          </div>
        </div>
        {filteredEnquiries.length === 0 ? (
          <p style={{ color: '#6b7280', marginTop: '1rem' }}>No enquiries found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredEnquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  background: enquiry.status === 'new' ? '#eff6ff' : '#ffffff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>
                      {enquiry.studentName} - Grade {enquiry.gradeApplying}
                    </h3>
                    <p style={{ margin: '0', color: '#6b7280', fontSize: '0.85rem' }}>
                      Parent: {enquiry.parentName}
                    </p>
                  </div>
                  <span className={`status-badge status-${enquiry.status}`}>
                    {enquiry.status}
                  </span>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Phone:</strong> {enquiry.phone}
                  </p>
                  {enquiry.email && (
                    <p style={{ margin: '0.5rem 0' }}>
                      <strong>Email:</strong> {enquiry.email}
                    </p>
                  )}
                  {enquiry.message && (
                    <p style={{ margin: '0.5rem 0' }}>
                      <strong>Message:</strong> {enquiry.message}
                    </p>
                  )}
                  <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', color: '#6b7280' }}>
                    Submitted: {new Date(enquiry.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="admin-actions">
                  {enquiry.status === 'new' && (
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleStatusChange(enquiry.id, 'read')}
                    >
                      Mark as Read
                    </button>
                  )}
                  {enquiry.status === 'read' && (
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleStatusChange(enquiry.id, 'archived')}
                    >
                      Archive
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(enquiry.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiriesManage;
