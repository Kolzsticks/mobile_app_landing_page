

import YourComponent from './assets/js/main';

import Hero from './components/Hero';
import Features from './components/Features';
import Service from './components/Service';
import Pricing from './components/Pricing';
import IntroVideo from './components/IntroVideo';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     
      <Hero />
      <Features />
      <Service />
      <Pricing />
      <IntroVideo />
      <Team />
      <Testimonials />
      <Blog />
      <Faq />
      <Cta />
      <Footer />
      <YourComponent />
    </>
  );
};

export default App;
