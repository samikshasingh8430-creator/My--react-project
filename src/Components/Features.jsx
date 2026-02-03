import React from 'react'
import{FaReact} from 'react-icons/fa'
import {SiNextdotjs,SiTailwindcss,SiTypescript} from 'react-icons/si';
import './Feature.css'
import wave from "../assets/wave.gif"


const Features = () => {
  return (
      <div className='features-container'>
    <div>
      <section className="features-section">
      {/* TOP HEADING */}
      <div className="features-heading">
        <p className="features-first">
          Latest & Greatest
        </p>
        <h2 className="features-h2">
          All the best technologies out there!
        </h2>
        <p className="features-last p">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="features-grid">
        
        {/* React */}
        <div className="features-card">
          <div className="features-icons">
            <FaReact size={26} className="text-cyan-500" />
          </div>
          <div>
            <h3 >React.js</h3>
            <p >
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components.
            </p>
          </div>
        </div>

        {/* Tailwind */}
        <div className="features-card">
          <div className=" features-icons">
            <SiTailwindcss size={26} />
          </div>
          <div>
            <h3>Tailwind</h3>
            <p>
              Tailwind CSS is a highly customizable, low-level CSS framework for
              quickly creating beautiful designs.
            </p>
          </div>
        </div>

        {/* Next.js */}
        <div className="features-card">
          <div className=" features-icons">
            <SiNextdotjs size={26} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Next.js</h3>
            <p className="text-gray-600 text-sm">
              Next.js is a React framework for building fast, SEO-friendly web applications with server-side rendering and static generation.
            </p>
          </div>
        </div>

        {/* TypeScript */}
        <div className="features-card">
          <div className="features-icons">
            <SiTypescript size={26} className="text-blue-600" />
          </div>
          <div>
            <h3>TypeScript</h3>
            <p>
              TypeScript is a programming language developed and maintained by
              Microsoft.
            </p>
          </div>
        </div>

      </div>
            <img src={wave} alt="wave"  style={{width:"100vw"}}/>
      
    </section>
    </div>
    </div>
  )
}

export default Features
