import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook
import { Link } from 'react-router-dom'; // Import Link

function HistoryView() {
  const { isLoggedIn } = useAuth(); // Get isLoggedIn state

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }} className="d-flex flex-column align-items-center">
        <h1 className="display-4 fw-bold mb-4 search-title text-purple" style={{ marginTop: '2rem' }}>My History</h1>

        {isLoggedIn ? (
            <>
                {/* Content displayed when logged in */}
                <div className="input-group mb-5 w-75">
                    <input type="text" className="form-control" placeholder="Type your question" id="historySearchInput" />
                    <button className="btn btn-brand" type="button" id="historySearchButton">Search</button>
                </div>
                <div className="container mt-4">
                    <div className="card shadow-sm quick-card">
                        <div className="card-body">
                            <h5 className="card-title text-purple">Your Past Interactions:</h5>
                            <p>No history entries found. Start asking questions!</p>
                            {/* Future: Actual history data display */}
                        </div>
                    </div>
                </div>
            </>
        ) : (
            // Content displayed when not logged in
            <div className="container mt-4">
                <div className="card shadow-sm quick-card">
                    <div className="card-body">
                        <h5 className="card-title text-purple">Access Your History</h5>
                        <p className="mb-0">Please log in to view your history.</p>
                        <Link to="/login" className="btn btn-brand mt-3">Go to Login</Link>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default HistoryView;