import React from 'react';

function Language() {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <img
              src="../Frame1.png"
              alt="Code example"
              className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The language for <span className="text-blue-600">building web pages</span>
            </h2>
            <p className="text-sm md:text-base">
              Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Try it Yourself
            </button>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Leave the <span className="text-blue-600">binary tree behind.</span>
            </h2>
            <p className="text-sm md:text-base">
              Build coding questions using our library of dev-friendly content that challenges them to solve problems they'd actually tackle on the job.
            </p>
            <button className="text-blue-600 hover:underline">Start Free Trial</button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="../Frame2.png"
              alt="Question filter example"
              className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
          <div className="w-full md:w-1/2">
            <img
              src="../Frame3.png"
              alt="Code testing example"
              className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Focus on what really matters: <span className="text-blue-600">the code.</span>
            </h2>
            <p className="text-sm md:text-base">
              Build skills-based coding tests with tech problems a developer would encounter on the job—and hire the team behind your next big idea.
            </p>
            <button className="text-blue-600 hover:underline">Request a Demo</button>
          </div>
        </div>
        
        {/* Final Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-light leading-tight">
              Identify top <span className="text-blue-500">contenders</span>
            </h1>
            <p className="text-sm md:text-base">
              Identify top contenders and invite them to meet your team using data-driven decisions
              that help level the playing field for developers everywhere.
            </p>
            <a href="#" className="text-lg font-semibold text-blue-500 hover:underline">
              Learn More →
            </a>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src="../summary.png"
              alt="Summary visualization"
              className="object-cover rounded-lg shadow-xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
