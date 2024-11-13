import React from 'react';

function Language() {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 font-sans">
      <div className="container mx-auto" style={{ width: '1170px' }}>
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div style={{ width: '568px', height: '406px' }}>
            <img
              src="../Frame1.png" // Replace with your image path
              alt="Code example"
              className="bg-gray-100 rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center text-center md:text-left space-y-4" style={{ width: '568px', height: '406px', display: 'flex', flexDirection: 'column' }}>
            <h2 className="text-3xl font-bold">The language for <span className="text-blue-600">building web pages</span></h2>
            <p>Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Try it Yourself</button>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex items-center justify-center text-center md:text-left space-y-4" style={{ width: '568px', height: '436px', display: 'flex', flexDirection: 'column' }}>
            <h2 className="text-3xl font-bold">Leave the <span className="text-blue-600">binary tree behind.</span></h2>
            <p>Build coding questions using our library of dev-friendly content that challenges them to solve problems they'd actually tackle on the job.</p>
            <button className="text-blue-600 hover:underline">Start Free Trial</button>
          </div>
          <div style={{ width: '568px', height: '436px' }}>
            <img
              src="../Frame2.png" // Replace with your image path
              alt="Question filter example"
              className="bg-gray-100 rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div style={{ width: '568px', height: '436px' }}>
            <img
              src="../Frame3.png" // Replace with your image path
              alt="Code testing example"
              className="bg-gray-100 rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center text-center md:text-left space-y-4" style={{ width: '568px', height: '436px', display: 'flex', flexDirection: 'column' }}>
            <h2 className="text-3xl font-bold">Focus on what really matters: <span className="text-blue-600">the code.</span></h2>
            <p>Build skills-based coding tests with tech problems a developer would encounter on the job—and hire the team behind your next big idea.</p>
            <button className="text-blue-600 hover:underline">Request a Demo</button>
          </div>
          


          
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto h-screen p-4">
  {/* Left Section */}
  <div className="flex flex-col justify-center bg-white p-8">
    <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4 leading-tight">
      Identify top <span className="text-blue-500">contenders</span>
    </h1>
    <p className="text-base md:text-lg text-gray-500 mb-6">
      Identify top contenders and invite them to meet your team using data-driven decisions
      that help level the playing field for developers everywhere.
    </p>
    <a href="#" className="text-lg font-semibold hover:underline text-blue-500">
      Learn More →
    </a>
  </div>

  {/* Right Section */}
  <div className="flex items-center justify-center bg-white">
    <img
      src="../summary.png"
      alt="Placeholder"
      className="object-cover rounded-lg shadow-xl"
    />
  </div>


        
        {/* <div className='grid grid-cols-2 gap-4 w-96'>
        <div className="grid grid-rows-2 h-screen bg-gray-100 p-8">
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4">
        Identify top 
        <span className='text-blue-500'> contenders</span></h1>
        <p className="text-base md:text-lg text-gray-500 w-full px-4 md:px-8 mx-auto">
        Identify top contenders and invite them to meet your team using data-driven decisions
      that help level the playing field for developers everywhere.</p>


      <a href="#" className="text-lg font-semibold hover:underline text-blue-500">
          Learn More →
        </a>

        </div>
    <div>
      image
    </div>
    </div> */}
    

      </div>
    </div>
    </div>
  );
}

export default Language;
