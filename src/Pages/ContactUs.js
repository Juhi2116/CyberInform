import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Information Section */}

      <div className="w-full  mt-16  bg-gray-100 rounded-lg">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gray-100 py-8 m-auto">
        <div>
          <h3 className="font-bold">Email Address</h3>
          <p className=" mt-3 font-bold">Our friendly team is here to help.</p>
          <a href="mailto:hi@untitledui.com" className="text-blue-600 font-bold">
            hi@untitledui.com
          </a>
        </div>
        <div>
          <h3 className="font-bold">Address</h3>
          <p className=" font-bold mt-3">Come say hello at our office HQ.</p>
          <p className="font-bold mt-3">100 Smith Street</p>
          <p className="font-bold mt-1"ds>Collingwood VIC 3066 AU</p>
        </div>
        <div>
          <h3 className="font-bold">Contact Number</h3>
          <p className="font-bold mt-3">Mon-Fri from 8am to 5pm.</p>
          <a href="tel:+15550000000" className="text-blue-600 font-bold mt-3">
            +1 (555) 000-0000
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
