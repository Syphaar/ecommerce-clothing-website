// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useState } from "react";

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
// import { IoMailOpenOutline } from "react-icons/io5";
import ScrollToTop from "react-scroll-to-top";
// import UploadWidget from "./components/UploadWidget/UploadWidget";



const App = () => {

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

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* <UploadWidget /> */}
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <div id="products">
          <Products />
        </div>
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <ProductsTwo />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <ScrollToTop smooth />

        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          {/* <Route path="/products" element={<Products />} />
          <Route path="/productstwo" element={<ProductsTwo />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;