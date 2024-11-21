import React from 'react';
import Logo from '../Components/Logo';

const Products = () => {
  return (
    <div className="bg-white">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto  px-4 sm:px-8">
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
          <div className="flex justify-center gap-4">
            <button className="px-6 sm:px-8 py-3 w-fit bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
            className="bg-white w-full h-auto"
          />
        </div>
      </div>

      <Logo />

      <div className="flex justify-center max-w-7xl mx-auto py-5 md:py-20 px-4 sm:px-8">
        <img
          src="../screen.png" // Replace this with the actual path to your image
          alt="Code editor screenshot"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Fairness Built Section */}
      <div className="bg-blue-600 text-white py-10 relative rounded-xl max-w-7xl mx-auto px-4 sm:px-8">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Fairness built into every click.
          </h1>
          <p className="text-lg mt-4">
            From plagiarism detection and proctoring to minimizing bias, our
            assessments give developers everywhere an equal shot at today’s top
            tech opportunities.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 mt-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Get Demo
          </button>
        </div>

        {/* Cards Section */}
        <div className="relative mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto px-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center text-blue-600">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.283 1.036-.698 2.018-1.223 2.92M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-center">
                  World-class plagiarism monitoring
                </h2>
                <p className="text-sm text-gray-700 mt-2 text-center">
                  Advanced machine learning monitors for plagiarism, test-taker
                  integrity, and question leaks, giving all developers a fairer
                  shot at the next round.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="flex items-center max-w-full justify-center bg-gray-100 mt-5">
        <div className="text-center p-12 max-w-7xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800">
            Innovation happens everywhere.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800">
            It's time to{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              broaden your search.
            </a>
          </p>
        </div>
      </div>

      {/* Easy to Use Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600 mb-4">
            Easy to use.{" "}
            <span className="text-gray-800">Even easier to implement.</span>
          </h2>
          <p className="text-sm md:text-base">
            Save your team time with standardized assessments. Use our templates or
            customize your own, and enjoy end-to-end coverage from question
            selection to scoring.
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

      {/* Find Skills Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto   px-4 sm:px-8">
        <div className="w-full md:w-1/2">
          <img
            src="../Frame3.png"
            alt="Code testing example"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600 mb-4">
            Find the skills{" "}
            <span className="text-gray-800">to ship better products, faster.</span>
          </h2>
          <p className="text-sm md:text-base">
            From data science to front end to cybersecurity, our library covers tech’s
            most in-demand roles and skills, across all levels — and can help you
            assess those skills with confidence.
          </p>
        </div>
      </div>

      {/* University Hiring Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12 max-w-7xl mx-auto  px-4 sm:px-8">
        <div className="flex flex-col justify-center text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
            University hiring and early talent screening built to scale.
          </h1>
          <p className="text-sm md:text-base">
            When hiring turns high volume, our approach helps applicants show off
            their skills. Think developer-approved prep materials, coding
            challenges, and screening that scales with you.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="../Melissa.png"
            alt="Summary visualization"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white max-w-7xl mx-auto py-5  px-4 sm:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-4 text-gray-500">
            Explore our guides, reports, and resources to help you hire better.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`../r${index + 1}.png`} // Adjust image paths
                alt={`Resource ${index + 1}`}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {index === 0
                    ? "2024 Developer Skills Report"
                    : `Resource ${index + 1}`}
                </h2>
                <a
                  href="#"
                  className="text-blue-600 font-medium text-sm mt-3 block hover:underline"
                >
                  READ NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
