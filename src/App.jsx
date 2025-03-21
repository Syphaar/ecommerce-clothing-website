// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from "react";
import { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom"; 

import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Navbar from "./Navbar";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ProductsTwo from "./components/ProductsTwo/ProductsTwo";
import ScrollToTop from "react-scroll-to-top";

const App = () => {

  const [activeSection, setActiveSection] = useState(""); // Track active section

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-size",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Section references
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const bestproductsRef = useRef(null);
  const topproductsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
  
  //  Track the active section using Intersection Observer (for the active navbar buttons)
  useEffect(() => {
    const observerOptions = { 
      root: null, //  Uses the viewport
      threshold: 0.2, // 40% of the section must be visible
      rootMargin: "-5% 0px -10% 0px", // Adjust detection timing
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section ID
          // console.log("Active Section:", entry.target.id);
          // console.log("About Ref:", aboutRef?.current);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    [heroRef, productsRef, bestproductsRef, topproductsRef, testimonialsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [heroRef, productsRef, bestproductsRef, topproductsRef, testimonialsRef, contactRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <>
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* <UploadWidget /> */}
        <Navbar handleOrderPopup={handleOrderPopup} scrollToSection={scrollToSection} activeSection={activeSection} />
        <Hero handleOrderPopup={handleOrderPopup} heroRef={heroRef} id="hero" />
        <Products productsRef={productsRef} id="products" />
        <TopProducts handleOrderPopup={handleOrderPopup} bestproductsRef={bestproductsRef} id="bestproducts" />
        <Banner />
        <Subscribe />
        <ProductsTwo topproductsRef={topproductsRef} id="topproducts" />
        <Testimonials testimonialsRef={testimonialsRef} id="testimonials" />
        <Footer contactRef={contactRef} id="contact" />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <ScrollToTop smooth width="39" height="20" color="black" />
      </div>
    </BrowserRouter>
    </>
  );
}
 
export default App;