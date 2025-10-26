import React, { useState, useEffect } from 'react';

const quotes = [
  "The mind is everything. What you think you become. – Buddha",
  "Peace comes from within. Do not seek it without. – Buddha",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "The best way to predict the future is to create it. – Peter Drucker",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The secret of getting ahead is getting started. – Mark Twain",
  "It is during our darkest moments that we must focus to see the light. – Aristotle",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Change your thoughts and you change your world. – Norman Vincent Peale",
  "Your limitation—it's only your imagination. – Unknown",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "Sometimes later becomes never. Do it now. – Unknown",
  "Dream it. Wish it. Do it. – Unknown",
  "Great things never come from comfort zones. – Unknown",
];

export default function DailyQuote() {
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('quoteDate');
    const storedQuote = localStorage.getItem('dailyQuote');

    if (storedDate === today && storedQuote) {
      setDailyQuote(storedQuote);
    } else {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setDailyQuote(randomQuote);
      localStorage.setItem('dailyQuote', randomQuote);
      localStorage.setItem('quoteDate', today);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 animate-pulse">
      <h3 className="text-xl font-semibold text-white mb-2">🌟 Daily Affirmation</h3>
      <p className="text-white/90 italic text-lg">"{dailyQuote}"</p>
    </div>
  );
}
