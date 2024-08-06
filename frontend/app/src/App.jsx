// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
// import WelcomePage from './components/WelcomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const WelcomePage = () => (
  <div className="welcome-page">
    <div className="whisker-wiz">
      <img src="path_to_image/whisker_wiz.png" alt="Whisker Wiz" />
      <h1>Whisker Wiz</h1>
      <p>Your friendly health assistant</p>
      <div className="buttons">
        <a href="/login" className="button">Login</a>
        <a href="/signup" className="button">Sign Up</a>
      </div>
    </div>
  </div>
);

export default App;
