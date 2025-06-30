import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassListPage from './pages/ClassListPage';
import ClassDetailPage from './pages/ClassDetailPage';
import InstructorProfilePage from './pages/InstructorProfilePage';
import UserProfilePage from './pages/UserProfilePage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header/Navbar component would typically go here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassListPage />} />
          <Route path="/classes/:id" element={<ClassDetailPage />} />
          <Route path="/instructors/:id" element={<InstructorProfilePage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />} />
          <Route path="/community/:classId" element={<CommunityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add more routes for instructor dashboards, settings, etc. */}
        </Routes>
        {/* Footer component would typically go here */}
      </div>
    </Router>
  );
}

export default App;
