import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    "title": "Survey & Mapping Services",
    "icon": "https://plus.unsplash.com/premium_photo-1661512057043-0b76d01a64c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Providing precise Total Station, DGPS, Drone Survey, and Topographical Surveys for accurate geospatial data."
  },
  {
    "title": "Load Testing & Structural Analysis",
    "icon": "https://plus.unsplash.com/premium_photo-1723867211579-a4fa21fab238?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Offering Pile Load Testing, Span Load Testing, and Structural Integrity Assessments for construction projects."
  },
  {
    "title": "Soil & Material Testing",
    "icon": "https://plus.unsplash.com/premium_photo-1678911006562-6ab7a45ee6d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Conducting Soil Confirmatory Tests, Geotechnical Assessments, and Material Testing for construction feasibility."
  },
  // {
  //   "title": "Architectural & Structural Design",
  //   "icon": "/icons/design.svg",
  //   "description": "Delivering professional design, drafting, and blueprint preparation for residential, commercial, and industrial projects."
  // },
  // {
  //   "title": "Training & Courses",
  //   "icon": "/icons/training.svg",
  //   "description": "Providing skill-based training in surveying, construction, and geotechnical analysis with hands-on experience."
  // },
  // {
  //   "title": "Video Editing & Shooting Services",
  //   "icon": "/icons/video.svg",
  //   "description": "Creating professional documentation, drone videography, and promotional videos for construction and real estate."
  // }
];

const ServicesSection = () => {
  const [cardAnimation, setCardAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardAnimation(true);
            entry.target.classList.add("animate-service-card");
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
    <section id="services"
      ref={sectionRef}
      className={`py-16 w-screen  bg-[#081120] px-8 md:px-20 lg:px-80 xl:px-90 md:py-6 lg:py-20  transition-opacity duration-1000`}

    >
      <div className="container mx-auto text-start">
        <h3 className="text-orange-500 uppercase font-semibold tracking-wide">
          ---- Our Services
        </h3>
        <h2 className="text-2xl font-semibold text-white mt-2">
          Fully Integrated Construction Services
        </h2>
        <p className="text-gray-300 mt-3 max-w-3xl ">
          Involves building or renovating homes, apartments, and other
          residential structures.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white p-5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${cardAnimation ? 'animate-service-card' : ''}`}
            >
              <div className="flex justify-center items-center w-full h-50 bg-green-100 rounded-lg mx-auto">
                <img
                  src={service.icon}
                  alt="Service Icon"
                  className="w-full h-50 rounded-lg"
                />
              </div>
              <h3 className="text-xl text-gray-800 font-semibold mt-4">
                {service.title}
              </h3>
              <p className="py-2">{service.description}</p>
              <a
                for="#"
                className={`mt-4 inline-block font-medium text-orange-600 hover:text-[#4a7a6a]`}
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      <div className="pt-10">
      <Link to="/all-services" className="mt-10 px-6 py-2 border border-white text-white rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all">
          All Services →
        </Link>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
