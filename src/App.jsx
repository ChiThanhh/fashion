import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import TopHeader from "./components/top-header";
import AuthPage from "./pages/AuthPage";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />

      {/* Thêm Toaster vào đây */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      <Footer />
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </BrowserRouter>
  );
}

export default App;
