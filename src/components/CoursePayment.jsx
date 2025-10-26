import React, { useState } from "react";
import axios from "axios";

const CoursePayment = ({ program = null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEnroll = async () => {
    setIsLoading(true);
    setError('');

    try {
      const courseName = program?.title || "Mindfulness Meditation Course";
      const price = program?.price || 2999;
      const priceId = program?.priceId || 'default-course';

      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/create-checkout-session`, {
        courseName,
        price,
        priceId,
      });

      if (response.data.url) {
        window.location.href = response.data.url; // redirect to Stripe checkout
      } else {
        setError('Failed to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setError(
        error.response?.data?.error ||
        'Something went wrong during checkout. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const displayProgram = program || {
    title: "Mindfulness Meditation Course",
    price: 2999,
    description: "Complete meditation course with guided sessions"
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Enroll in Our Meditation Course
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg w-full">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 w-full mb-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {displayProgram.title}
          </h3>
          <p className="text-gray-600 mb-4">{displayProgram.description}</p>

          <div className="py-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg mb-4">
            <span className="text-3xl font-bold text-indigo-600">₹{displayProgram.price}</span>
            <p className="text-sm text-gray-600">One-time payment</p>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            <p>✨ 30-day money-back guarantee</p>
            <p>📱 Lifetime access</p>
            <p>🧘‍♀️ Expert guidance included</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleEnroll}
        disabled={isLoading}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:scale-[1.02]'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </div>
        ) : (
          `Pay ₹${displayProgram.price} & Enroll`
        )}
      </button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          🔒 Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
};

export default CoursePayment;
