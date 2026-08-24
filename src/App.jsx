import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './Components/Navbar.jsx'
import Calltoaction from './Components/Calltoaction.jsx'
import Product from './Components/Product.jsx'
import Features from './Components/Features.jsx'
import Pricing from './Components/Pricing.jsx'
import About from './Components/About.jsx'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/Calltoaction" />} />
        <Route path="/Calltoaction" element={<Calltoaction />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App