import React from 'react';

const Practice = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white text-black max-w-7xl m-auto py-10">
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Practice coding challenges & <span className="text-blue-500">prep for interviews</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Start practicing your skills now and land the job of your dreams.
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join the Community
        </button>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
          Get started <span className="text-blue-500 tracking-wide">hiring with Cyberinfomines</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          More than 3,000 tech teams, representing all industries and from countries around the world, trust us.
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Practice;