import React from "react";

const PricingPage = () => {
    return (
        <div className="bg-white flex flex-col">

            {/* Main Section */}

            <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 text-black">
                Transform your <span className="text-blue-600">tech hiring</span>{" "}
                <span className="block mt-4">today</span>
            </h1>
            <p className="text-center font-semibold text-gray-600 mt-4">
                From interns to experienced hires, evaluate skills for key developer
                <br /> roles including software engineers, backend, front-end, devops, data
                scientists, and UI/UX experts.
            </p>


            <div className="bg-white min-h-screen flex items-center justify-center py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                    {/* Basic Plan */}
                    <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center">
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">For individuals</h3>
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
                    <div className="bg-blue-600 rounded-xl shadow-lg p-6 text-center text-white">
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-semibold">For Startups</h3>
                        <h2 className="text-2xl font-bold mt-2">Pro</h2>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
                            elit.
                        </p>
                        <p className="text-4xl font-bold mt-4">$199</p>
                        <p>/monthly</p>
                        <div className="mt-6 text-left space-y-3">
                            <p className="flex items-center">
                                <span className="text-white mr-2">✔</span> All analytics features
                            </p>
                            <p className="flex items-center">
                                <span className="text-white mr-2">✔</span> Up to 250,000 tracked
                                visits
                            </p>
                            <p className="flex items-center">
                                <span className="text-white mr-2">✔</span> Normal support
                            </p>
                            <p className="flex items-center">
                                <span className="text-white mr-2">✔</span> Up to 3 team members
                            </p>
                        </div>
                        <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
                            Join Now
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center">
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            For big companies
                        </h3>
                        <h2 className="text-2xl font-bold text-gray-800 mt-2">Enterprise</h2>
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
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50  text-black max-w-7xl m-auto py-10">


                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
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
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/3">
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



    );
};

export default PricingPage;
