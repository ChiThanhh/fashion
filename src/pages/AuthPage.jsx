import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className=" h-[900px] flex justify-center bg-gray-200 px-4 mb- overflow-hidden relative">
      <div className="relative w-full max-w-xl h-auto">
        {/* Form Wrapper */}
        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            showRegister ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <Login onSwitch={() => setShowRegister(true)} />
        </div>

        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            showRegister ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <Register onSwitch={() => setShowRegister(false)} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
