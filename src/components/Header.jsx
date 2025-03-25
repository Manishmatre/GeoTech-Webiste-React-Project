import React, { useState, useEffect } from "react";
import Logo from "../assets/gtlogo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const Navlinks = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "#about" },
    { text: "Services", link: "#services" },
    { text: "Projects", link: "#projects" },
    { text: "Contact Us", link: "#contact" },
    { text: "Blogs", link: "#blogs" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`navbar z-50 fixed left-0 top-0 flex items-center justify-between px-6 md:px-16 lg:px-20 w-screen h-20 ${
        isScrolled ? "shadow" : ""
      }  transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-[#fafafa5d]"
      }`}
    >
      <div className="flex items-center mb-6 pt-4 md:pt-0  md:mb-0">
        <Link to="/">
          <img alt="Buildo logo" className="mr-2 w-16" src={Logo} />
        </Link>
        <span className={`text-2xl font-bold leading-6 text-gray-700`}>
          GeoTech Survey & Construction
        </span>
      </div>
      <div className="hidden md:block">
        <ul className="navlinks w-full flex pr-15 gap-5">
          {Navlinks.map((links, index) => (
            <li key={index}>
              <a
                href={links.link}
                className={`navlink text-md duration-200 hover:text-orange-600 font-semibold py-7 hover:border-b-3 border-orange-500 transition-normal  ${
                  isScrolled ? "text-gray-600" : "text-gray-600"
                } ${
                  activeSection === links.link.substring(1)
                    ? "text-orange-600"
                    : ""
                }`}
              >
                {links.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <a
          href="#contact"
          className="bg-orange-600 cursor-pointer duration-400 hover:bg-[#4a7a6a] transition-normal text-white px-6 py-3 rounded"
        >
          Contact Us
        </a>
      </div>
      <button
        className="nav-toggle md:hidden transition-normal"
        onClick={toggleNav}
      >
        <h1 className="text-2xl cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100">
          <i
            className={`fa-solid font-light hover:text-gray-700 fa-bars ${
              isScrolled ? "text-orange-500" : "text-gray-700  "
            }`}
          ></i>
        </h1>
      </button>

      {isNavOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="navlinks flex flex-col items-center py-4">
            {Navlinks.map((link, index) => (
              <li
                key={index}
                className="w-full px-10 py-2 rounded-lg hover:bg-blue-50"
              >
                <a
                  href={link.link}
                  className={`navlink block text-md hover:text-orange-400 font-semibold transition-normal  text-gray-800 ${
                    activeSection === link.link.substring(1)
                      ? "text-orange-600"
                      : ""
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
            <div className="w-full px-10 py-2">
              <a
                href="#contact"
                className="bg-orange-600 cursor-pointer duration-400 hover:bg-[#4a7a6a] transition-normal text-white px-6 py-3 rounded"
              >
                Contact Us
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
