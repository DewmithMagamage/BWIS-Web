import React, { useState, useEffect } from 'react';
import { getDownloads, addDownload, deleteDownload } from '../../../utils/storage.js';

const DownloadsManage = () => {
  const [downloads, setDownloads] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    fileUrl: '',
    description: '',
    category: 'form',
  });

  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = () => {
    setDownloads(getDownloads());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDownload(formData);
    setFormData({ title: '', fileUrl: '', description: '', category: 'form' });
    loadDownloads();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this download?')) {
      deleteDownload(id);
      loadDownloads();
    }
  };

  return (
    <div>
      <div className="admin-section">
        <h2>Add New Download</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-field">
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
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="form">Form</option>
              <option value="handbook">Handbook</option>
              <option value="policy">Policy</option>
              <option value="calendar">Calendar</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-field full-width">
            <label htmlFor="fileUrl">File URL *</label>
            <input
              id="fileUrl"
              type="url"
              value={formData.fileUrl}
              onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
              placeholder="https://example.com/file.pdf"
              required
            />
          </div>
          <div className="form-field full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Download
            </button>
          </div>
        </form>
      </div>

      <div className="admin-section">
        <h2>All Downloads ({downloads.length})</h2>
        {downloads.length === 0 ? (
          <p style={{ color: '#6b7280', marginTop: '1rem' }}>No downloads yet. Add your first download above.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>File URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((download) => (
                <tr key={download.id}>
                  <td>{download.title}</td>
                  <td>{download.category}</td>
                  <td>{download.description || '-'}</td>
                  <td>
                    <a href={download.fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
                      View File
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(download.id)}
                    >
                      Delete
                    </button>
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

export default DownloadsManage;
