import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Reduces Stress',
    description: 'Meditation helps lower cortisol levels, promoting relaxation and reducing daily stress.',
    icon: '🧘',
  },
  {
    title: 'Improves Focus',
    description: 'Regular practice enhances concentration and mental clarity for better productivity.',
    icon: '🎯',
  },
  {
    title: 'Enhances Emotional Well-being',
    description: 'It fosters emotional balance, reducing anxiety and improving mood.',
    icon: '😌',
  },
  {
    title: 'Promotes Better Sleep',
    description: 'Meditation techniques can lead to deeper, more restful sleep patterns.',
    icon: '💤',
  },
  {
    title: 'Boosts Overall Health',
    description: 'Supports physical health by lowering blood pressure and strengthening the immune system.',
    icon: '🌿',
  },
];

export default function WhyMeditationMatters() {
  return (
    <section id="why-meditation" className="why-meditation-section py-12 bg-gradient-to-b from-purple-50 to-indigo-50 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-deepGreen mb-8"
      >
        Why Meditation Matters
      </motion.h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 text-center">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-deepGreen mb-2 text-center">{reason.title}</h3>
            <p className="text-slate-600 text-center">{reason.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 italic text-lg mt-12 max-w-2xl mx-auto">
        "Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings." – Arianna Huffington
      </p>
    </section>
  );
}
