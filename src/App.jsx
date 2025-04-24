import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TopHeader from './components/top-header'

function App() {
  return (

    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
