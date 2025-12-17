import React, { useState, useEffect } from 'react';
import {
  getNewsEvents,
  saveNewsEvent,
  updateNewsEvent,
  deleteNewsEvent,
} from '../../../utils/storage.js';

const NewsEventsManage = () => {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    setEvents(getNewsEvents());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateNewsEvent(editingId, formData);
    } else {
      saveNewsEvent(formData);
    }
    setFormData({ title: '', date: '', description: '', image: '' });
    setEditingId(null);
    loadEvents();
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setFormData({
      title: event.title || '',
      date: event.date || '',
      description: event.description || '',
      image: event.image || '',
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteNewsEvent(id);
      loadEvents();
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', date: '', description: '', image: '' });
  };

  return (
    <div>
      <div className="admin-section">
        <h2>{editingId ? 'Edit Event' : 'Add New Event'}</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-field full-width">
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date *</label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div className="form-field full-width">
            <label htmlFor="image">Image URL (optional)</label>
            <input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="form-field full-width">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Event' : 'Save Event'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-outline" onClick={handleCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="admin-section">
        <h2>All Events ({events.length})</h2>
        {events.length === 0 ? (
          <p style={{ color: '#6b7280', marginTop: '1rem' }}>No events yet. Add your first event above.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {event.description}
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleEdit(event)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(event.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NewsEventsManage;
