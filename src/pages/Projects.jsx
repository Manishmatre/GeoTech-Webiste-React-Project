import React, { useEffect, useRef } from "react";
import ProjectImg from "../assets/heroimg.png";
import "./projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Peakcraft: Sculpting Modern Architectural Wonders.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Revolutionizing Cities: Nexgen Urban Vision.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Terraform: Crafting the Future of Structures.",
    img: "https://placehold.co/600x400",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
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
    <div
      ref={sectionRef}
      id="projects"
      className="bg-[#081120] px-8 md:px-20 lg:px-80 xl:px-90 py-12 md:py-6 lg:py-20 text-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container text-start">
        <h3 className="text-orange-500 uppercase font-semibold tracking-wide">
          ---- Our Projects
        </h3>
        <h2 className="text-2xl font-semibold text-white mt-2">
          We Believe in Quality Projects, More Clients, More Trust, and More
          Meaningful Moments.
        </h2>
        <p className="text-gray-300 mt-3 max-w-3xl ">
          Involves building or renovating homes, apartments, and other
          residential structures.
        </p>

        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative projectscard group cursor-pointer animate-slide-in"
            >
              <div className="bg-white p-3 rounded-lg shadow-md transition-transform duration-300 group-hover:-translate-y-0">
                <img
                  src={ProjectImg}
                  alt="Project Image"
                  className="w-full h-full object-cover rounded-lg project-img"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <a
                  href="#"
                  className="text-white px-5 py-2 rounded-lg bg-amber-500 duration-400 "
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Link
            to="/all-projects"
            className="mt-10 px-6 py-2 border border-white text-white rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
