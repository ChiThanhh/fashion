import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { resetPassword } from '../service/authService';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Extract token from URL query parameters
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!token) {
        toast.error('Liên kết không hợp lệ hoặc đã hết hạn');
        return;
      }
      if (!newPassword) {
        toast.error('Vui lòng nhập mật khẩu mới');
        return;
      }
      if (newPassword.length < 8) {
        toast.error('Mật khẩu phải có ít nhất 8 ký tự');
        return;
      }

      await resetPassword({
        token,
        password: newPassword,
      });

      toast.success('Đã cập nhật mật khẩu thành công');
      setNewPassword('');
      setTimeout(() => navigate('/auth'), 2000);
    } catch (error) {
      const errorMessage = error?.response?.data?.error || 'Cập nhật mật khẩu thất bại';
      toast.error(errorMessage);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 bg-white rounded-2xl shadow-md p-10 mt-4 mx-auto my-10">
      <h2 data-aos="fade-up" className="text-2xl font-bold text-center text-gray-900 mb-8">
        Đặt lại mật khẩu
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            data-aos="fade-up"
            data-aos-delay="100"
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mật khẩu mới
          </label>
          <div data-aos="fade-up" data-aos-delay="200">
            <input
              type="password"
              id="password"
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 transition-all duration-300"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gray-800 text-white py-2 rounded-lg transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black'
            }`}
          >
            {loading ? 'Đang xử lý...' : 'Cập nhật mật khẩu'}
          </button>
        </div>
      </form>
      <p data-aos="fade-up" data-aos-delay="400" className="text-center text-sm text-gray-600 mt-6">
        Quay lại{' '}
        <span
          onClick={() => navigate('/auth')}
          className="text-gray-800 hover:underline cursor-pointer"
        >
          Đăng nhập
        </span>
      </p>
    </div>
  );
};

export default ResetPassword;