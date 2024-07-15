import React, { useEffect } from 'react';
import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import whiteLogo from '../images/logo/white-logo.svg';
import realLogo from '../images/logo/logo.svg';

const YourComponent = () => {
  useEffect(() => {
    const fadeout = () => {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.display = "none";
      }
    };

    const handleScroll = () => {
      const headerNavbar = document.querySelector(".navbar-area");
      const logo = document.querySelector(".navbar-brand img");
      const backToTop = document.querySelector(".scroll-top");

      if (headerNavbar && logo) {
        const sticky = headerNavbar.offsetTop;
        if (window.pageYOffset > sticky) {
          headerNavbar.classList.add("sticky");
          logo.src = realLogo;
        } else {
          headerNavbar.classList.remove("sticky");
          logo.src = whiteLogo;
        }
      }

      if (backToTop) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      }
    };

    const handleNavbarToggle = () => {
      const navbarToggler = document.querySelector(".mobile-menu-btn");
      if (navbarToggler) {
        navbarToggler.classList.toggle("active");
      }
    };

    // Set the timeout to fade out preloader
    window.setTimeout(fadeout, 500);

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    const navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
      navbarToggler.addEventListener("click", handleNavbarToggle);
    }

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navbarToggler) {
        navbarToggler.removeEventListener("click", handleNavbarToggle);
      }
    };
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
    </>
  );
};

export default YourComponent;
