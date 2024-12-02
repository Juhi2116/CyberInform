import React from 'react';

const Questions = () => {


    return (
        <div className="bg-white">
            {/* Section Wrapper */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto  px-4 sm:px-8">
                {/* Text Section */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Work isn’t
                        <span className="text-blue-600"> <br/>multiple choice</span> <br />
                        Your hiring <br />
                        shouldn’t be,<br />
                        either.
                    </h2>
                    <p className="text-lg font-bold text-gray-700 mt-8">
                        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.                        </p>
                    <div className="flex justify-center  gap-4">

                        <button className="px-6 sm:px-8 py-3 w-fit bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                            Get a Demo
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="../ques.png" // Adjust the image source path as needed
                        alt="Question filter example"
                        className="bg-white p-16 w-full h-auto"
                    />
                </div>
            </div>




            {/* Fairness Built Section */}
            <div className="bg-blue-600 text-white py-10 relative rounded-xl mb-40 max-w-7xl mx-auto px-4 sm:px-8">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Hire the right devs for your
                        <br />
                        unique environment                    </h1>


                </div>

                {/* Cards Section */}
                <div className="relative mt-10 ml-10 mr-10 mb-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 absolute w-full left-0 -bottom-18">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white text-black rounded-lg shadow-lg p-6"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-10 h-30 flex justify-center items-center text-blue-600">
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
                                    Use with ease and speed                                </h2>
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600">
                        <span className="block mb-4">Test skills</span>
                        <span className="text-gray-900">in real scenarios</span>
                    </h2>
                    <p className="text-sm md:text-base">
                        Save your team time with standardized assessments. Use our templates or customize your own, and enjoy end-to-end coverage from question selection to scoring.                        </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="../ques1.png"
                        alt="Question filter example"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Find Skills Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 max-w-7xl mx-auto   px-4 sm:px-8">
                <div className="w-full md:w-1/2">
                    <img
                        src="../ques2.png"
                        alt="Code testing example"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-600">
                        <span className="block mb-4">Assess developers</span>
                        <span className="text-gray-900">in your
                            environment</span>
                    </h2>
                    <p className="text-sm md:text-base">
                        From data science to front end to cybersecurity, our library covers tech’s most in-demand roles and skills, across all levels —and can help you assess those skills with confidence.                                         </p>
                </div>
            </div>



            {/* Innovation Section */}
            <div className="flex items-center max-w-full justify-center bg-gray-100 mt-5">
                <div className="text-center p-12 max-w-7xl">
                    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
                        We know developer skills like nobody’s business                  </h1>
                    <p className=" font-light mt-4 mb-6 text-gray-800">


                        We’re obsessed with developers and have 10+ years of proprietary skills data that gives us a deep understanding of developer skills and how
                        they shift as the industry evolves. And while others rely on college curriculums, books, and search engines to map skills, we turn to our Skills
                        Advisory Council, a panel of industry experts, to identify, certify, and standardize our skills.

                    </p>
                    <button className="px-6  sm:px-8 py-3 w-fit bg-blue-600 text-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                        Speak with an Expert
                    </button>
                </div>
            </div>



            {/* Resources Section */}
            <div className="bg-white max-w-7xl mx-auto py-5  px-4 sm:px-8">
                <div className="text-center">
                    <h1 className="text-3xl text-gray-900 sm:text-4xl">
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




export default Questions;
