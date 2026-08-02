import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to FitLog</h1>
      <p>Your personal companion to log workouts and track progress.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px 30px', background: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#007bff' }}>FitLog Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;