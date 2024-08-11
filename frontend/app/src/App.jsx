import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={900}
      >
        <Routes location={location}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
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
