import React from 'react';
import Logo from "../assets/gtlogo.jpeg";

const socialLinks = [
  { icon: 'fab fa-facebook-f', href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
  { icon: 'fab fa-twitter', href: '#' },
  { icon: 'fab fa-youtube', href: '#' }
];

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '#' },
      { name: 'Services', href: '#services' },
     // { name: 'Service Details', href: '/service-details' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'FAQ', href: '#faqse' },
      { name: 'Teams', href: '#teams' },
      { name: 'Blog', href: '#blogs' },
      { name: 'Contact Us', href: '#contact' }
    ]
  },
  {
    title: 'Other Pages',
    links: [
      { name: 'Course', href: '#f' },
      { name: 'Training', href: '#f' },
      { name: 'Career', href: '#f' },
      { name: 'Licenses', href: '#f' },
      { name: 'Policies', href: '#f' }
    ]
  }
];

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="mt-auto text-[#f8f8f2] bg-gray-950 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <a href="/">
                <img alt="GeoTech logo" className="mr-2 w-14 h-14 rounded-full" src={Logo} />
              </a>
              <span className="text-2xl pl-3 font-bold text-gray-200">
                GeoTech Survey & Construction
              </span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href }, index) => (
                <a key={index} className="text-white p-3 rounded-full border-1 flex items-center justify-center w-10 hover:text-gray-900 hover:bg-orange-500 hover:border-gray-900 tracking-normal duration-400" href={href}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          <hr className="my-6 border-t border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {footerSections.map(({ title, links }, index) => (
              <div key={index}>
                <h3 className="text-lg text-orange-500 font-bold mb-4">{title}</h3>
                <ul>
                  {links.map(({ name, href }, i) => (
                    <li key={i}>
                      <a className="hover:text-orange-500 duration-400 hover:translate-x-5" href={href}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
              <form className='px-12 md:px-0'>
                <input className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" placeholder="Enter your email address" type="email" />
                <button className="w-full px-4 py-2 duration-400 bg-orange-500 hover:bg-[#4a7a6a] cursor-pointer text-white rounded" type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-300" />
          <div className="text-center text-sm text-gray-600">
            <p>Copyright 2025 © All rights reserved </p>
            <p>Terms & Conditions | Privacy policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;