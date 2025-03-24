import React, { useState, useEffect } from "react";

const testimonials = [
  {
    rating: 4.5,
    review:
      "Exceptional team, surpassed expectations with their professional approach and flawless execution. Highly recommended!",
    name: "Renee Wells",
    position: "Product Designer, Quotient",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    rating: 5,
    review:
      "Impeccable craftsmanship, and outstanding service! They delivered beyond expectations, a truly commendable team.",
    name: "Lana Steiner",
    position: "UX/UI Designer, HasTech",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    rating: 5,
    review:
      "Impeccable craftsmanship, and outstanding service! They delivered beyond expectations, a truly commendable team.",
    name: "Lana Steiner",
    position: "UX/UI Designer, HasTech",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

const TestimonialCard = ({ review, name, position, rating, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="flex items-center mb-4">
      <img className="w-14 h-14 rounded-full mr-4" src={image} alt={name} />
      <div>
        <StarRating rating={rating} />
      </div>
    </div>
    <p className="text-gray-700 mb-4">{review}</p>
    <p className="font-bold text-gray-900">— {name}</p>
    <p className="text-gray-500">{position}</p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="flex items-center justify-center py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-orange-500 font-semibold text-lg mb-2">
            Testimonials
          </h2>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            What Our Customers Say About Us
          </h1>
          <p className="text-gray-700 mt-4">
            <span className="font-bold text-gray-900">
              90% Customer Satisfaction
            </span>
            based on 70+ reviews and {"(Number Of Project)"} Completed Projects.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-full max-w-md overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 font-bold p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 font-bold  p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
