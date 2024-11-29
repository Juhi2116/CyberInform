const CardWithForm = () => {
    return (
        <div className="mx-auto mt-12"> {/* Outer wrapper, spans full width */}

            {/* Full-Screen Image */}
            <div className="max-w-7xl mx-auto">
                <img
                    src="../../Man1.png"  // Ensure this path is correct relative to public folder or import it
                    alt="Image of a person"
                    className="w-full h-[550px] object-cover rounded-lg"
                />
            </div>

            {/* Content Below the Image */}
            <div className="bg-white py-12 max-w-7xl mx-auto text-center sm:text-left"> {/* Inner content constrained to max-w-7xl */}
                {/* Airplane Icon and Text */}
                <div className="flex justify-center items-center space-x-2 text-blue-600 text-lg font-extrabold mb-4">
                    {/* Airplane Icon */}
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_0_2768)">
                            {/* SVG Path */}
                        </g>
                        <defs>
                            <clipPath id="clip0_0_2768">
                                <rect width="38" height="38" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="align-middle">Startup</span> {/* Vertically aligns text with icon */}
                </div>

                {/* Title Text */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Step-by-step guide to choosing great font pairs
                </h1>

                {/* Paragraph Text */}
                <p className="text-lg font-bold mb-4">
                    Talent pool? Try talent ocean. We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.
                </p>
            </div>

            {/* Additional Sections with Content */}
            <div className="max-w-7xl mx-auto text-center sm:text-left"> {/* Centered content on mobile, left-aligned on larger screens */}
                <h2 className="text-xl md:text-2xl font-extrabold mb-4">
                    Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="font-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
                <ul className="font-gray-800 font-bold list-disc pl-6 mx-auto mb-6 max-w-3xl">
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                </ul>
                <p className="font-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
            </div>

            {/* Circular Image and Info Section */}
            <div className="flex justify-center items-center p-10">
                <div className="flex items-center gap-4 w-full sm:w-[418px] p-4 bg-white rounded-lg">
                    {/* Circular Image */}
                    <div
                        className="w-[90px] h-[90px] rounded-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/andrew.png')" }}
                    ></div>

                    {/* Name and Info */}
                    <div>
                        {/* Name */}
                        <div className="text-3xl font-semibold text-[#592EA9]">
                            Andrew Jonson
                        </div>

                        {/* Posted on */}
                        <div className="text-sm font-bold text-[#6D6E76]">
                            Posted on 27th January 2022
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Section with More Content */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl p-8 text-left ">
                        What to read next
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full sm:w-1/3 p-4">
                            <img
                                src="../casestudy.svg" // Replace with your image source
                                alt="Description of Image"
                                className="w-full h-auto object-cover"
                            />
                            <p className="mt-4 text-sm font-semibold text-blue-500">By John Doe | Aug 23, 2021</p>
                            <h1 className="mt-6 text-2xl">A UX Case Study Creating a Studious Environment for Students:</h1>
                            <p className="mt-2 text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>

                        <div className="w-full sm:w-1/3 p-4">
                            <img
                                src="../casestudy.svg" // Replace with your image source
                                alt="Description of Image"
                                className="w-full h-auto object-cover"
                            />
                            <p className="mt-4 text-sm font-semibold text-blue-500">By John Doe | Aug 23, 2021</p>
                            <h1 className="mt-6 text-2xl">A UX Case Study Creating a Studious Environment for Students:</h1>
                            <p className="mt-2 text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>

                        <div className="w-full sm:w-1/3 p-4">
                            <img
                                src="../casestudy.svg" // Replace with your image source
                                alt="Description of Image"
                                className="w-full h-auto object-cover"
                            />
                            <p className="mt-4 text-sm font-semibold text-blue-500">By John Doe | Aug 23, 2021</p>
                            <h1 className="mt-6 text-2xl">A UX Case Study Creating a Studious Environment for Students:</h1>
                            <p className="mt-2 text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Our Team Section */}
            <div className="w-full bg-white py-12 px-6 text-center">
                <p className="text-blue-600 font-bold mb-6">Join Our Team</p>
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
                    To be a part of our story
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-blue-700 transition-all mt-6">
                    Join Now
                </button>
            </div>

        </div>
    );
};

export default CardWithForm;
