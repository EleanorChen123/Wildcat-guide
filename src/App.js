import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import HistoryView from './components/HistoryView';
import LoginView from './components/LoginView';
import QuestionMapView from './components/QuestionMapView'; // Import the new QuestionMapView component
import { AuthProvider } from './contexts/AuthContext';

/**
 * App component serves as the root of the application.
 * It sets up the React Router for navigation and renders the main layout.
 *
 * @returns {JSX.Element} The main application layout with routing configured.
 */
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/history" element={<HistoryView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/ask-more" element={<QuestionMapView />} /> {/* Add the new route for Question Map */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;