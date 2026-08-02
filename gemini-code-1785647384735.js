import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function StoreHome() {
  const plans = [
    { id: 1, name: 'Shred & Tone (E-Book)', price: '$19.99', desc: 'Complete 12-week fat loss and muscle toning guide.' },
    { id: 2, name: 'Pro Workout Tracker App Access', price: '$9.99/mo', desc: 'Track your daily lifts, calories, and progress seamlessly.' },
    { id: 3, name: '1-on-1 Elite Coaching', price: '$149.99', desc: 'Custom meal plans and weekly video check-ins.' },
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111' }}>Transform Your Body with FitLog</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Get premium workout programs, professional guides, and coaching plans.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {plans.map((plan) => (
          <div key={plan.id} style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{plan.name}</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '20px' }}>{plan.desc}</p>
            </div>
            <div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', display: 'block', marginBottom: '15px' }}>{plan.price}</span>
              <button 
                onClick={() => alert(`Thank you for purchasing ${plan.name}!`)}
                style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '1rem' }}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', background: '#111', color: '#fff' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>FitLog Store</h2>
        <div>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Shop Plans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<StoreHome />} />
      </Routes>
    </Router>
  );
}

export default App;