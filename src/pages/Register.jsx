import React from 'react';

const Register = ({ onSwitch }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-10 mt-4">
      <h2  className="text-2xl font-bold text-center text-gray-900 mb-8">Đăng ký</h2>

      <form className="space-y-5">
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
        <input
          type="text"
          placeholder="Họ và tên"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
        />
        </div>
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
        />
        </div>
        <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
        <input
          type="password"
          placeholder="Mật khẩu"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
        />
        </div>
        <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
        />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition duration-300"
        >
          Đăng ký
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Đã có tài khoản? <span onClick={onSwitch} className="text-gray-800 hover:underline cursor-pointer">Đăng nhập</span>
      </p>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm text-gray-500">
          <span className="bg-white px-2">Hoặc đăng nhập bằng</span>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
          <i className="fab fa-google"></i> Đăng nhập với Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
          <i className="fab fa-facebook-f"></i> Đăng nhập với Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
