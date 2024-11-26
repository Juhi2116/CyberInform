import React from "react";

const Releases = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white py-12 px-6 md:px-12 lg:px-24">
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left m-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Our <span className="text-blue-600">Released</span>
        </h1>
        <p className="text-gray-600 mt-4 font-semibold text-lg leading-relaxed">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend <br /> proin massa tincidunt viverra
          lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/release.png"
          alt="Laptop with code"
          className="justify-center p-12 w-full"
        />
      </div>

      {/* Services Section */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mt-16">
        Services
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <img
          src="../cara.png"
          alt="Carahsoft Card"
          className="w-full h-auto"
        />
        <img
          src="../pre.png"
          alt="ioPredict Card"
          className="w-full h-auto"
        />
        <img
          src="../radi.png"
          alt="RADICL Card"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Releases;
