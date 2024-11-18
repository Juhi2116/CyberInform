import React from 'react';
  
  const Logo = () =>  {
	return (
	  <div>
              {/* Logo Section */}
      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-16 mb-12 px-4 max-w-7xl mx-auto">
        <img
          src="../uber.png"
          alt="Logo 1"
          className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain"
        />
        <img
          src="../meta.png"
          alt="Logo 2"
          className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain"
        />
        <img
          src="../instacart.png"
          alt="Logo 3"
          className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain"
        />
        <img
          src="../greenhouse.png"
          alt="Logo 4"
          className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain"
        />
        <img
          src="../gusto.png"
          alt="Logo 5"
          className="w-20 h-12 sm:w-32 sm:h-16 md:w-40 md:h-24 object-contain"
        />
      </div>

	  </div>
	);
  }
  
  export default Logo;
  