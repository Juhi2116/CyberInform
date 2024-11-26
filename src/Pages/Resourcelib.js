import React from "react";

const Resourcelib = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      {/* Resources Section */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left m-8">
          <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-gray-900">
            Our <span className="text-blue-600">Resources</span>
          </h1>
          <p className="text-gray-600 mt-4 font-semibold text-xl leading-relaxed">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend <br /> proin
            massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/release.png" // Adjust the image source path as needed
            alt="Resource example"
            className="bg-white w-full h-auto"
          />
        </div>
      </div>

      {/* Features Overview Section */}
      <div className="bg-white py-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r1.png"
                alt="2024 Developer Skills Report"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  2024 Developer Skills Report
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Data Scientists"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Data Scientists: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Cloud Engineers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Cloud Engineers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Back-End Developers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Back-End Developers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>
          </div>
  
        </div>
      </div>

{/*features overview 2*/}
      <div className="bg-white py-10 px-6 mt-8">
        <div className="max-w-7xl mx-auto">
     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r1.png"
                alt="2024 Developer Skills Report"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  2024 Developer Skills Report
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Data Scientists"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Data Scientists: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Cloud Engineers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Cloud Engineers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Back-End Developers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Back-End Developers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>
          </div>
  
        </div>
      </div>

 {/* Features Overview Section */}
 <div className="bg-white py-10 px-6 mt-8">
        <div className="max-w-7xl mx-auto">
     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r1.png"
                alt="2024 Developer Skills Report"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  2024 Developer Skills Report
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Data Scientists"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Data Scientists: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Cloud Engineers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Cloud Engineers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="../r2.png"
                alt="How to Hire Back-End Developers"
                className="w-full h-60 object-cover p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  How to Hire Back-End Developers: The Definitive Guide
                </h3>
                <button className="text-blue-600 font-semibold hover:underline">
                  READ NOW
                </button>
              </div>
            </div>
          </div>
  
        </div>
      </div>


    </div>
  );
};

export default Resourcelib;
