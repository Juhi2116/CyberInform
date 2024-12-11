import React from 'react';

const Solutions = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-white flex flex-col items-center max-w-6xl mx-auto p-6 text-center my-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                    All your ideas in one place
                </h1>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg font-bold max-w-2xl mb-6">
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                    suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
                    amet, dui sit suspendisse.
                </p>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-blue-700 transition-all">
                    Start for Free
                </button>
            </div>

            {/* Image Section */}
            <div className="bg-white flex items-center justify-center mt-10">
                <img
                    src="../start.png" // Replace with the actual image URL
                    alt="Developer"
                    className="w-full max-w-[652px] h-auto rounded-md"
                />
            </div>

            {/* Brainstorm Section */}
            <div className="bg-white max-w-6xl mx-auto p-6">
                <div className="container mx-auto p-6">
                    {/* Image and Text Row */}
                    <div className="lg:flex lg:space-x-6 items-center">
                        {/* Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="../Mask1.png"
                                alt="Brainstorming team"
                                className="rounded-xl w-full"
                            />
                        </div>

                        {/* Text */}
                        <div className="lg:w-1/2 bg-blue-500 text-white rounded-xl p-6 lg:p-8">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                                Easily brainstorm with your team
                            </h1>
                            <p className="text-sm md:text-lg mb-6">
                                Scelerisque auctor dolor diam tortor, fames faucibus non interdum
                                nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
                                adipiscing lacinia.
                            </p>
                            <button className="bg-white text-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100">
                                Start for Free
                            </button>
                        </div>
                    </div>

                    {/* Image Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                        <div className="col-span-1">
                            <img
                                src="../Mask2.png"
                                alt="Lightbulb 1"
                                className="rounded-xl w-full object-cover h-[150px]"
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src="../Mask3.png"
                                alt="Lightbulb 2"
                                className="rounded-xl w-full object-cover h-[150px]"
                            />
                        </div>
                        <div className="col-span-2">
                            <img
                                src="../Mask4.png"
                                alt="Idea and Team Discussion"
                                className="rounded-xl w-full object-cover h-[150px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Find Similar Stories Section */}
            <div className="w-full bg-white py-12 px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
                    Find Similar Stories
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
                    Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
                    aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget
                    purus ornare. Risus elit et fringilla habitant ut facilisi.
                </p>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-blue-700 transition-all mt-6">
                    View Courses
                </button>
            </div>

            {/* Artist & Investor Section */}
            <div className="flex flex-col md:flex-row items-center justify-between  md:p-8 bg-white max-w-6xl mx-auto p-6">
                {/* Text Section */}
                <div className="md:w-3/5 max-w-6xl p-6  bg-gray-100 rounded-lg  h-auto ">
                    <div className='p-10  max-w-xl'>
                        <h3 className="text-gray-700 font-bold text-lg md:text-xl mt-auto">ARTIST & INVESTOR</h3>
                        <p className="mt-2 text-gray-600 text-sm md:text-base">
                            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor.
                            Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                        >
                            Read Full Story →
                        </a>
                    </div>
                </div>


                {/* Image Section */}
                <div className="md:w-2/5 mt-6 md:mt-0 p-4">
                    <img
                        src="../Picture.png" // Replace with the actual image URL
                        alt="A small plant growing"
                        className="rounded-lg w-full object-cover"
                    />
                </div>
            </div>

            {/* Growth Section */}
            <div className="w-full bg-white py-12 px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
                    Get your idea to grow fast
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                </p>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-blue-700 transition-all mt-6">
                    View courses
                </button>
            </div>


            <div className="bg-gray-100 rounded-lg max-w-full">
                <div className="container mx-auto p-6">
                    {/* Image and Text Row */}
                    <div className="lg:flex lg:space-x-6 max-w-6xl m-auto items-stretch">
                        {/* Left Side - Text */}
                        <div className="lg:w-1/2 flex flex-col justify-between rounded-xl p-6 lg:p-8 ">
                            <div>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                                    Easily brainstorm with your team
                                </h1>
                                <p className="text-sm md:text-lg mb-6">
                                    Scelerisque auctor dolor diam tortor, fames faucibus non interdum
                                    nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
                                    adipiscing lacinia.
                                </p>
                            </div>
                            <div>
                                <button className="bg-white text-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 mb-5">
                                    Start for Free
                                </button>
                            </div>
                            <img
                                src="../Group 338.png"
                                alt="Brainstorming team"
                                className="rounded-xl w-fit h-fit object-cover"
                            />
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="../Group 339.png"
                                alt="Brainstorming team"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>




            {/* Brainstorm Now Section */}
            <div className="w-full bg-white py-12 px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
                    Brainstorm Now!
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    Risus elit et fringilla habitant ut facilisi.
                </p>
                <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-blue-700 transition-all mt-6">
                    Start for Free
                </button>
            </div>
        </div>
    );
};

export default Solutions;
