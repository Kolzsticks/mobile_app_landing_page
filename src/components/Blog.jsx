import React from 'react'
import blog1 from '../assets/images/blog/blog-1.png'
import blog2 from '../assets/images/blog/blog-3.png'
import blog3 from '../assets/images/blog/blog-3.png'

const Blog = () => {
  return (
   <>
   <section className="blog-section section">
<div className="container">
<div className="row">
<div className="col-12">
<div className="section-title">
<h3 className="wow zoomIn" data-wow-delay=".2s">Blogs</h3>
<h2 className="wow fadeInUp" data-wow-delay=".4s">Our Latest News</h2>
<p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered alteration in some form.</p>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">

<div className="single-blog-grid">
<div className="blog-img">
<a href="blog-single.html">
<img src={blog1} alt="#"/>
</a>
</div>
<div className="blog-content">
<div className="meta-info">
<a className="date" href="#"><i className="lni lni-timer"></i> 10 June 2023
</a>
<a className="author" href="#"><i className="lni lni-user"></i> Anjelio Joly
</a>
</div>
<h4>
<a href="blog-single.html">Branding Involves Developing a Strategy to Creating.</a>
</h4>
<p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
ividunt dolore.</p>
<div className="button">
<a href="blog-single.html" className="btn">Read More</a>
</div>
</div>
</div>

</div>
<div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">

<div className="single-blog-grid">
<div className="blog-img">
<a href="blog-single.html">
<img src={blog2} alt="#"/>
</a>
</div>
<div className="blog-content">
<div className="meta-info">
<a className="date" href="#"><i className="lni lni-timer"></i> 5 Aug 2023
</a>
<a className="author" href="#"><i className="lni lni-user"></i> Kumila ksusi
</a>
</div>
<h4>
<a href="blog-single.html">Design is a Plan or The Construction of an
Object.</a>
</h4>
<p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
ividunt dolore.</p>
<div className="button">
<a href="blog-single.html" className="btn">Read Blog</a>
</div>
</div>
</div>

</div>
<div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">

<div className="single-blog-grid">
<div className="blog-img">
<a href="blog-single.html">
<img src={blog3} alt="#"/>
</a>
</div>
<div className="blog-content">
<div className="meta-info">
<a className="date" href="#"><i className="lni lni-timer"></i> 25 Dec 2023
</a>
<a className="author" href="#"><i className="lni lni-user"></i> Alex Jendro
</a>
</div>
<h4>
<a href="blog-single.html">The Data-Driven Approach to Understanding.</a>
</h4>
<p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
ividunt dolore.</p>
<div className="button">
<a href="blog-single.html" className="btn">Read Blog</a>
</div>
</div>
</div>

</div>
</div>
</div>
</section>
   </>
  )
}

export default Blog