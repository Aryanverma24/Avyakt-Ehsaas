import React, { useState, useEffect } from 'react';

export default function StreakTracker() {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState('');

  useEffect(() => {
    const today = new Date().toDateString();
    const storedStreak = localStorage.getItem('meditationStreak') || 0;
    const storedLastDate = localStorage.getItem('lastDate');

    if (storedLastDate) {
      const lastVisit = new Date(storedLastDate);
      const daysDifference = Math.floor((new Date() - lastVisit) / (1000 * 60 * 60 * 24));

      if (daysDifference === 1) {
        // Consecutive day
        const newStreak = parseInt(storedStreak) + 1;
        setStreak(newStreak);
        localStorage.setItem('meditationStreak', newStreak);
        localStorage.setItem('lastDate', today);
      } else if (daysDifference === 0) {
        // Same day
        setStreak(parseInt(storedStreak));
      } else {
        // Reset streak
        setStreak(1);
        localStorage.setItem('meditationStreak', 1);
        localStorage.setItem('lastDate', today);
      }
    } else {
      // First time
      setStreak(1);
      localStorage.setItem('meditationStreak', 1);
      localStorage.setItem('lastDate', today);
    }

    setLastDate(today);
  }, []);

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/30 animate-pulse shadow-lg">
      <h3 className="text-sm font-semibold text-white mb-1">🔥 Meditation Streak</h3>
      <p className="text-white text-base">{streak} days</p>
    </div>
  );
}
