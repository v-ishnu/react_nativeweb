import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebHome from './Screen/Home';
import Sidebar from './sideBar';

const Web = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div
          style={{
            marginLeft: '250px',
            padding: '20px',
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<WebHome />} />
            <Route path="/about" element={<WebHome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Web;
