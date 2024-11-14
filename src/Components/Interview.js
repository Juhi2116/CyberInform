import React from 'react';

function InterviewInterface() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* White Background Section for Text */}
      <div className="text-center py-8 px-4 sm:px-8">
        <p className="font-semibold text-sm sm:text-base leading-6">:: Technical interviews ::</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Interview like it's <span className="text-blue-600">2024</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg leading-normal max-w-3xl mx-auto">
          Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. 
          Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.
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
  );
}

export default InterviewInterface;
