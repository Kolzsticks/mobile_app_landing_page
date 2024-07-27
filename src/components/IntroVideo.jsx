import shape_1 from '../assets/images/video/shape1.svg';
import shape_2 from '../assets/images/video/shape2.svg';

const IntroVideo = () => {

  return (
    <>
      <section className="intro-video-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content-head">
                <div className="inner-content">
                  <img className="shape1" src={shape_1} alt="#" />
                  <img className="shape2" src={shape_2} alt="#" />
                  <div className="section-title" data-aos="zoom-in" data-aos-delay="200">
                    <span>Create your own experience</span>
                    <h2 data-aos="fade-up" data-aos-delay="400">Watch Our Intro Video</h2>
                    <p data-aos="fade-up" data-aos-delay="600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                  </div>
                  <div className="intro-video-play">
                    <div className="play-thumb" data-aos="zoom-in" data-aos-delay="200">
                      <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&amp;fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM" className="glightbox video">
                        <i className="lni lni-play"></i>
                      </a>
                    </div>
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

export default IntroVideo;
