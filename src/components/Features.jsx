import featured_img from '../assets/images/features/feature-img.png';

const Features = () => {

  return (
    <section className="features section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="image" data-aos="fade-left" data-aos-delay="300">
              <img src={featured_img} alt="Features Image"/>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="content">
              <h3 className="heading" data-aos="fade-up" data-aos-delay="500">
                <span>Core Features</span>
                Designed &amp; built by the latest code integration
              </h3>

              <div className="single-feature" data-aos="fade-up" data-aos-delay="600">
                <div className="f-icon">
                  <i className="lni lni-dashboard"></i>
                </div>
                <h4>Fast performance</h4>
                <p>Get your blood tests delivered at home; collect a sample from the news, your blood tests.</p>
              </div>

              <div className="single-feature" data-aos="fade-up" data-aos-delay="700">
                <div className="f-icon">
                  <i className="lni lni-pencil-alt"></i>
                </div>
                <h4>Prototyping</h4>
                <p>Get your blood tests delivered at home; collect a sample from the news, your blood tests.</p>
              </div>

              <div className="single-feature" data-aos="fade-up" data-aos-delay="800">
                <div className="f-icon">
                  <i className="lni lni-vector"></i>
                </div>
                <h4>Vector Editing</h4>
                <p>Get your blood tests delivered at home; collect a sample from the news, your blood tests.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
