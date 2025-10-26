import { useState } from "react";

const questions = [
  "I lose focus easily while reading or working.",
  "I get distracted by phone or notifications while doing important tasks.",
  "I can stay deeply engaged for 20 minutes without mind wandering.", // reverse
  "When I switch tasks, I take time to refocus.",
  "My thoughts often jump from one topic to another.",
  "I find it hard to bring attention back when distracted.",
  "I often realize I’ve been working on autopilot.",
  "I can easily tune out background noise.", // reverse
  "I remember small details of what I just read or heard.", // reverse
  "By the end of the day, my mind feels scattered and overstimulated.",
];

const reverseIndexes = [2, 7, 8]; // 0-based indexes for Q3, Q8, Q9

export default function FocusTest({ phase, setPhase }) {
  const [answers, setAnswers] = useState(Array(10).fill(3));
  const [userEmail, setUserEmail] = useState('');
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('');

  const resetQuiz = () => {
    setAnswers(Array(10).fill(3));
    setScore(0);
    setCategory('');
    setUserEmail('');
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = Number(value);
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let total = 0;
    answers.forEach((val, i) => {
      if (reverseIndexes.includes(i)) total += 6 - val; // reverse scoring
      else total += val;
    });

    setScore(total);
    if (total <= 25) setCategory("Low Focus – Meditation can rebuild sustained attention.");
    else if (total <= 38) setCategory("Moderate Focus – Meditation can sharpen focus in 7 days.");
    else setCategory("High Focus – Meditation can sustain long-term calm and focus.");

    setPhase('results');
  };

  if (phase === 'hidden') return null;

  if (phase === 'email') {
    return (
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-3xl mx-auto mt-16 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Enter Your Email to Start</h2>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full p-3 rounded-lg border border-slate-300 mb-4"
        />
        <button
          onClick={() => { resetQuiz(); setPhase('quiz'); }}
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (phase === 'quiz') {
    return (
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-3xl mx-auto mt-16 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          🧘 Attention & Focus Self-Assessment
        </h2>

        {questions.map((q, i) => (
          <div key={i} className="mb-6">
            <p className="text-slate-700 mb-2 font-medium">
              {i + 1}. {q}
            </p>
            <input
              type="range"
              min="1"
              max="5"
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Never (1)</span>
              <span>Always (5)</span>
            </div>
          </div>
        ))}

        <button
          onClick={calculateScore}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          See My Focus Score
        </button>
      </div>
    );
  }

  if (phase === 'results') {
    return (
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-3xl mx-auto mt-16 p-8 border border-slate-200">
        <div className="mt-8 text-center">
          <p className="text-lg text-slate-700 font-medium">
            Your Focus Score: <span className="text-blue-600 font-bold">{score}/50</span>
          </p>
          <p className="mt-2 text-slate-600">{category}</p>

          <button
            onClick={() => { resetQuiz(); setPhase('email'); }}
            className="mt-4 px-6 py-2 border border-blue-400 rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Retake Test
          </button>
        </div>
      </div>
    );
  }

  return null;
}
