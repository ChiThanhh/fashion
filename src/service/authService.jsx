import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const API_URL = import.meta.env.VITE_SERVER_API;

// Khởi tạo Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY
);

// Đăng ký
export function register(data) {
  return axios.post(API_URL + "/api/auth/register", data);
}

// Đăng nhập
export function login(data) {
  return axios.post(API_URL + "/api/auth/login", data);
}

// Quên mật khẩu - gửi mail
export function forgotPassword(data) {
  return axios.post(API_URL + "/api/auth/forgot-password", data);
}

// Reset mật khẩu - đổi mật khẩu từ frontend
export async function resetPassword(newPassword, token) {
  return axios.post(API_URL + "/api/auth/reset-password", {
    newPassword,
    token,
  });
}
