import React from 'react';

function InterviewInterface() {
  return (
    <div className="font-sans min-h-screen">
      {/* White Background Section for Text */}
      <div className="bg-white text-black text-center py-8">
        <p className="font-semibold text-base leading-6">:: Technical interviews ::</p>
        <h1 className="text-4xl font">
          Interview like it's <span className="text-blue-600">2024</span>
        </h1>
        <p className="mt-2 font-inter font-normal text-base leading-6 px-4 md:px-8">
          Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.
        </p>
      </div>

      {/* Black Background Section for Image */}
      <div className="w-fit h-fit px-20">
        <img
          src="../interview.png" // Replace this with the actual path to your image
          alt="Code editor screenshot"
        />
      </div>
    </div>
  );
}

export default InterviewInterface;
