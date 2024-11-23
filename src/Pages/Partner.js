import React from 'react';

const Partner = () => {
  return (
    <div className="bg-white py-16 text-center">
      {/* Main Banner Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Join the <span className="text-blue-600">Cyberinfomines</span> <br />Partner Network
      </h1>
      <p className="mt-4 text-gray-600 text-lg md:text-xl">
        Cyberinfomines Partner Network combines the strength of technology and
        services partners to <br /> enable customers to achieve their goals.
      </p>
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition-all">
        Become a Partner
      </button>

      {/* Logos Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Our Trusted Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <img src="/t1.png" alt="greenhouse" className="h-12 md:h-20 object-contain" />
          <img src="/t2.png" alt="JazzHR" className="h-12 md:h-20 object-contain" />
          <img src="/t3.png" alt="Jobvite" className="h-12 md:h-20 object-contain" />
          <img src="/t4.png" alt="Lever" className="h-12 md:h-20 object-contain" />
          <img src="/t5.png" alt="SmartRecruiters" className="h-12 md:h-20 object-contain" />
          <img src="/t6.png" alt="Taleo" className="h-12 md:h-20 object-contain" />
          <img src="/t7.png" alt="Workday" className="h-12 md:h-20 object-contain" />
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="bg-gray-100 py-16 px-8 md:px-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Partner With Cyberinfomines?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Save your team time with standardized assessments. Use our templates or
            customize your own, and enjoy <br /> end-to-end coverage from question selection
            to scoring.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="/p1.png" alt="Icon" className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-6 md:mb-8" />
            <p className="text-gray-700 text-sm">
              Deliver a great experience while showcasing a tech-forward organization
              aligned with customer values
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="/p2.png" alt="Icon" className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-6 md:mb-8" />
            <p className="text-gray-700 text-sm">
              Deliver a great experience while showcasing a tech-forward organization
              aligned with customer values
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="/p3.png" alt="Icon" className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-6 md:mb-8" />
            <p className="text-gray-700 text-sm">
              Deliver a great experience while showcasing a tech-forward organization
              aligned with customer values
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="/p4.png" alt="Icon" className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-6 md:mb-8" />
            <p className="text-gray-700 text-sm">
              Deliver a great experience while showcasing a tech-forward organization
              aligned with customer values
            </p>
          </div>
        </div>
      </div>




      <div className="mt-16 px-20">
  <h2 className="text-3xl font-semibold text-gray-900 text-center">
    Technology Partners
  </h2>
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <img
      src="/Ash.png"
      alt="Ashby Card"
      className="w-full h-auto "
    />
    <img
      src="/ibm.png"
      alt="BrassRing Card"
      className="w-full h-auto "
    />
    <img
      src="/cri.png"
      alt="Criteria Card"
      className="w-full h-auto "
    />
    <img
      src="/eight.png"
      alt="Eightfold Card"
      className="w-full h-auto "
    />
  </div>

  <h2 className="text-3xl font-semibold text-gray-900 text-center mt-16">
    Services
  </h2>
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <img
      src="../cara.png"
      alt="Carahsoft Card"
      className="w-full h-auto "
    />
    <img
      src="../pre.png"
      alt="ioPredict Card"
      className="w-full h-auto "
    />
    <img
      src="../radi.png"
      alt="RADICL Card"
      className="w-full h-auto "
    />
  </div>
</div>






      

      {/* Become a Partner Section */}
      <div className="bg-gray-100 py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Become a Partner</h2>
          <p className="mt-4 text-gray-500">
            24/7 we will answer your questions and problems
          </p>
        </div>
        <form className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job Title"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>
              Country
            </option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="uk">United Kingdom</option>
          </select>
          <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>
              Partner Type
            </option>
            <option value="reseller">Reseller</option>
            <option value="consultant">Consultant</option>
            <option value="vendor">Vendor</option>
          </select>
          <textarea
            placeholder="Company overview and reason for partnering"
            rows="4"
            className="col-span-1 sm:col-span-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-10 rounded-lg shadow-md transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>




    </div>
  );
};

export default Partner;
