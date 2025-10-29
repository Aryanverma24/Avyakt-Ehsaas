import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useViewport from '../hooks/useViewport';

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

// ⭐ Individual testimonial card (animated on scroll)
const TestimonialCard = ({ testimonial, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="px-2 sm:px-4"
    >
      <div
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl
        p-5 sm:p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02]
        transition-all duration-300 min-h-[200px] sm:min-h-[220px]
        flex flex-col justify-between mx-1 sm:mx-2 my-2"
      >
        <div className="flex mb-3 sm:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
          ))}
        </div>
        <p className="text-gray-700 mb-3 sm:mb-4 flex-grow text-sm sm:text-base">
          "{testimonial.text}"
        </p>
        <p className="text-deepGreen font-medium text-sm sm:text-base">
          - {testimonial.name}
        </p>
      </div>
    </motion.div>
  );
};

// ⭐ Main Testimonials component with auto-adjusting carousel
// Mobile Testimonial Card

export default function Testimonials() {
  const { isMobile, isTablet, isDesktop } = useViewport();
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    if (isMobile) setSlidesToShow(1);
    else if (isTablet) setSlidesToShow(2);
    else setSlidesToShow(3);
    
    setMounted(true);
  }, [isMobile, isTablet, isDesktop]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: !isMobile,
    responsive: [
      {
        breakpoint: 1280, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  // Always use carousel but with different settings based on screen size
  const renderTestimonials = () => {
    if (!mounted) return null;

    return (
      <div className="relative w-full">
        <Slider {...settings} key={`slider-${slidesToShow}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={isMobile ? 'px-2' : 'px-2'}>
              <TestimonialCard 
                testimonial={testimonial} 
                index={index} 
                className={isMobile ? 'mx-auto max-w-[90%]' : ''}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className={`py-12 sm:py-16 bg-gradient-to-b from-white to-softLavender px-3 sm:px-6 ${
        isMobile ? 'min-h-auto' : 'min-h-[600px] sm:min-h-[500px]'
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-deepGreen mb-8">
        What Our Users Say
      </h2>

      <div className="max-w-6xl mx-auto">
        {renderTestimonials()}
      </div>
    </section>
  );
}
