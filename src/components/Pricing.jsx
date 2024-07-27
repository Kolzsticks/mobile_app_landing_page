

const Pricing = () => {


  return (
    <>
      <section id="pricing" className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="zoom-in" data-aos-delay="200">
                <h3>Pricing</h3>
                <h2>Pricing &amp; Plans</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
              <div className="single-table">
                <div className="table-head">
                  <h4 className="title">Individual</h4>
                  <p className="sub-title">Powerful &amp; Awesome Elements</p>
                  <div className="price">
                    <h2 className="amount"><span className="currency">$</span>19<span className="duration">/month</span></h2>
                  </div>
                </div>
                <div className="table-content">
                  <ul className="table-list">
                    <li>Commercial License</li>
                    <li>100+ HTML UI Elements</li>
                    <li>01 Domain Support</li>
                    <li className="disable">6 Month Premium Support</li>
                    <li className="disable">Lifetime Updates</li>
                  </ul>
                </div>
                <div className="button">
                  <a href="#" className="btn">Start free trial <i className="lni lni-arrow-right"></i></a>
                </div>
                <p className="no-card">No credit card required</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
              <div className="single-table middle">
                <span className="popular">Most Popular</span>
                <div className="table-head">
                  <h4 className="title">Exclusive</h4>
                  <p className="sub-title">Powerful &amp; Awesome Elements</p>
                  <div className="price">
                    <h2 className="amount"><span className="currency">$</span>49<span className="duration">/month</span></h2>
                  </div>
                </div>
                <div className="table-content">
                  <ul className="table-list">
                    <li>Commercial License</li>
                    <li>100+ HTML UI Elements</li>
                    <li>01 Domain Support</li>
                    <li>6 Month Premium Support</li>
                    <li className="disable">Lifetime Updates</li>
                  </ul>
                </div>
                <div className="button">
                  <a href="#" className="btn btn-alt">Start free trial <i className="lni lni-arrow-right"></i></a>
                </div>
                <p className="no-card">No credit card required</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
              <div className="single-table">
                <div className="table-head">
                  <h4 className="title">Premium</h4>
                  <p className="sub-title">Powerful &amp; Awesome Elements</p>
                  <div className="price">
                    <h2 className="amount"><span className="currency">$</span>99<span className="duration">/month</span></h2>
                  </div>
                </div>
                <div className="table-content">
                  <ul className="table-list">
                    <li>Commercial License</li>
                    <li>100+ HTML UI Elements</li>
                    <li>01 Domain Support</li>
                    <li>6 Month Premium Support</li>
                    <li>Lifetime Updates</li>
                  </ul>
                </div>
                <div className="button">
                  <a href="#" className="btn">Start free trial <i className="lni lni-arrow-right"></i></a>
                </div>
                <p className="no-card">No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
