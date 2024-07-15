import team_1 from '../assets/images/team/team1.jpg'
import team_2 from '../assets/images/team/team2.jpg'
import team_3 from '../assets/images/team/team3.jpg'
import team_4 from '../assets/images/team/team4.jpg'

const Team = () => {
  return (
  <>
  <section className="team section">
<div className="container">
<div className="row">
<div className="col-12">
<div className="section-title">
<h3 className="wow zoomIn" data-wow-delay=".2s">Expert Team</h3>
<h2 className="wow fadeInUp" data-wow-delay=".4s">Meet Our Team</h2>
<p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered alteration in some form.</p>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s">

<div className="single-team">
<div className="team-image">
<img src={team_4} alt="#"/>
</div>
<div className="content">
<h4>Deco Milan
<span>Founder</span>
</h4>
<ul className="social">
<li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
<li><a href="#"><i className="lni lni-instagram"></i></a></li>
<li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
<li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
</ul>
</div>
</div>

</div>
<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".5s">

<div className="single-team">
<div className="team-image">
<img src={team_1} alt="#"/>
</div>
<div className="content">
<h4>Liza Marko
<span>Developer</span>
</h4>
<ul className="social">
<li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
<li><a href="#"><i className="lni lni-instagram"></i></a></li>
<li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
<li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
</ul>
</div>
</div>

</div>
<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".7s">

<div className="single-team">
<div className="team-image">
<img src={team_2} alt="#"/>
</div>
<div className="content">
<h4>John Smith
<span>Designer</span>
</h4>
<ul className="social">
<li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
<li><a href="#"><i className="lni lni-instagram"></i></a></li>
<li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
<li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
</ul>
</div>
</div>

</div>
<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".9s">

<div className="single-team">
<div className="team-image">
<img src={team_3} alt="#"/>
</div>
<div className="content">
<h4>Amion Doe
<span>Co-Founder</span>
</h4>
<ul className="social">
<li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
<li><a href="#"><i className="lni lni-instagram"></i></a></li>
<li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
<li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
</ul>
</div>
</div>

</div>
</div>
</div>
</section>
  </>
  )
}

export default Team