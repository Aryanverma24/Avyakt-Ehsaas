import { motion } from 'framer-motion';
import { useState } from 'react';
const faqs = [
  {
    question: 'What is meditation?',
    answer: 'Meditation is a practice where an individual uses a technique to train attention and awareness, achieving a mentally clear and emotionally calm state.',
  },
  {
    question: 'How long should I meditate each day?',
    answer: 'Start with 5-10 minutes a day and gradually increase to 20-30 minutes as you get comfortable.',
  },
  {
    question: 'Do I need any special equipment?',
    answer: 'No, all you need is a quiet space and comfortable seating. No special equipment is required.',
  },
  {
    question: 'Is meditation suitable for beginners?',
    answer: 'Yes, our programs are designed for all levels, including complete beginners.',
  },
  {
    question: 'How often should I practice?',
    answer: 'Daily practice is recommended for the best results, but even a few times a week can be beneficial.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-6 bg-gradient-to-b from-pink-50 to-purple-50 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-deepGreen mb-12"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-white/90 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-deepGreen">{faq.question}</span>
              <span className="text-2xl text-gray-400">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white/80 backdrop-blur-lg rounded-b-lg p-6 border border-slate-200 border-t-0">
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
