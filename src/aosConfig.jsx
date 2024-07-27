// src/aosConfig.js

import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    duration: 1000, // Customize animation duration as needed
    once: false, // Ensure animations occur only once
    // Add more AOS options if necessary
  });
};

export default initializeAOS;
