import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

function Navbar() {
  const { isLoggedIn, logout } = useAuth(); // Get isLoggedIn state and logout function
  const navigate = useNavigate();

  // Handles logout action
  const handleLogout = () => {
    logout(); // Call global logout function
    navigate('/'); // Navigate to home after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Wildcat Guide</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="bi bi-house-door-fill me-1"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history"><i className="bi bi-clock-history me-1"></i>History</Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                // Renders Log Out button if logged in
                <button className="nav-link btn btn-link" onClick={handleLogout} style={{ color: 'white', textDecoration: 'none' }}>
                  <i className="bi bi-box-arrow-right me-1"></i>Log Out
                </button>
              ) : (
                // Renders Login link if not logged in
                <Link className="nav-link" to="/login"><i className="bi bi-person-fill me-1"></i>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;