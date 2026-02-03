import React from 'react'
import './Pricing.css'
import wave from '../assets/wave.gif'

const Pricing = () => {
  return (
    <>
      <h2 className='pricing-title'>Pricing</h2>

      {/* LEFT PLAN */}
      <section className="pricing-section">
      <div className="pricing-container">
                <h2>Free</h2>
        <p className='price'>$0<span>for one user</span></p>
        <ul>
          <li>1 User</li>
          <li>Basic Support</li>
          <li>1 GB of Storage</li>
          <li>Email Support</li>
        </ul>
        <button>choose plan</button>
      </div>

      {/* CENTER PLAN (HIGHLIGHTED) */}
      <div className="pricing-card ">
        <h2 style={{color:"red"}}>Pro</h2>
        <p className='price' style={{color:"red"}}>$15<span>per user</span></p>
        <ul className='pro'>
          <li>5 Users</li>
          <li>Priority Support</li>
          <li>10 GB of Storage</li>
          <li>Phone and Email Support</li>
        </ul>
        <button>choose plan</button>
      </div>

      {/* RIGHT PLAN */}
      <div className="pricing-card">
        <h2>Enterprise</h2>
        <p className='price'>$29<span>per user</span></p>

        <ul>
          <li>50 Users</li>
          <li>24/7 Support</li>
          <li>100 GB of Storage</li>
          <li>Phone and Email Support</li>
        </ul>
        <button>choose plan</button>
      </div>

    </section>
          <img src={wave} alt="wave"   style={{width:"100vw"}}/>
    
      
    </>
  )
}

export default Pricing
