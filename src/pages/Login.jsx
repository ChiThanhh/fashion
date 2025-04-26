import React from 'react';

const Login = ({ onSwitch }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-10 mt-4">
      <h2 data-aos="fade-up"  className="text-2xl font-bold text-center text-gray-900 mb-8">Đăng nhập</h2>

      <form className="space-y-5">
        <div >
          <label data-aos="fade-up" data-aos-delay="100" htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
          <div data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              id="email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
            placeholder="example@email.com"
            />
          </div>
        </div>
        <div>
          <label data-aos="fade-up" data-aos-delay="100" htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
          <div data-aos="fade-up" data-aos-delay="200">
            <input
              type="password"
              id="password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
            placeholder="••••••••"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 " />
            Ghi nhớ đăng nhập
          </label>
          <a href="#" className="text-gray-500 hover:underline">Quên mật khẩu?</a>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <button

          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition duration-300"
        >
          Đăng nhập
        </button>
        </div>
      </form>

      <p data-aos="fade-up" data-aos-delay="500" className="text-center text-sm text-gray-600 mt-6">
        Chưa có tài khoản? <span onClick={onSwitch} className="text-gray-800 hover:underline cursor-pointer">Đăng ký</span>
      </p>

      <div data-aos="fade-up" data-aos-delay="600" className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm text-gray-500">
          <span className="bg-white px-2">Hoặc đăng nhập bằng</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
          <i className="fab fa-google"></i> Đăng nhập với Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
          <i className="fab fa-facebook-f"></i> Đăng nhập với Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
