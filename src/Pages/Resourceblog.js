import React from 'react';

const Resourceblog = () => {
  return (
    <div className="bg-white py-12">

      {/* Featured Post Section */}
      <section className="container max-w-7xl mx-auto px-6 lg:px-20 space-y-12 lg:flex lg:space-x-12">
        {/* Left Side (Text) */}
        <div className="lg:w-2/3 space-y-6 text-center  max-w-7xl lg:text-left">
          <p className="text-xl font-semibold text-gray-800">Featured Post</p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className="text-lg text-gray-600">
            Talent pool? Try talent ocean. We help navigate that sea of applicants so you can connect faster and hire developers with the skills your team needs to innovate.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 max-w-7xl rounded-lg hover:bg-blue-600 transition duration-300">
            Read More
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <img
            src="../Man1.png"  // Ensure this path is correct
            alt="Image of a person"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Economy Section */}
      <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 mt-10  ">
        <h1 className="text-2xl font-bold px-4 py-8" >All Post</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 shadow-md rounded-lg">
            <img src="../r1.png" alt="Designers at work" className="rounded-lg p-4" /> </div>
          <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0"> <p className="text-blue-600 mt-8 text-xl font-semibold">Startup</p> 
          <h1 className="text-2xl font-bold mt-2"> Design tips for designers that cover everything you need </h1> <p className="text-gray-600 mt-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p> </div> </div> </div>


          <div className="max-w-7xl mx-auto p-6   ">
   
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 shadow-md rounded-lg">
            <img src="../r1.png" alt="Designers at work" className="rounded-lg p-4" /> </div>
          <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0"> <p className="text-blue-600 mt-8 text-xl font-semibold">Startup</p> 
          <h1 className="text-2xl font-bold mt-2"> How to build rapport with your web design clients</h1> <p className="text-gray-600 mt-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p> </div> </div> </div>




          <div className="max-w-7xl mx-auto p-6  ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 shadow-md rounded-lg">
            <img src="../r1.png" alt="Designers at work" className="rounded-lg p-4" /> </div>
          <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0"> <p className="text-blue-600 mt-8 text-xl font-semibold">Startup</p> 
          <h1 className="text-2xl font-bold mt-2"> Logo design trends to avoid in 2025 </h1> <p className="text-gray-600 mt-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p> </div> </div> </div>

          <div className="max-w-7xl mx-auto p-6   ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 shadow-md rounded-lg">
            <img src="../r1.png" alt="Designers at work" className="rounded-lg p-4" /> </div>
          <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0"> <p className="text-blue-600 mt-8 text-xl font-semibold">Startup</p> 
          <h1 className="text-2xl font-bold mt-2"> Design tips for designers that cover everything you need </h1> <p className="text-gray-600 mt-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p> </div> </div> </div>

          <div className="max-w-7xl mx-auto p-6   ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 shadow-md rounded-lg">
            <img src="../r1.png" alt="Designers at work" className="rounded-lg p-4" /> </div>
          <div className="md:w-3/4 md:pl-6 mt-6 md:mt-0"> <p className="text-blue-600 mt-8 text-xl font-semibold">Startup</p> 
          <h1 className="text-2xl font-bold mt-2"> Design tips for designers that cover everything you need </h1> <p className="text-gray-600 mt-4"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p> </div> </div> </div>


          </section>

          <div className="w-full bg-white py-12 px-6 text-center">
            <p className="text-blue-600 font-bold mb-6">Join Our Team</p>
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4">
                To be a part of our story                </h1>
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

export default Resourceblog;
