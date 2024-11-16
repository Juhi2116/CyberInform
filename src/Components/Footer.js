import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src="../logo.svg"
              alt="Cyberinfomines Technology Logo"
              className="w-28 mb-4"
            />
            <p className="text-sm mb-4 text-center md:text-left">
              Until recently, the prevailing view assumed lorem ipsum.
            </p>
            {/* Icons Below Until Recently Line */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li>
              <a href="#" className="hover:text-gray-300">
                Instructions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Style guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Licenses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li>
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
            Subscribe Newsletter
          </h4>
          <p className="text-sm mb-4 text-center md:text-left">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text.
          </p>
          <form className="flex flex-col md:flex-row space-y-4  justify-center md:space-y-0 md:space-x-4 items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white text-black border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-blue-600 font-bold border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white mt-8 pt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <p className="text-sm text-center md:text-left">
            &copy; 2024 Cyberinfomines Technology. All Rights Reserved
          </p>

          {/* Right Section */}
          <div className="flex space-x-6 mt-2 md:mt-0 text-sm text-center md:text-right">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
