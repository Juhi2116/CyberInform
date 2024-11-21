import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    quote: "Placerat feugiat senectus",
    description:
      "Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.",
    name: "Jane Doe",
    designation: "Senior Designer",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 2,
    quote: "Consectetur adipiscing elit",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.",
    name: "John Smith",
    designation: "Creative Director",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    quote: "Donec sollicitudin molestie",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
    name: "Emma Johnson",
    designation: "UI/UX Designer",
    image: "https://via.placeholder.com/100",
  },
];

// Custom Arrow Component
const CustomArrow = ({ className, onClick, type }) => {
  const isLeft = type === "prev";
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        isLeft ? "left-0" : "right-0"
      } bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-500 hover:text-white`}
      onClick={onClick}
    >
      {isLeft ? (
        <span className="material-icons">chevron_left</span>
      ) : (
        <span className="material-icons">chevron_right</span>
      )}
    </div>
  );
};

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow type="prev" />,
    nextArrow: <CustomArrow type="next" />,
  };

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        What other <span className="text-blue-500">users say</span>
      </h2>
      <div className="max-w-2xl mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <p className="text-lg font-semibold mb-4">
                {testimonial.quote}
              </p>
              <p className="text-gray-600 mb-6">{testimonial.description}</p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <h4 className="font-bold text-blue-600">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
