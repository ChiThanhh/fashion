import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login', 'register', 'forgot'

  return (
    <div className="h-[900px] flex justify-center bg-gray-200 px-4 mb- overflow-hidden relative">
      <div className="relative w-full max-w-xl h-auto">
        {/* Login Form */}
        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            activeForm === 'login'
              ? 'translate-x-0 opacity-100'
              : activeForm === 'register'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'
          }`}
        >
          <Login
            onSwitchToRegister={() => setActiveForm('forgot')}
            onSwitchToForgot={() => setActiveForm('register')}
          />
        </div>

        {/* Register Form */}
        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            activeForm === 'forgot'
              ? 'translate-x-0 opacity-100'
              : activeForm === 'login'
              ? '-translate-x-full opacity-0'
              : 'translate-x-full opacity-0'
          }`}
        >
          <Register onSwitchToLogin={() => setActiveForm('login')} />
        </div>

        {/* Forgot Password Form */}
        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            activeForm === 'register'
              ? 'translate-x-0 opacity-100'
              : activeForm === 'login'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'
          }`}
        >
          <ForgotPassword onSwitchToLogin={() => setActiveForm('login')} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;