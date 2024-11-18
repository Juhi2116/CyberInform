import React from 'react';
import Logo from '../Components/Logo';

const Products = () => {
  return (
    <div className="p-6">
      {/* Section Wrapper */}
      <div className="flex flex-col max-w-7xl m-auto py-5 md:flex-row md:py-20 items-center gap-6 md:gap-12 mb-12">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="text-blue-600">Skills</span>-based<br />
            coding tests to<br />
            find developers,<br />
            fast
          </h2>
          <p className="text-lg font-bold text-gray-700 mt-4">
            Talent pool? Try talent ocean. We help navigate that sea of applicants 
            so you can connect faster and hire developers with the skills your team 
            needs to innovate.
          </p>
          <div className="flex  justify-center gap-4">
          <button className="px-6 sm:px-8 py-3 w-fit  bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up Now
          </button>
          <button className="px-6 sm:px-8 py-3 w-fit bg-transparent text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Request Demo
          </button>
        </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="../person.png" // Adjust the image source path as needed
            alt="Question filter example"
            className="bg-white w-full h-auto  "
          />
        </div>
      </div>
      <Logo/>
      <div className="flex justify-center bg-white max-w-7xl m-auto py-5 md:flex-row md:py-20 px-4 sm:px-8">
          <img
            src="../screen.png" // Replace this with the actual path to your image
            alt="Code editor screenshot"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
    </div>
  );
};

export default Products;
