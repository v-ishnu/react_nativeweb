// src/Component/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '250px',
        height: '100vh',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2>Sidebar</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/e-kyc" style={{ color: 'white', textDecoration: 'none' }}>
            E-Kyc
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
