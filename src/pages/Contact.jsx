import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2comkqc', 'template_giacn2x', form.current, '7n9d7xZoCIye1YCoK')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        },
      );
  };

  return (
    <div className=" py-12 px-4 md:px-1" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold text-lg mb-2">
          Contact Us
        </h2>
        <h1 className="text-3xl font-semibold px-4 text-gray-900 mb-4">
          We're here to help you, every step of the way
        </h1>
      </div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <i className="fas fa-phone-alt text-orange-500 text-2xl mr-3"></i>
                <h2 className="text-xl font-bold">Phone</h2>
              </div>
              <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
              <p className="text-orange-500 font-semibold">+91 9876543210</p>
              <p className="text-orange-500 font-semibold">+91 9876543210</p>
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-3"></i>
                <h2 className="text-xl font-bold">Office</h2>
              </div>
              <p className="text-gray-600">Come say hello at our office</p>
              <p className="text-orange-500 font-semibold">
                office address state pincode 101010
              </p>
            </div>
            <hr className="my-6" />
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <i className="fas fa-envelope text-orange-500 text-2xl mr-3"></i>
                <h2 className="text-xl font-bold">Email</h2>
              </div>
              <p className="text-gray-600">
                Our friendly team is here to help.
              </p>
              <p className="text-orange-500 font-semibold">mail@company.com</p>

            </div>
            <hr className="my-6" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36107.97998781262!2d79.9304626!3d23.166102799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1742738991150!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          
          </div>
          
          <div className="w-full md:w-1/2 p-6 bg-gray-50">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="tel"
                  id="phone"
                  name="number"
                  placeholder="+91 9876543210"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>
              {/* <div className="mb-4 ">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-teal-600"
                  />
                  <span className="ml-2 text-gray-700">
                    You agree to our friendly{" "}
                    <a href="#" className="text-teal-600">
                      Privacy policy
                    </a>
                  </span>
                </label>
              </div> */}
              <div>
                <button className="w-full tracking-normal duration-400 bg-orange-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
