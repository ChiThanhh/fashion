import React, { useState } from 'react';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../service/authService';

const ForgotPassword = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error('Vui lòng nhập email');
        return;
      }
      const response = await forgotPassword({ email });
      toast.success('Đã gửi liên kết đặt lại mật khẩu. Vui lòng kiểm tra email của bạn.');
      setEmail(''); // Clear the input
      // Optionally navigate back to login after a delay
      setTimeout(() => navigate('/auth'), 2000);
    } catch (error) {
      const errorMessage = error?.response?.data?.error || 'Gửi yêu cầu thất bại';
      toast.error(errorMessage);
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-10 mt-4">
      <h2 data-aos="fade-up" className="text-2xl font-bold text-center text-gray-900 mb-8">
        Quên mật khẩu
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            data-aos="fade-up"
            data-aos-delay="100"
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition duration-300"
          >
            Gửi liên kết đặt lại mật khẩu
          </button>
        </div>
      </form>

      <p data-aos="fade-up" data-aos-delay="400" className="text-center text-sm text-gray-600 mt-6">
        Quay lại{' '}
        <span
          onClick={onSwitchToLogin}
          className="text-gray-800 hover:underline cursor-pointer"
        >
          Đăng nhập
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;