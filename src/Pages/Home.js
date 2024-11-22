import React from "react";
import Logo from '../Components/Logo';
import Testimonial from "../Components/Testimonial";
import FeatureSection from "../Components/FeatureSection";


const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-5 lg:py-20 bg-white px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4">
          Skills speak louder <br /> than words
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-bold mb-8 text-gray-500 mx-auto max-w-7xl">
          Whether you want to level up your skills or build a great team,
          CyberinforMines skills assessments and learning tools <br />
          get you where you need to go.
        </p>
        <div className="flex  justify-center gap-4">
          <button className="px-6 sm:px-8 py-3 w-fit  bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
          <button className="px-6 sm:px-8 py-3 w-fit bg-transparent text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Request Demo
          </button>
        </div>
      </section>

<Logo/>
      {/* Course Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl  p-6 md:p-12 m-auto">
        {/* Left Section with the Complete Image */}
        <div className=" flex justify-center ">
          <img
            src="../Course.png"
            alt="Course Overview"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>

        {/* Right Section with Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4 py-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl ">
            Watch Our Courses
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of classical physics: Newtonian mechanics
          </p>
          <a
            href="/learn-more"
            className="text-blue-600 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>
      </section>

      {/* Training Gap Section */}
      <div className="text-center py-5 lg:py-16 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-800 mb-4">
          It's not a talent shortage
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-blue-600 mb-6">
          it's a training gap
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-7xl mx-auto">
          Tech hiring needs a reset. From prepping for jobs and practicing
          coding to running a world-class technical interview, give developers
          the tools <br className="hidden md:block" /> they need to showcase
          their skills, passion, and potential.
        </p>
      </div>

{/* <FeatureSection/> */}
      {/* Coding Practice Section */}
      <div className="bg-blue-600 p-8 md:p-16 rounded-lg flex flex-col md:flex-row items-center max-w-7xl mx-auto text-white space-y-8 md:space-y-0">
        {/* Left Section with Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-sm font-semibold">:: Coding practice ::</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Explore and expand your skills.
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Every idea has a first line of code. Prep for jobs and sharpen your
            skills alongside a global community of developers. Access the
            content you need to develop new skills – and land the job you’ve
            dreamed of.
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

      {/* language code */}
      <div className="bg-white text-gray-800 p-6 md:p-12 font-sans">
        <div className="container mx-auto max-w-7xl">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
            <div className="w-full md:w-1/2">
              <img
                src="../Frame2.png"
                alt="Code example"
                className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                The language for{" "}
                <span className="text-blue-600">building web pages</span>
              </h2>
              <p className="text-sm md:text-base">
                Go live on a fast, reliable, and hassle-free hosting network
                that scales with your business with one click and go code!
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Try it Yourself
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Leave the{" "}
                <span className="text-blue-600">binary tree behind.</span>
              </h2>
              <p className="text-sm md:text-base">
                Build coding questions using our library of dev-friendly content
                that challenges them to solve problems they'd actually tackle on
                the job.
              </p>
              <button className="text-blue-600 hover:underline">
                Start Free Trial
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="../Frame1.png"
                alt="Question filter example"
                className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
            <div className="w-full md:w-1/2">
              <img
                src="../Frame3.png"
                alt="Code testing example"
                className="bg-gray-100 rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Focus on what really matters:{" "}
                <span className="text-blue-600">the code.</span>
              </h2>
              <p className="text-sm md:text-base">
                Build skills-based coding tests with tech problems a developer
                would encounter on the job—and hire the team behind your next
                big idea.
              </p>
              <button className="text-blue-600 hover:underline">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Final Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
            {/* Left Section */}
            <div className="flex flex-col justify-center text-center md:text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Identify top <span className="text-blue-500">contenders</span>
              </h1>
              <p className="text-sm md:text-base">
                Identify top contenders and invite them to meet your team using
                data-driven decisions that help level the playing field for
                developers everywhere.
              </p>
              <a
                href="#"
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                Learn More →
              </a>
            </div>

            {/* Right Section */}
            <div className="flex justify-center">
              <img
                src="../summary.png"
                alt="Summary visualization"
                className="object-cover rounded-lg shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans  bg-white max-w-7xl m-auto">
        {/* White Background Section for Text */}
        <div className="text-center py-8 px-4 sm:px-8">
          <p className="font-semibold text-sm sm:text-base leading-6">
            :: Technical interviews ::
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Interview like it's <span className="text-blue-600">2024</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg leading-normal max-w-5xl mx-auto">
            Ditch out of reach and out of touch interview questions about golf
            balls and 747s — and turn off your clunky screen share for good.
            Code, create, and collaborate with an IDE built to showcase
            real-world skills in a real-world environment.
          </p>
        </div>

        {/* Black Background Section for Image */}
        <div className="flex justify-center bg-gray-900 py-8 px-4 sm:px-8">
          <img
            src="../interview.png" // Replace this with the actual path to your image
            alt="Code editor screenshot"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Testimonial/>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white text-black max-w-7xl m-auto py-10">
        {/* Left Side */}
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

export default Home;
