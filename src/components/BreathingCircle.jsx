import React, { useState, useEffect } from 'react';

export default function BreathingCircle() {
  const [phase, setPhase] = useState('inhale');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const cycle = () => {
      setPhase('inhale');
      setScale(1);
      setTimeout(() => {
        setPhase('hold');
        setScale(1.5);
      }, 4000);
      setTimeout(() => {
        setPhase('exhale');
        setScale(1);
      }, 7000);
      setTimeout(() => {
        setPhase('hold');
        setScale(1.5);
      }, 11000);
    };

    cycle();
    const interval = setInterval(cycle, 15000);
    return () => clearInterval(interval);
  }, []);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Inhale';
      case 'hold': return 'Hold';
      case 'exhale': return 'Exhale';
      default: return 'Inhale';
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative w-32 h-32 mb-4">
        <div
          className={`w-full h-full rounded-full bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6]
 transition-transform duration-2000 ${
            phase === 'hold' ? 'opacity-50' : 'opacity-100'
          }`}
          style={{ transform: `scale(${scale})` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {getPhaseText()}
        </div>
      </div>
      <p className="text-black/90 text-center">
        Follow the breathing guide to relax and center your mind.
      </p>
    </div>
  );
}
