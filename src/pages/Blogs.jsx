import React from 'react';

const blogs = [
  {
    id: 2,
    title: "Accessible Design: Creating Spaces for Everyone",
    date: "Nov 21, 2023",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    large: false,
  },
  {
    id: 3,
    title: "Efficient Project Planning: Strategies for Success",
    date: "Nov 22, 2023",
    image: "https://plus.unsplash.com/premium_photo-1726729274971-4ef1018ee08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    large: false,
  },
];

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110" src={blog.image} alt={blog.title} />
    </div>
    <div className="p-4">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <i className="fas fa-calendar-alt mr-2"></i>
        <span>{blog.date}</span>
      </div>
      <h2 className="font-bold text-lg mb-2">{blog.title}</h2>
      <a className="text-teal-500 hover:text-teal-700 text-2xl" href="#">
        <i className="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
);

const Blogs = () => (
  <div id='blogs' className="bg-[#081120]  text-black px-8 md:px-20 lg:px-80 xl:px-90 md:py-6 lg:py-20">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold text-lg mb-2">
          Blogs & Articles
        </h2>
        <h1 className="text-3xl font-semibold text-white mb-4">
          Browse Our Articles & Resources
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {blogs.slice(0, 2).map((blog) => (
          <div className="w-full md:w-1/2" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a className="inline-block duration-400 bg-transparent border border-gray-300 text-white py-2 px-6 rounded-full hover:bg-orange-500" href="/all-blogs">
          View More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Blogs;
