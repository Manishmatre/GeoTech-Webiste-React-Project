import React, { useEffect, useState } from "react";

import Header from "../components/Header";
// import HeroImg from "../assets/hero-img1.png"; // Uncomment if you need to use HeroImg
import Services from "./Services";
import Footer from "../components/Footer";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import HeroImg from "../assets/heroimg.png"
import './home.css'
import Contact from "./Contact";

const Home = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [imageAnimation, setImageAnimation] = useState(false);

  useEffect(() => {
    setTextAnimation(true);
    setImageAnimation(true);
  }, []);

  return (
    <div className="w-screen" id="home">
      <Header />
      {/* Hero section */}
      <main className="flex hero-container flex-col lg:flex-row items-center justify-between px-8 md:px-20 lg:px-80 xl:px-90 py-12 md:py-6 lg:py-40 animate-fade-in">
      <div className="absolute herodots top-0 left-0 w-[300px] -z-10 h-[640px] ">
      </div>
        <div className="absolute heropettern top-0 right-0 w-[300px] md:w-[400px] -z-10  h-[640px] ">
        </div>
      
        <div className="lg:w-full lg:pt-6 mt-15 md:mt-2">
          <h1 className={`text-4xl md:pr-12 lg:text-5xl font-semibold text-orange-500 leading-tight ${textAnimation ? 'animate-fade-in' : ''}`}>

            Welcome To,<br />
            <span className="text-5xl md:pr-12 lg:text-6xl font-bold text-[#393d47]  ">
              GeoTech Survey & Construction
            </span>
          </h1>
          <p className="text-md md:text-lg leading-6 text-gray-600  mt-4 lg:pr-24">
            At GEOTECH Survey and Construction, we bring expertise and innovation to the field of engineering, construction, and surveying. Whether it’s road and bridge surveys, project data analysis, or professional training, we ensure excellence in every project.
          </p>
          <div className="mt-6 flex space-x-4">
              {/* <a
                href="#"
                className="bg-orange-600 hover:bg-[#4a7a6a] duration-400 font-semibold transition-normal text-white px-6 py-3 rounded"
              >
                Get a Quote
              </a> */}
            <a
              href="tel:6372761379"
              className="border duration-400 bg-orange-500 hover:bg-[#4a7a6a] text-white font-semibold px-6 py-3 rounded animate-blink"
            >
              Call Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className={`relative p-2 bg-white shadow rounded-2xl lg:w-1/2 mt-6 lg:mt-0 ${imageAnimation ? 'animate-slide-in' : ''}`}>
          <img
            src={HeroImg}
            alt="Construction worker holding blueprints"
            className="relative heroimg z-10 rounded-md hover:zoom-effect"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-2xl font-bold text-[#1a202c]">80K+</p>
              <p className="text-[#1a202c]">Positive Reviewer</p>
              <div className="flex space-x-2 mt-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Reviewer 1"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://placehold.co/40x40"
                  alt="Reviewer 2"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://placehold.co/40x40"
                  alt="Reviewer 3"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://placehold.co/40x40"
                  alt="Reviewer 4"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Services Section */}
      <div>
        <Services />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Blogs />
      </div>
      <div>
        <Contact/>
      </div>
     
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
