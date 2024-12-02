import React from 'react';

const Assessment = () => {
    return (
        <div className="bg-white">
            {/* Section Wrapper */}
            <div className="flex flex-col md:flex-row items-center md:gap-12 mb-12 max-w-7xl mx-auto p-6 sm:px-8">
                {/* Text Section */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight">
                        <span className="text-gray-900">Standardize your hiring with</span> <br />
                        trusted certified assessments
                    </h2>
                    <p className="text-lg font-bold text-gray-700 mt-4">
                        75% of devs think technical interviews are broken. Swap your shared docs and split screens for a fully-functioning IDE that gives developers the tools to show off their hard and soft skills in a real-world environment.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-6 sm:px-8 py-3 w-fit bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Get a Demo
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="../ass_hero.png"
                        alt="Question filter example"
                        className="bg-white w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Fairness Built Section */}
            <div className="bg-blue-600 text-white py-10 relative rounded-xl mb-40 max-w-7xl mx-auto px-4 sm:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <img
                            src="../comp.svg"
                            alt="Collaboration tools example"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold">
                            One workspace. Boundless possibilities.
                        </h1>
                        <p className="text-lg mt-4">
                            Simultaneously edit code, share files, and collaborate on virtual whiteboards all within your browser. No downloads required.
                        </p>
                        <button className="bg-white text-blue-600 font-semibold py-2 px-6 mt-6 rounded-lg hover:bg-gray-100 transition duration-300">
                            Get a Demo
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="relative mt-10 ml-4 sm:ml-10 mr-4 sm:mr-10 mb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 absolute w-full left-0 -bottom-18">
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
                                                d="M15 12a3 3 0 11-6 0 3 3 0z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.283 1.036-.698 2.018-1.223 2.92M15 12a3 3 0 11-6 0 3 3 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="text-lg font-semibold text-center">
                                    Use with ease and speed
                                </h2>
                                <p className="text-sm text-gray-700 mt-2 text-center">
                                    Cut down on clunky setups and awkward downtime so that you and your candidate can jump right in and spend more time coding.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Easy to Use Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto px-4 sm:px-8">
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800">
                        <span className="block mb-4">Access the</span>
                        <span className="text-blue-600 block mb-4">definitive directory of</span>
                        technical skills
                    </h2>
                    <p className="text-sm md:text-base">
                        Invite candidates to interview with all the tools they need. Our browser-based IDE offers code repos for 40+ languages across all of tech’s most in-demand skills.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="../ass1.png"
                        alt="Technical skills directory"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Resources Section */}
            <div className="bg-white max-w-7xl mx-auto py-5 px-4 sm:px-8">
                <div className="text-center">
                    <h1 className="text-3xl text-gray-900 sm:text-4xl">Resources</h1>
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
                                src={`../r${index + 1}.png`}
                                alt={`Resource ${index + 1}`}
                                className="w-full h-48 object-cover rounded-t-lg"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 truncate">
                                    {index === 0 ? "2024 Developer Skills Report" : `Resource ${index + 1}`}
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

export default Assessment;
