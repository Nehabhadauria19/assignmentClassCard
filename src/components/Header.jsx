// Header.js
import React from 'react';
import '../styles/Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="logo-img" />
     
      <div className="nav-links">
        <ul>
            
          <li>Classes</li>
          <li>One-on-one</li>
          <li>Packages</li>
          <li>Courses</li>
        </ul>
      </div>
      </div>
      <div className="user-profile">
      
        <div className="notifications">
          <span className="badge">🟢</span>
          <img src="chat-icon.png" alt="Notifications" className="icons" />
        </div>
        <div className="cart">
          <span className="badge">1</span>
          <img src="shopping-cart.png" alt="Cart" className="icons" />
        </div>
        <div className="user-info">
        <img src="img1.png" alt="User Avatar" className="avatar" />
          <span className="user-name1">Tom Cook</span>
         
          <span className="dropdown-icon">v</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
