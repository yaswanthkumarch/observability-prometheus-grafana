import React, { useState } from 'react';
import logo from '../logo.svg';
import InfoPopup from './InfoPopup';
import AnimatedBanner from './AnimatedBanner';

function Layout({ children }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="app-layout">
      <header className="app-header slide-down">
        <div className="brand">
    {/*   <img src={logo} alt="DevOps Shack logo" className="logo" />*/}
          <div>
           
            <p className="nav-subtitle">User Management</p>
          </div>
        </div>
      </header>
      <AnimatedBanner message="Welcome to DevSecops 🚀" />
      <div className="app-body">
        <aside className="sidebar slide-in-left">
          <h3>Connect</h3>
          <ul className="social-links">
            <li><a className="sidebar-btn" href="https://www.linkedin.com/in/yaswanthkumar-chennareddy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="sidebar-btn" href="https://github.com/yaswanthkumarch" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        
          </ul>
        </aside>
        <main className="main-content fade-in">
          {children}
        </main>
      </div>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} DevOps Shack. All rights reserved.</p>
      </footer>

      <button className="help-btn" onClick={() => setShowInfo(true)}>?</button>
      {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}

      <div className="bubble-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="star-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
    </div>
  );
}

export default Layout;
