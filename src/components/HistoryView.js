import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function HistoryView() {
  const { isLoggedIn, email } = useAuth(); // Get login state and email
  const [history, setHistory] = useState([]);
  console.log("📧 email in HistoryView:", email);


  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/history/${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search history');
        }
        const data = await response.json();
        console.log('✅ Search history fetched from HistoryView:', data);
        setHistory(data);
      } catch (error) {
        console.error('❌ Error fetching history:', error);
      }
    };

    if (isLoggedIn && email) {
      fetchHistory();
    }
  }, [isLoggedIn, email]);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }} className="d-flex flex-column align-items-center">
      <h1 className="display-4 fw-bold mb-4 search-title text-purple" style={{ marginTop: '2rem' }}>
        My History
      </h1>

      {isLoggedIn ? (
        <>
          <div className="input-group mb-5 w-75">
            <input type="text" className="form-control" placeholder="Type your question" id="historySearchInput" />
            <button className="btn btn-brand" type="button" id="historySearchButton">Search</button>
          </div>

          <div className="container mt-4 w-75">
            <div className="card shadow-sm quick-card">
              <div className="card-body">
                <h5 className="card-title text-purple">Your Past Interactions:</h5>
                {history.length === 0 ? (
                  <p>No history entries found. Start asking questions!</p>
                ) : (
                  <ul className="list-group">
                    {history.map((entry, index) => (
                      <li key={index} className="list-group-item">
                        <strong>Search:</strong> {entry.search_query} <br />
                        <strong>Time:</strong> {new Date(entry.timestamp).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
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
