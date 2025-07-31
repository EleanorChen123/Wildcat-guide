import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

function LoginView() {
  const [netId, setNetId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  // Handles form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    if (netId.trim() !== '' && password.trim() !== '') {
      const email = `${netId}@northwestern.edu`;

      try {
        // ✅ 调用后端 POST /api/users 接口
        const response = await fetch("http://localhost:5001/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("User creation failed");
        }

        console.log("✅ User creation API called successfully");

        // ✅ 改这里：登录时传入 email
        login(email);
        navigate('/'); // Navigate to home after login

      } catch (error) {
        console.error("❌ Failed to create user:", error);
        alert("Login failed. Could not create user.");
      }
    } else {
      alert('Please enter both NetID and Password to simulate login.');
    }
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }} className="d-flex flex-column align-items-center justify-content-center">
      <div className="card shadow-sm p-4 quick-card" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-purple text-center mb-4">Login to Wildcat Guide</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="netId" className="form-label">NetID</label>
              <input
                type="text"
                className="form-control"
                id="netId"
                aria-describedby="netIdHelp"
                value={netId}
                onChange={(e) => setNetId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-brand w-100">Login</button>
            <div className="text-center mt-3">
              <a href="#" className="card-link">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
