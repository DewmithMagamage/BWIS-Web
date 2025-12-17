import React, { useState, useEffect } from 'react';
import { getGalleryImages, addGalleryImage, deleteGalleryImage } from '../../../utils/storage.js';

const GalleryManage = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    category: 'general',
  });

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setImages(getGalleryImages());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGalleryImage(formData);
    setFormData({ title: '', imageUrl: '', category: 'general' });
    loadImages();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      deleteGalleryImage(id);
      loadImages();
    }
  };

  return (
    <div>
      <div className="admin-section">
        <h2>Add New Image</h2>
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
              <option value="general">General</option>
              <option value="sports">Sports</option>
              <option value="events">Events</option>
              <option value="classroom">Classroom</option>
              <option value="activities">Activities</option>
            </select>
          </div>
          <div className="form-field full-width">
            <label htmlFor="imageUrl">Image URL *</label>
            <input
              id="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Image
            </button>
          </div>
        </form>
      </div>

      <div className="admin-section">
        <h2>Gallery Images ({images.length})</h2>
        {images.length === 0 ? (
          <p style={{ color: '#6b7280', marginTop: '1rem' }}>No images yet. Add your first image above.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {images.map((img) => (
              <div key={img.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23e5e7eb" width="200" height="150"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div style={{ padding: '0.75rem' }}>
                  <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.9rem' }}>{img.title}</h4>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>{img.category}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(img.id)}
                    style={{ width: '100%' }}
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

export default GalleryManage;
