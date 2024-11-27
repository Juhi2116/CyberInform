import React from 'react';
  
  const Resourceblog = () =>  {
	return (


<div className="flex flex-col lg:flex-row  justify-between px-20 py-12 bg-white">
      {/* Left Side (Text) */}
      <div className="lg:w-1/2 w-full mt-8 text-center lg:text-left">
      <p className=" font-semibold text-gray-800 mb-4">Featured Post</p>
        <h2 className="text-7xl font-semibold text-gray-800 mb-4">
        Step-by-step guide to choosing great font pairs
        </h2>
        <p className="text-lg font-semibold text-gray-600 mb-6">
        Talent pool? Try talent ocean. We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
Read More        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="lg:w-2/5 w-full m-8 lg:mt-0">
  <img
    src="../Man1.png"  // Replace with actual image URL
    alt="Image"
    className="w-full h-auto object-cover rounded-lg shadow-lg"
  />
</div>





	  </div>
	);
  }
  
  export default Resourceblog;
  