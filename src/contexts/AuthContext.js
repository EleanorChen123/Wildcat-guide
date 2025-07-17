import React, { createContext, useState, useContext } from 'react';

// Create Auth Context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Manages login status, persisted in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    return storedLoginStatus === 'true';
  });

  // Mock login function
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Mock logout function
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};