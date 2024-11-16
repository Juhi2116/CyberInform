import React from 'react';
import Language from '../Components/Language';
import InterviewInterface from '../Components/Interview';
import Practice from '../Components/Practice';
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Skills speak louder <br /> than words
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-bold mb-8 text-gray-500 mx-auto max-w-2xl">
          Whether you want to level up your skills or build a great team, CyberinforMines skills assessments and learning tools <br />
          get you where you need to go.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
          <button className="px-6 sm:px-8 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Request Demo
          </button>
        </div>
      </section>

      {/* Logo Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12 px-4 max-w-7xl mx-auto">
        <img src="../uber.png" alt="Logo 1" className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain" />
        <img src="../meta.png" alt="Logo 2" className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain" />
        <img src="../instacart.png" alt="Logo 3" className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain" />
        <img src="../greenhouse.png" alt="Logo 4" className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain" />
        <img src="../gusto.png" alt="Logo 5" className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain" />
      </div>

      {/* Course Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 space-y-8 md:space-y-0">
        {/* Left Section with the Complete Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="../Course.png"
            alt="Course Overview"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>

        {/* Right Section with Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Watch Our Courses</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics
          </p>
          <a href="/learn-more" className="text-blue-600 font-semibold hover:underline">
            Learn More →
          </a>
        </div>
      </section>

      {/* Training Gap Section */}
      <div className="text-center py-16 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-800 mb-4">
          It's not a talent shortage
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-blue-600 mb-6">
          it's a training gap
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-4xl mx-auto">
          Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview,
          give developers the tools <br className="hidden md:block" /> they need to showcase their skills, passion, and potential.
        </p>
      </div>

      {/* Coding Practice Section */}
      <div className="bg-blue-600 p-8 md:p-16 rounded-lg flex flex-col md:flex-row items-center max-w-7xl mx-auto text-white space-y-8 md:space-y-0">
        {/* Left Section with Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-sm font-semibold">:: Coding practice ::</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Explore and expand your skills.</h2>
          <p className="text-sm sm:text-base md:text-lg">
            Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers.
            Access the content you need to develop new skills – and land the job you’ve dreamed of.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
            Sign Up and Practice
          </button>
        </div>

        {/* Right Section with Text */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="../candidate.png"
            alt="Coding Practice"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Language />
      <InterviewInterface />
      <Practice />
      <div className="bg-blue-600">   <Footer/></div>
   
    </div>
  );
}

export default Home;
