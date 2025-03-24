import React, { useEffect, useRef } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import ServiceImg from "../assets/ourserviceImg.png";
import "./home.css";

const aboutData = {
  heading: "We Create Buildings That Meet Your Needs.",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
  points: ["Review Credit Reports", "Expert Engineers", "100% Better Results"],
  finalText:
    "Explore the possibilities with Buildo and let's embark on a journey to build a future.",
  buttons: [
    {
      text: "Discover More",
      className: "bg-orange-500 hover:bg-[#4a7a6a] text-white cursor-pointer",
    },
    {
      text: "Call Now",
      className: "border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer",
      icon: <FaArrowRight className="ml-2" />,
    },
  ],
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-about-section");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative transition-opacity duration-1000" id="about">
      <div className="mx-auto px-8 md:px-20 lg:px-80 xl:px-90 py-12 md:py-6 lg:py-40 bg-white rounded-lg flex flex-col md:flex-row items-center md:justify-around">
        <div className="px-4 animate-slide-left">
          <img
            alt="Group of construction workers and engineers discussing a project"
            className="rounded-lg z-10"
            src={ServiceImg}
          />
        </div>
        <div className="md:w-xl px-4 mt-6 md:mt-0 md:ml-6 animate-slide-right">
          <h2 className="text-orange-500 font-semibold text-lg mb-2">
            --About Us
          </h2>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            {aboutData.heading}
          </h1>
          <p className="text-gray-600 mb-4">{aboutData.description}</p>
          <ul className="mb-6">
            {aboutData.points.map((point, index) => (
              <li key={index} className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span className="text-gray-700 font-semibold">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-6">{aboutData.finalText}</p>
          <div className="flex space-x-4">
            {aboutData.buttons.map((button, index) => (
              <a
               href="tel:6372761379"
                key={index}
                className={`${button.className} px-6 py-2 rounded-lg duration-400 font-semibold flex items-center`}
              >
                {button.text} {button.icon && button.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
