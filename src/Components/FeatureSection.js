
  import React, { useState } from "react";

const features = [
  {
    id: 1,
    title: "Best Tutors",
    description: "Bring your design vision to life in clean, semantic HTML5.",
    icon: "https://via.placeholder.com/50", // Replace with your icon
  },
  {
    id: 2,
    title: "Flexible",
    description:
      "Connect your marketing tools with built-in integrations.",
    icon: "https://via.placeholder.com/50", // Replace with your icon
  },
  {
    id: 3,
    title: "Easy Access",
    description:
      "Connect your marketing tools with built-in integrations.",
    icon: "https://via.placeholder.com/50", // Replace with your icon
  },
];

const FeatureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Our Features <span className="text-blue-500">Special For You</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We provide various special features for all of you
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex-shrink-0 w-full max-w-md mx-auto p-4"
              >
                <div
                  className={`p-6 rounded-lg shadow-md ${
                    feature.id - 1 === currentIndex
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
