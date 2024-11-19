import React from 'react';

const Solutions = () => {
    return (
        <div>
            <div className="bg-white flex flex-col items-center justify-center px-6 text-center my-10">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                    All your ideas in one place
                </h1>
                <p className="text-gray-600 text-base md:text-lg font-bold max-w-2xl mb-6">
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                    suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
                    amet, dui sit suspendisse.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-all">
                    Start for Free
                </button>
            </div>
            <div className="bg-white flex items-center justify-center mt-18 h-auto text-white">
                {/* Left Section - Person */}
                <div className="relative flex items-center justify-center">
                    <img
                        src="../start.png" // Replace with the actual image URL
                        alt="Developer"
                        className="w-[652px] h-[405px] rounded-md"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto p-6">
                    {/* First Row: Image and Text Section */}
                    <div className="lg:flex lg:space-x-6">
                        {/* Image Section */}
                        <div className="lg:w-1/2">
                            <img
                                src="../Mask1.png"
                                alt="Brainstorming team"
                                className="rounded-xl w-full"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2 bg-blue-500 text-white rounded-xl p-8 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                Easily brainstorm with your team
                            </h1>
                            <p className="text-lg mb-6">
                                Scelerisque auctor dolor diam tortor, fames faucibus non interdum
                                nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
                                adipiscing lacinia.
                            </p>
                            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                                Start for free
                            </button>
                        </div>
                    </div>

                    {/* Second Row: Three Images */}
                    <div className="grid grid-cols-4 gap-4 mt-8 items-center">
                        {/* Two Smaller Images */}
                        <div className="col-span-1">
                            <img
                                src="../Mask2.png"
                                alt="Lightbulb 1"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src="../Mask3.png"
                                alt="Lightbulb 2"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>

                        {/* Large Image */}
                        <div className="col-span-2">
                            <img
                                src="../Mask4.png"
                                alt="Idea and Team Discussion"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default Solutions;
