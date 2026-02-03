import React from 'react'
import "./Product.css"
import product from "../assets/product.jpg"
import wave from "../assets/wave.gif"
const Product = () => {
  return (
    <>
<section className='hero'>

  <div className='hero-left'>
    <h2>A plug n play template</h2>
    <p>Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json</p>
  </div>
  <div className='hero-right'>
    <h1>React <span> landing </span>  page 2026</h1>
    <img src={product}alt="" />
  </div>

</section>
      <img src={wave} alt="wave"  style={{width:"100vw",height:"100vh"}}/>

    </>
  )
}

export default Product
