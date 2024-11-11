import React from "react";

function Hero() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-6xl font-bold leading-tight mb-4">
          Skills speak louder <br /> than words
        </h1>
        <p className="text-base font-bold md:text-lg mb-8 text-gray-500 px-4 md:px-8 mx-auto">
          Whether you want to level up your skills or build a great team, CyberinforMines skills assessments and learning tools <br />
          get you where you need to go.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
          <button className="px-8 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Request Demo
          </button>
        </div>
      </section>

      {/* Logo Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12 px-4 max-w-7xl mx-auto">
        <img src="../uber.png" alt="Logo 1" className="w-40 h-24 object-contain" />
        <img src="../meta.png" alt="Logo 2" className="w-40 h-24 object-contain" />
        <img src="../instacart.png" alt="Logo 3" className="w-40 h-24 object-contain" />
        <img src="../greenhouse.png" alt="Logo 4" className="w-40 h-24 object-contain" />
        <img src="../gusto.png" alt="Logo 5" className="w-40 h-24 object-contain" />
      </div>

      {/* Course Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12">
        {/* Left Section with the Complete Image */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center h-full">
          <img
            src="../Course.png" // course image
            alt="Course Overview"
            className="rounded-lg shadow-lg max-w-md w-full h-full object-cover"
          />
        </div>

        {/* Right Section with Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-semibold mb-6">Watch Our Courses</h1>
          <p className="text-lg text-gray-600 mb-4">
            Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics
          </p>
          <a href="/learn-more" className="text-blue-600 font-semibold hover:underline">
            Learn More →
          </a>
        </div>
        


      </section>
      <div className="text-center py-16 px-4 bg-white">
      <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4">
        It's not a talent shortage
      </h1>
      <h2 className="text-5xl md:text-7xl font-light text-blue-600 mb-6">
        it's a training gap
      </h2>
      <p className="text-base md:text-lg text-gray-500 w-full px-4 md:px-8 mx-auto">
        Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, 
        give developers the tools <br/> they need to showcase their skills, passion, and potential.
      </p>
    </div>
    <div class="bg-blue-600 p-8 md:p-16 rounded-lg flex flex-col md:flex-row items-center max-w-7xl mx-auto text-white">
 {/* left Section with Text */}
  <div class="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
    <p class="text-sm font-semibold mb-2">:: Coding practice ::</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Explore and expand your skills.</h2>
    <p class="text-base md:text-lg mb-6">
      Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers.
      Access the content you need to develop new skills – and land the job you’ve dreamed of.
    </p>
    <button class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
      Sign Up and Practice
    </button>
  </div>

 {/* Right Section with Text */}
  <div class="md:w-1/2 flex justify-center">
    <img
      src="../candidate.png"
      alt="Coding Practice"
      class="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>
</div>

    </div>



  );
}

export default Hero;
