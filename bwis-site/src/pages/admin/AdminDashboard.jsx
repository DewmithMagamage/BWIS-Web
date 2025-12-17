import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth.js';
import {
  getNewsEvents,
  getAdmissionsEnquiries,
  getContactMessages,
} from '../../utils/storage.js';
import Overview from './sections/Overview.jsx';
import NewsEventsManage from './sections/NewsEventsManage.jsx';
import GalleryManage from './sections/GalleryManage.jsx';
import DownloadsManage from './sections/DownloadsManage.jsx';
import EnquiriesManage from './sections/EnquiriesManage.jsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [stats, setStats] = useState({
    enquiries: 0,
    events: 0,
    messages: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load stats
    const enquiries = getAdmissionsEnquiries();
    const events = getNewsEvents();
    const messages = getContactMessages();
    setStats({
      enquiries: enquiries.filter((e) => e.status === 'new').length,
      events: events.length,
      messages: messages.filter((m) => m.status === 'new').length,
    });
  }, [activeSection]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">BWIS Admin</div>
        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            Overview
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'news' ? 'active' : ''}`}
            onClick={() => setActiveSection('news')}
          >
            News &amp; Events
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveSection('gallery')}
          >
            Gallery
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'downloads' ? 'active' : ''}`}
            onClick={() => setActiveSection('downloads')}
          >
            Downloads
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveSection('enquiries')}
          >
            Admissions Enquiries
            {stats.enquiries > 0 && <span className="badge">{stats.enquiries}</span>}
          </button>
        </nav>
        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {activeSection === 'overview' && 'Dashboard Overview'}
            {activeSection === 'news' && 'Manage News & Events'}
            {activeSection === 'gallery' && 'Manage Gallery'}
            {activeSection === 'downloads' && 'Manage Downloads'}
            {activeSection === 'enquiries' && 'Admissions Enquiries'}
          </h1>
        </header>
        {activeSection === 'overview' && <Overview stats={stats} />}
        {activeSection === 'news' && <NewsEventsManage onUpdate={() => setActiveSection('overview')} />}
        {activeSection === 'gallery' && <GalleryManage />}
        {activeSection === 'downloads' && <DownloadsManage />}
        {activeSection === 'enquiries' && <EnquiriesManage />}
      </main>
    </div>
  );
};

export default AdminDashboard;
