// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppContext } from './context/AppContext';

import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

const App = () => {
  const { isDark } = useAppContext();

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
  }, [isDark]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;