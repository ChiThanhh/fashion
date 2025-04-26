import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TopHeader from './components/top-header'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthPage from './pages/AuthPage'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
function App() {
  return (

    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
