import React from 'react'
import happyTeam from '../assets/happyTeam.jpeg'
import './Call.css'
import back from '../assets/back 2.png'
const Calltoaction = () => {
  return (
    <>
    <div >
    <div className='container'>
    <div className='left'>
      <h1>This is Landing Page.</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

      <button className='get'>Get Started</button>
      <button className='email'>Email us</button>

    </div>
    <div className='right'>
      <img src={happyTeam} alt="" />
      </div>
      
      </div>
      <img src={back} alt="person"   style={{width:"100vw",height:"250px"}}/>
      </div>


    </>
  )
}

export default Calltoaction
