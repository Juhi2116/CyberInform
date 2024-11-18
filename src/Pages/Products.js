import React from 'react';
import Logo from '../Components/Logo';

const Products = () => {
  return (
    <div className=" justify-center bg-white max-w-7xl m-auto py-5 md:py-20 px-4 sm:px-8">
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
        

        <div className="flex items-center justify-center mb-4  bg-gray-100">
        <div className="text-center p-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800">
          Innovation happens everywhere.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800">
          It's time to{" "}
          <a
            href="#"
            className="text-blue-600  hover:text-blue-800 transition"
          >
            broaden your search.
          </a>
        </p>
      </div>
    </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">

            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600  mb-4">
              Easy to use.{" "}
                <span className="text-gray-800"> Even easier to
                implement.</span>
              </h2>
              <p className="text-sm md:text-base">
              Save your team time with standardized assessments. Use our templates or customize your own, and enjoy end-to-end coverage from question selection to scoring.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="../Frame1.png"
                alt="Question filter example"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col max-w-7xl md:flex-row items-center gap-6 md:gap-12 mb-12">
            <div className="w-full md:w-1/2">
              <img
                src="../Frame3.png"
                alt="Code testing example"
                className=" w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600 mb-4">
              Find the skills {" "}
                <span className="text-gray-800 mb-4"> to ship
                better products, faster.</span>
              </h2>
              <p className="text-sm md:text-base">
              From data science to front end to cybersecurity, our library covers tech’s most in-demand roles and skills, across all levels —and can help you assess those skills with confidence.              </p>
            
            </div>
          </div>

          {/* Final Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
            {/* Left Section */}
            <div className="flex flex-col justify-center text-center md:text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
              University hiring and early talent screening built to scale.
              </h1>
              <p className="text-sm md:text-base">
              When hiring turns high volume, our approach helps applicants show off their skills. Think developer-approved prep materials, coding challenges, and screening that scales with you.
              </p>
      
            </div>
                  {/* Right Section */}
                  <div className="flex justify-center">
              <img
                src="../Melissa.png"
                alt="Summary visualization"
                className=" w-full h-auto object-cover "
              />
            </div>
</div>
    </div>
  );
};

export default Products;
