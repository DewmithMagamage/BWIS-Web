import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';
import StudentLife from './pages/StudentLife.jsx';
import Contact from './pages/Contact.jsx';
import NewsEvents from './pages/NewsEvents.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import Alumni from './pages/Alumni.jsx';
import Careers from './pages/Careers.jsx';
import Downloads from './pages/Downloads.jsx';
import SchoolCalendar from './pages/SchoolCalendar.jsx';
import ParentHandbook from './pages/ParentHandbook.jsx';
import Policies from './pages/Policies.jsx';
import CodeOfConduct from './pages/CodeOfConduct.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/contact" element={<Contact />} />
              {/* Footer quick links */}
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/school-calendar" element={<SchoolCalendar />} />
              {/* Footer resources */}
              <Route path="/parent-handbook" element={<ParentHandbook />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
