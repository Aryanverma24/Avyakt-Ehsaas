import { motion } from 'framer-motion';

const steps = [
  {
    step: '1',
    title: 'Start Your Journey',
    description: 'Begin with our free focus test to assess your current attention level.',
    icon: '🚀',
    color: 'from-blue-400 to-blue-600',
  },
  {
    step: '2',
    title: 'Personalized Guidance',
    description: 'Receive tailored meditation recommendations based on your results.',
    icon: '🎯',
    color: 'from-green-400 to-green-600',
  },
  {
    step: '3',
    title: 'Explore Programs',
    description: 'Dive into our 4-week courses and guided sessions to build your practice.',
    icon: '📚',
    color: 'from-purple-400 to-purple-600',
  },
  {
    step: '4',
    title: 'Practice Daily',
    description: 'Incorporate short, effective meditations into your routine for lasting benefits.',
    icon: '🌟',
    color: 'from-pink-400 to-pink-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className=" pb-6 bg-gradient-to-b from-indigo-50 to-purple-50 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-deepGreen mb-12"
      >
        How It Works
      </motion.h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
              {/* Timeline Dot */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-deepGreen text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>

              {/* Content Card */}
              <div className={`bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-slate-200 md:w-96 group-hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                <h3 className="text-xl font-semibold text-deepGreen mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
