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
            <section 
              id="home" 
              className="flex flex-col items-center justify-center text-center py-24 px-4 relative overflow-hidden min-h-screen"
              style={{
              background: `linear-gradient(210deg, #FFE0B2 0%, #FFAB91 50%, #FF7043 100%)`,
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/40"></div>
              <div className="fixed right-12 md:top-20 top-3 md:right-4 z-50 md:top-6 md:right-6">
                <StreakTracker />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto w-full px-4">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/30 mb-8 inline-block shadow-sm">
                  <p className="text-sm text-gray-700 font-medium">
                    🌱 Find Your Inner Peace
                  </p>
                </div>
                <h1 className="text-4xl mt-8 md:text-6xl font-bold text-gray-700 mb-4">
                  Discover Calm in Every Breath
                </h1>
                <p className="max-w-2xl text-gray-600 mb-8 text-lg">
                  Transform your mind, reduce stress, and find balance through guided meditation.
                  Start your journey to mindfulness today.
                </p>
                <div className="w-full flex flex-col sm:flex-row gap-4 mt-8 px-4 sm:px-0 items-center">
                  <button
                    onClick={() => setTestPhase('email')}
                    className="w-[70%] sm:w-auto md:px-8 px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
                  >
                    Start Meditation Free
                  </button>
                  <button
                    onClick={() => {
                      document.querySelector('.meditation-programs-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-[70%] sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
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
