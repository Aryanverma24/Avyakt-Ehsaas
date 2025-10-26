import { motion } from 'framer-motion';
import axios from 'axios';

const programs = [
  {
    title: 'Beginner Mindfulness',
    description: 'Start your meditation journey with simple techniques to build awareness and presence.',
    duration: '4 Weeks',
    level: 'Beginner',
    icon: '🧘‍♀️',
    color: 'from-green-400 to-green-600',
    price: 999,
    priceId: 'beginner-mindfulness'
  },
  {
    title: 'Stress Relief',
    description: 'Learn to manage daily stress through guided breathing and relaxation practices.',
    duration: '3 Weeks',
    level: 'All Levels',
    icon: '😌',
    color: 'from-blue-400 to-blue-600',
    price: 799,
    priceId: 'stress-relief'
  },
  {
    title: 'Focus Enhancement',
    description: 'Improve concentration and mental clarity with targeted mindfulness exercises.',
    duration: '5 Weeks',
    level: 'Intermediate',
    icon: '🎯',
    color: 'from-purple-400 to-purple-600',
    price: 1299,
    priceId: 'focus-enhancement'
  },
  {
    title: 'Sleep Improvement',
    description: 'Achieve better sleep quality with evening meditations and relaxation routines.',
    duration: '2 Weeks',
    level: 'All Levels',
    icon: '💤',
    color: 'from-indigo-400 to-indigo-600',
    price: 599,
    priceId: 'sleep-improvement'
  },
];

export default function MeditationPrograms() {
  const handleEnroll = async (program) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/create-checkout-session`, {
        courseName: program.title,
        price: program.price,
        priceId: program.priceId,
      });

      if (response.data.url) {
        window.location.href = response.data.url; // redirect to Stripe checkout
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Something went wrong during checkout!");
    }
  };

  return (
    <section id="meditation-programs-section" className="meditation-programs-section py-6 bg-gradient-to-b from-purple-50 to-pink-50 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-deepGreen mb-12"
      >
        Meditation Programs
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white text-3xl mb-4 mx-auto`}>
              {program.icon}
            </div>
            <h3 className="text-xl font-semibold text-deepGreen mb-2 text-center">{program.title}</h3>
            <p className="text-slate-600 text-center mb-4">{program.description}</p>
            <div className="flex justify-between text-sm text-slate-500 mb-4">
              <span>{program.duration}</span>
              <span>{program.level}</span>
            </div>
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-indigo-600">₹{program.price}</span>
            </div>
            <button
              onClick={() => handleEnroll(program)}
              className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-300 font-medium"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
