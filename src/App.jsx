import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import FocusTest from "./components/FocusTest";
import WhyMeditationMatters from "./components/WhyMeditationMatters";
import HowItWorks from "./components/HowItWorks";
import MeditationPrograms from "./components/MeditationPrograms";
import BreathingCircle from "./components/BreathingCircle";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import DailyQuote from "./components/DailyQuote";
import Navbar from "./components/Navbar";
import StreakTracker from "./components/StreakTracker";
import Success from "./components/pages/Success";
import Cancel from "./components/pages/Cancel";

// Component to handle hash scrolling
function HashScrollHandler() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // If element not found, try with class name (for backward compatibility)
        const classElement = document.querySelector(`.${elementId}`);
        if (classElement) {
          classElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  }, [hash]);

  return null; // This component doesn't render anything
}

function App() {

  const [testPhase, setTestPhase] = useState('hidden'); // 'hidden', 'email', 'quiz', 'results'

  useEffect(() => {
    if (testPhase !== 'hidden') {
      const focusTestElement = document.querySelector('.focus-test-section');
      if (focusTestElement) {
        focusTestElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [testPhase]);

  return (
    <Router>
      <HashScrollHandler />
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={
          <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden pt-20">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-20 right-6 z-20">
                <StreakTracker />
              </div>
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 mb-6 animate-pulse">
                  <p className="text-sm text-white font-medium animate-bounce">
                    🌿 Find Your Inner Peace
                  </p>
                </div>
                <h1 className="text-4xl mt-8 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 animate-pulse">
                  Discover Calm in Every Breath
                </h1>
                <p className="max-w-2xl text-white/90 mb-8 text-lg animate-fade-in">
                  Transform your mind, reduce stress, and find balance through guided meditation.
                  Start your journey to mindfulness today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={() => setTestPhase('email')}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
                  >
                    Start Meditation Free
                  </button>
                  <button
                    onClick={() => {
                      document.querySelector('.meditation-programs-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
                  >
                    Explore Programs
                  </button>
                </div>
              </div>
              {/* Daily Quote and Breathing Circle */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <DailyQuote />
                <BreathingCircle />
              </div>
              {/* Animated background elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-spin"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse"></div>
            </section>

            {/* Focus Test Section */}
            <div id="focus-test" className="focus-test-section">
              <FocusTest phase={testPhase} setPhase={setTestPhase} />
            </div>
            {/* Why Meditation Matters Section */}
            <WhyMeditationMatters />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Meditation Programs Section */}
            <MeditationPrograms />


            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />
            {/* Footer */}
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
