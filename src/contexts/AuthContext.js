import React, { createContext, useState, useContext } from 'react';

// 创建上下文
const AuthContext = createContext(null);

// 提供器组件
export const AuthProvider = ({ children }) => {
  // 登录状态
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // 用户邮箱
  const [email, setEmail] = useState(() => {
    return localStorage.getItem('email') || null;
  });

  // 登录函数（接收 email）
  const login = (userEmail) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', userEmail);
  };

  // 登出函数
  const logout = () => {
    setIsLoggedIn(false);
    setEmail(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定义 hook
export const useAuth = () => useContext(AuthContext);
