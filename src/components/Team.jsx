import team_1 from '../assets/images/team/team1.jpg';
import team_2 from '../assets/images/team/team2.jpg';
import team_3 from '../assets/images/team/team3.jpg';
import team_4 from '../assets/images/team/team4.jpg';

const Team = () => {

  return (
    <>
      <section className="team section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="zoom-in" data-aos-delay="200">
                <h3>Expert Team</h3>
                <h2 data-aos="fade-up" data-aos-delay="400">Meet Our Team</h2>
                <p data-aos="fade-up" data-aos-delay="600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
              <div className="single-team">
                <div className="team-image">
                  <img src={team_4} alt="#" />
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
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="single-team">
                <div className="team-image">
                  <img src={team_1} alt="#" />
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
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
              <div className="single-team">
                <div className="team-image">
                  <img src={team_2} alt="#" />
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
            <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="900">
              <div className="single-team">
                <div className="team-image">
                  <img src={team_3} alt="#" />
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

export default Team;
