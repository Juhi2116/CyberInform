import React from "react";

const PricingPage = () => {
  return (
    <div>
      {/* Main Section */}

      <h1 className="text-4xl md:text-6xl font-bold text-center mt-8 text-black">
        Transform your <span className="text-blue-600">tech hiring</span>{" "}
        <span className="block mt-4">today</span>
      </h1>
      <p className="text-center font-semibold text-gray-600 mt-4">
        From interns to experienced hires, evaluate skills for key developer
        <br /> roles including software engineers, backend, front-end, devops,
        data scientists, and UI/UX experts.
      </p>

      <div className="bg-white min-h-screen max-w-6xl m-auto flex items-center justify-center py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {/* Basic Plan */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              For individuals
            </h3>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Basic</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <p className="text-4xl font-bold text-gray-800 mt-4">$99</p>
            <p className="text-gray-500">/monthly</p>
            <div className="mt-6 text-left space-y-3">
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> All analytics
                features
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Up to 250,000
                tracked visits
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Normal support
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Up to 3 team
                members
              </p>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>

          {/* Pro Plan */}

          <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="18.4865" height="38" fill="#1B4DFF" />
                  <rect
                    x="18.9863"
                    width="19.5135"
                    height="38"
                    fill="#1B4DFF"
                  />
                  <rect
                    x="18.9863"
                    y="18.4863"
                    width="19.5135"
                    height="19.5135"
                    fill="#DCD8FF"
                  />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-semibold">For Startups</h3>
                <h2 className="text-3xl font-bold mt-1">Pro</h2>
              </div>
            </div>

            <p className="text-left text-sm mb-4">
              Lorem ipsum dolor sit amet doloroli sitiol consectetur adipiscing
              elit.
            </p>
            <div className="text-left">
              <p className="text-4xl font-black">
                $199 <span className="text-sm">/monthly</span>
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">What’s included</h4>
              <div className="space-y-3 text-sm">
                {[
                  "All analytics features",
                  "Up to 250,000 tracked visits",
                  "Normal support",
                  "Up to 3 team members",
                ].map((feature, index) => (
                  <p key={index} className="flex items-center">
                    <span className="text-blue-800 bg-white w-6 h-6 flex items-center justify-center rounded-full mr-3">
                      ✔
                    </span>{" "}
                    {feature}
                  </p>
                ))}
              </div>
            </div>
            <div className="text-left mt-6">
              <button className="bg-white text-blue-600 px-6 font-bold py-2 rounded-lg hover:bg-gray-100">
                Join Now
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-100 rounded-xl w-full shadow-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              For big companies
            </h3>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              Enterprise
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <p className="text-4xl font-bold text-gray-800 mt-4">$399</p>
            <p className="text-gray-500">/monthly</p>
            <div className="mt-6 text-left space-y-3">
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> All analytics
                features
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Up to 250,000
                tracked visits
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Normal support
              </p>
              <p className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Up to 3 team
                members
              </p>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center text-black max-w-6xl m-auto">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Practice coding challenges &{" "}
            <span className="text-blue-500">prep for interviews</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Start practicing your skills now and land the job of your dreams.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join the Community
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Get started{" "}
            <span className="text-blue-500 tracking-wide">
              hiring with Cyberinfomines
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust us.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Request a Demo
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PricingPage;
