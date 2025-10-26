import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    text: 'This meditation app helped me reduce stress and improve my focus in just a week!',
    rating: 3,
  },
  {
    name: 'Bob Smith',
    text: 'The focus test was eye-opening. Now I have a clear path to better mindfulness.',
    rating: 5,
  },
  {
    name: 'Carol Davis',
    text: 'Great course structure. Easy to follow and very effective.',
    rating: 4,
  },
  {
    name: 'David Lee',
    text: 'The guided sessions are incredibly relaxing. I feel more balanced every day.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    text: 'Perfect for beginners. The breathing exercises changed my routine.',
    rating: 5,
  },
  {
    name: 'Frank Brown',
    text: 'Highly recommend! The app is user-friendly and the content is top-notch.',
    rating: 4,
  },
  {
    name: 'Grace Miller',
    text: 'After a month of use, my anxiety levels have dropped significantly.',
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // centers card
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 bg-gradient-to-b from-white to-softLavender px-3 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-deepGreen mb-8">
        What Our Users Say
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-1 sm:px-4">
              <div
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl
                p-4 sm:p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-300 min-h-[200px] sm:min-h-[220px]
                flex flex-col justify-between mb-4 sm:mb-8"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base sm:text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 flex-grow text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-deepGreen text-sm sm:text-lg">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
