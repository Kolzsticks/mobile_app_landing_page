import testi_1 from '../assets/images/testimonial/testi-1.png';
import testi_2 from '../assets/images/testimonial/testi-2.png';
import testi_3 from '../assets/images/testimonial/testi-3.png';

const Testimonials = () => {


  return (
    <>
      <section className="testimonials style2 section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="zoom-in" data-aos-delay="200">
                <h3>Customer Reviews</h3>
                <h2 data-aos="fade-up" data-aos-delay="400">Our Testimonials</h2>
                <p data-aos="fade-up" data-aos-delay="600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row testimonial-slider">
            <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                  </div>
                  <div className="author">
                    <img src={testi_1} alt="#" />
                    <h4 className="name">Somalia D Silva
                      <span className="deg">Business Manager</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                  </div>
                  <div className="author">
                    <img src={testi_2} alt="#" />
                    <h4 className="name">David Warner
                      <span className="deg">Web Developer</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="700">
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                  </div>
                  <div className="author">
                    <img src={testi_3} alt="#" />
                    <h4 className="name">Jems Gilario
                      <span className="deg">Graphics Designer</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="900">
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                  </div>
                  <div className="author">
                    <img src={testi_2} alt="#" />
                    <h4 className="name">David Warner
                      <span className="deg">Web Developer</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="1100">
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”</p>
                  </div>
                  <div className="author">
                    <img src={testi_3} alt="#" />
                    <h4 className="name">Jems Gilario
                      <span className="deg">Graphics Designer</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
