import React from 'react'
import hero_img from '../assets/images/hero/hero-image.png'
const Hero = () => {
  return (
   <>
<section className="hero-area">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-5 col-md-12 col-12">
<div className="hero-content">
<h4>Creative App Landing Page</h4>
<h1>Best app for your<br />
modern lifestyle</h1>
<p>Tomfoolery are you taking the piss cor blimey guvnor <br />do one bleeding young delinquent.
</p>
<div className="button">
<a href="about-us.html" className="btn ">Try for free</a>
</div>
</div>
</div>
<div className="col-lg-7 col-12">
<div className="hero-image wow fadeInRight" data-wow-delay=".4s">
<img className="main-image" src={hero_img} alt="#"/>
</div>
</div>
</div>
</div>
</section>
   </>
  )
}

export default Hero