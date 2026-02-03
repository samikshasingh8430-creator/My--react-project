import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png' 
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
      <img src={logo} className='logo' alt="" />
        <Link to="/calltoaction">Call to action</Link>
        <Link to="/Product">Product</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
    </nav>
      
    </>
  );
};

export default Navbar
