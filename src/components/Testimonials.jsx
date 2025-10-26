import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    text: 'This meditation app helped me reduce stress and improve my focus in just a week!',
    rating: 5,
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
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-softLavender px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-deepGreen mb-8">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <p className="font-semibold text-deepGreen">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
