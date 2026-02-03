import React from 'react'
import "./About.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.png'
const About = () => {
  return (
    <>
      
      <section className="about-section">
      <div className="about-container">

        {/* LEFT SIDE TEXT */}
        <img src={logo} alt="" className='image' />
        <div className="about-left">
          <h2 className='first'>Something</h2>
          <h2 className='second'>Something</h2>
          <h2 className='third'>Something</h2>
          <h2 className='fourth'>Something</h2>

        </div>

        {/* CENTER CONTENT */}
        <div className="about-center">
          <div className="logo-shape"></div>
          <p className="about-desc">
            We create beautiful and modern web experiences. <br /> Clean design,
            powerful code, and smooth user experience.
          </p>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="about-right">
         <h1 className='about-right'> <FaGithub /></h1>
         <h1 className='about-right'><FaLinkedin /></h1> 
          <h1 className='about-right'><FaTwitter /></h1>
        </div>

      </div>

      <p className="footer-text">© 2026 designed by <span>Samiksha singh</span></p>
    </section>

    </>
  )
}

export default About
